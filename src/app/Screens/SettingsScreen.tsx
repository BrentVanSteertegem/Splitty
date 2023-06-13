import { storeData } from '../../core/storage/StoreData'
import { NavigationProps } from '../types'
import { Variables } from '../style'
import { Button, Container, ContentContainer, LargeVerticalPadding } from '../Components'
import { Navigation } from '../../core/navigation'

const SettingsScreen = ({ navigation }: NavigationProps) => {
  const deleteBills = async () => {
    await storeData('bills', [])
  }

  return (
    <>
      <LargeVerticalPadding />
      <ContentContainer>
        <Container
          gap={Variables.spacing.medium}
        >
          <Button
            onPress={deleteBills}
            faIconLeft='times-circle'
            type='text'
            color={Variables.colors.red}
            >
            Delete all bills
          </Button>
          <Button
            onPress={() => navigation.navigate(
              Navigation.AUTHNAVIGATOR, 
              {
                screen: Navigation.AUTH 
              }
            )}
            faIconLeft='user'
            type='text'
            >
            Login / Register
          </Button>
        </Container>
      </ContentContainer>
    </>
  )
}

export default SettingsScreen