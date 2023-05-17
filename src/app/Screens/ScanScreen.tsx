import { useRef } from 'react'
import { Text } from 'react-native'
import { Camera, CameraType } from 'expo-camera'
import { Container, ContentContainer, FlexEndContainer, CenteredContainer } from '../Components/Design/Container'
import { Button } from '../Components/Design/Button'
import { Camera as StCamera } from '../Components/Shared/Camera'
import React from 'react'
import { callGoogleVisionAsync } from '../../core/ocr/callGoogleVisionAsync'

const ScanScreen = () => {
  const [permission, requestPermission] = Camera.useCameraPermissions()
  const cameraRef = useRef<Camera>(null)
  
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
      return await cameraRef.current.takePictureAsync({
        base64: true,
      })
    }
    console.log('No camera')
    return
  }

  const scanBill = async (picture: string) => {
    if (picture) {
      try {
        return callGoogleVisionAsync(picture)
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
      console.log(data)
      window.alert(data)
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