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
          type='negative-text'
        >
          Delete all bills
        </Button>
      </ContentContainer>
    </>
  )
}

export default SettingsScreen