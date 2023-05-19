import { useRef, useState } from 'react'
import { Text } from 'react-native'
import { Camera, CameraType } from 'expo-camera'
import { Container, ContentContainer, FlexEndContainer, CenteredContainer } from '../Components/Design/Container'
import { Button } from '../Components/Design/Button'
import { Camera as StCamera } from '../Components/Shared/Camera'
import { processBill } from '../../core/ocr/ProcessBillAsync'
import { Entity, ResponseData } from '../types'

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
      // cameraRef.current.pausePreview()
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
      const data = await scanBill(picture.base64)
      if (data) {
        console.log(data)
        if (data.document && data.document.entities) {
          setData(data)
          data.document.entities.forEach((entity: Entity) => {
            console.log(entity)
            if (entity.type === 'line_item') {
              const textSegments: string[] = []
              entity.properties.forEach((property) => {
                textSegments.push(property.mentionText)
              })
              console.log(textSegments.join(' ')+'\n')
            }
          })
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