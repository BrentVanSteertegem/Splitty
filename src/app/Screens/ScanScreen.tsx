import { useRef } from 'react'
import { useIsFocused } from '@react-navigation/native'
import { Camera, CameraType } from 'expo-camera'
import { Button, Camera as StCamera, Container, ContentContainer, CenteredContainer, SmallVerticalPadding, Text } from '../Components'
import { processBillAsync } from '../../core/ocr/ProcessBillAsync'
import { Bill } from '../types'
import { Navigation } from '../../core/navigation'
import { format } from 'date-fns'

const testingBill: Bill = {
  date: format(new Date(), 'dd/MM/yyyy'),
  people: [{
    id: 0,
    name: 'You',
    items: [],
    total: 0
  }],
  items: [
    {
      name: 'BICKY CRISPY',
      price: 3.70,
      quantity: 2,
      totalPrice: 7.40,
    },
    {
      name: 'MEXICANO',
      price: 2.60,
      quantity: 3,
      totalPrice: 7.80,
    },
    {
      name: 'GEBAKKEN LOOKWORST',
      price: 2.70,
      quantity: 1,
      totalPrice: 2.70,
    },
    {
      name: 'KLEIN PAK',
      price: 2.60,
      quantity: 2,
      totalPrice: 5.20,
    },
    {
      name: 'STOOFVLEES',
      price: 5.50,
      quantity: 1,
      totalPrice: 5.50,
    },
    {
      name: 'MINI PAK',
      price: 2.20,
      quantity: 1,
      totalPrice: 2.20,
    },
    {
      name: 'TARTAAR',
      price: 0.90,
      quantity: 2,
      totalPrice: 1.80,
    }
  ],
  total: 32.60,
  currency: 'EUR'
}

const ScanScreen = ({ navigation }) => {
  const [permission, requestPermission] = Camera.useCameraPermissions()
  const cameraRef = useRef<Camera>(null)
  const isFocused = useIsFocused()
  // const [data, setData] = useState<Bill | undefined>() // TODO: remove this after testing
  
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
      cameraRef.current.pausePreview() //TODO: enable this again after testing
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
    cameraRef.current?.resumePreview()
    if (picture && picture.base64) {
      // const bill = await scanBill(picture.base64) // TODO: always enable this after testing
      // setData(bill) // TODO: always enable this after testing
      // console.log(bill) // TODO: remove after testing
      navigation.navigate(Navigation.SCANNAVIGATOR, {
        screen: Navigation.ADDPEOPLE,
        params: {
          bill: { ...testingBill }
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