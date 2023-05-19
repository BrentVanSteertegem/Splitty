import { useRef, useState } from 'react'
import { Text } from 'react-native'
import { Camera, CameraType } from 'expo-camera'
import { Container, ContentContainer, FlexEndContainer, CenteredContainer } from '../Components/Design/Container'
import { Button } from '../Components/Design/Button'
import { Camera as StCamera } from '../Components/Shared/Camera'
import { processBill } from '../../core/ocr/ProcessBillAsync'
import { Bill, Entity, Item, ResponseData } from '../types'

const ScanScreen = () => {
  const [permission, requestPermission] = Camera.useCameraPermissions()
  const cameraRef = useRef<Camera>(null)
  const [data, setData] = useState<ResponseData>()
  
  if (!permission) {
    // Camera permissions are still loading
    return <></>
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <ContentContainer>
        <CenteredContainer>
          <Text style={{ textAlign: 'center' }}>Splitty needs access to your camera in order to be able to scan bills</Text>
          <Button onPress={requestPermission}>Allow acces</Button>
        </CenteredContainer>
      </ContentContainer>
    )
  }
  
  const takePicture = async () => {
    if (cameraRef && cameraRef.current) {
      const picture = await cameraRef.current.takePictureAsync({
        base64: true,
      })
      // cameraRef.current.pausePreview() //TODO: enable this again after testing
      return picture
    }
    console.log('No camera')
    return
  }

  const scanBill = async (pictureBase64: string) => {
    if (pictureBase64) {
      try {
        return processBill(pictureBase64)
      } catch {
        console.log('No ocr')
        return
      }
    }
    console.log('No picture')
    return
  }

  let picture

  const onScan = async () => {
    picture = await takePicture()
    if (picture && picture.base64) {
      const data = await scanBill(picture.base64) // TODO: always enable this after testing
      if (data) {
        if (data.document && data.document.entities) {
          setData(data) //TODO: always enable this after testing
          const bill: Bill = {
            items: [],
            total: 0,
            currency: ''
          }
          data.document.entities.forEach((entity: Entity) => {
            switch (entity.type){
              case 'line_item':
                const item: Item = {
                  name:'',
                  quantity: 0,
                  totalPrice: 0,
                  notes: [],
                }
                entity.properties.forEach((property) => {
                  switch (property.type) {
                    case 'line_item/amount':
                      const totalPrice = parseFloat(property.mentionText)
                      typeof totalPrice === 'number' && !isNaN(totalPrice) ? item.totalPrice = totalPrice : item.notes!.push('Could not establish the total price for this item.')
                      break
                    case 'line_item/description':
                      item.description = property.mentionText
                      break
                    case 'line_item/quantity':
                      while (isNaN(parseInt(property.mentionText[0]))) {
                        property.mentionText = property.mentionText.slice(1)
                      }
                      while (isNaN(parseInt(property.mentionText[property.mentionText.length - 1]))) {
                        property.mentionText = property.mentionText.slice(0, -1)
                      }
                      const quantity = parseInt(property.mentionText)
                      typeof quantity === 'number' && !isNaN(quantity) ? item.quantity = quantity : item.notes!.push('Could not establish the quantity of this item.')
                      break
                    case 'line_item/unit':
                      item.name = property.mentionText
                      break
                    case 'line_item/unit_price':
                      const price = parseFloat(property.mentionText)
                      typeof price === 'number' && !isNaN(price) ? item.price = price : item.notes!.push('Could not establish the unit price for this item.')
                      break
                  }
                })
                if (!item.price) {
                  item.totalPrice && item.quantity ? item.price = item.totalPrice / item.quantity : item.notes!.push('Could not establish the unit price for this item.')
                }
                if (!item.quantity) {
                  item.totalPrice && item.price ? item.quantity = item.totalPrice / item.price : item.notes!.push('Could not establish the quantity of this item.')
                }
                if (!item.totalPrice) {
                  item.quantity && item.price ? item.totalPrice = item.quantity * item.price : item.notes!.push('Could not establish the total price for this item.')
                }
                if (!item.name) {
                  if (item.description) {
                    item.name = item.description 
                    item.description = undefined
                  } else {
                    item.notes!.push('Could not establish the name of this item.')
                  }
                }
                bill.items.push(item)
                break
              case 'net_amount':
                bill.total = parseFloat(entity.mentionText)
                break
              case 'currency':
                bill.currency = entity.mentionText
                break
            } 
          })
          console.log(bill) // TODO: delete this after testing
          return
        }
        console.log('No entities')
      } else {
        console.log('No data')
      }
      cameraRef.current?.resumePreview()
      return
    }
    console.log('No scan')
    return
  }

  return (
    <Container>
      <StCamera
        type={CameraType.back}
        ref={cameraRef}
      >
        <ContentContainer>
          <FlexEndContainer>
            <Button fontSize='large' size='full-width' onPress={onScan}>Scan</Button>
          </FlexEndContainer>
        </ContentContainer>
      </StCamera>
    </Container>
  )
}

export default ScanScreen