import { useRef } from 'react'
import { useIsFocused } from '@react-navigation/native'
import { Camera, CameraType } from 'expo-camera'
import { Button, Camera as StCamera, Container, ContentContainer, CenteredContainer, SmallVerticalPadding, Text } from '../Components'
import { processBillAsync } from '../../core/ocr/ProcessBillAsync'
import { Navigation } from '../../core/navigation'

const ScanScreen = ({ navigation }) => {
  const [permission, requestPermission] = Camera.useCameraPermissions()
  const cameraRef = useRef<Camera>(null)
  const isFocused = useIsFocused()

  if (!permission) {
    // Camera permissions are still loading
    return <></>
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <ContentContainer>
        <CenteredContainer>
          <Text>Splitty needs access to your camera in order to be able to scan bills</Text>
          <SmallVerticalPadding />
          <Button
            onPress={requestPermission}
            >
              Allow acces
            </Button>
        </CenteredContainer>
      </ContentContainer>
    )
  }
  
  const takePicture = async () => {
    if (cameraRef && cameraRef.current) {
      const picture = await cameraRef.current.takePictureAsync({
        base64: true,
      })
      cameraRef.current.pausePreview()
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
    cameraRef.current!.resumePreview()
    if (picture && picture.base64) {
      const bill = await scanBill(picture.base64)
      navigation.navigate(Navigation.SCANNAVIGATOR, {
        screen: Navigation.ADDPEOPLE,
        params: {
          bill
        },
      })
      return
    }
    console.log('No scan')
    return
  }

  return (
    <Container>
      {isFocused && permission.granted && (
        <StCamera
          type={CameraType.back}
          ref={cameraRef}
        >
          <ContentContainer>
            <Container
              justifyContent='flex-end'
            >
              <Button
                fontSize='large'
                width='100%'
                onPress={onScan}
              >
                  Scan
                </Button>
            </Container>
          </ContentContainer>
        </StCamera>
      )}
    </Container>
  )
}

export default ScanScreen