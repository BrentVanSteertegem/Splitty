import { useRef, useState } from 'react'
import { Text } from 'react-native'
import { Camera, CameraType } from 'expo-camera'
import { Container, ContentContainer, FlexEndContainer, CenteredContainer } from '../Components/Design/Container'
import { Button } from '../Components/Design/Button'
import { Camera as StCamera } from '../Components/Shared/Camera'
import { processBillAsync } from '../../core/ocr/ProcessBillAsync'
import { Bill } from '../types'

const ScanScreen = () => {
  const [permission, requestPermission] = Camera.useCameraPermissions()
  const cameraRef = useRef<Camera>(null)
  const [data, setData] = useState<Bill | undefined>() // TODO: remove this after testing
  
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
        return processBillAsync(pictureBase64)
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
      const bill = await scanBill(picture.base64) // TODO: always enable this after testing
      setData(bill) // TODO: always enable this after testing
      console.log(bill)
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