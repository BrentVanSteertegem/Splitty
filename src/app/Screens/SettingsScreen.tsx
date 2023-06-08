import { Variables } from '../style'
import { storeData } from '../../core/storage/StoreData'
import { Button, ContentContainer, LargeVerticalPadding } from '../Components'

const SettingsScreen = () => {
  const deleteBills = async () => {
    await storeData('bills', [])
  }

  return (
    <>
      <LargeVerticalPadding />
      <ContentContainer>
        <Button
          onPress={deleteBills}
          faIconLeft='times-circle'
          type='text'
          color={Variables.colors.red}
        >
          Delete all bills
        </Button>
      </ContentContainer>
    </>
  )
}

export default SettingsScreen