import { Text } from 'react-native'
import { Camera, CameraType } from 'expo-camera'
import { Container, ContentContainer, FlexEndContainer, CenteredContainer } from '../Components/Design/Container'
import { Button } from '../Components/Design/Button'
import { Camera as StCamera } from '../Components/Shared/Camera'

const ScanScreen = () => {
  const [permission, requestPermission] = Camera.useCameraPermissions()

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

  return (
    <Container>
      <StCamera type={CameraType.back}>
        <ContentContainer>
          <FlexEndContainer>
            <Button fontSize='large' size='full-width' onPress={() => {window.alert('Scan button clicked')}}>Scan</Button>
          </FlexEndContainer>
        </ContentContainer>
      </StCamera>
    </Container>
  )
}

export default ScanScreen