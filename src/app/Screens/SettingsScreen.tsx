import { storeData } from '../../core/storage/StoreData'
import { NavigationProps } from '../types'
import { Variables } from '../style'
import { Button, Container, ContentContainer, LargeVerticalPadding } from '../Components'
import { Navigation } from '../../core/navigation'
import { useAuthContext } from '../Components/Shared/Auth/AuthProvider'
import { logout } from '../../core/modules/auth/api'
import { deleteBills } from '../../core/modules/bill/api'

const SettingsScreen = ({ navigation }: NavigationProps) => {
  const { isLoggedIn, user } = useAuthContext()

  const deleteAllBills = async () => {
    await storeData('bills', [])
    isLoggedIn && await deleteBills(user!.id)
  }

  const handleLogout = async () => {
    await logout()
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
            onPress={deleteAllBills}
            faIconLeft='times-circle'
            type='text'
            color={Variables.colors.red}
            >
            Delete all bills
          </Button>
          {isLoggedIn ? 
            <Button
              onPress={handleLogout}
              faIconLeft='user-alt-slash'
              type='text'
            >
              Logout
            </Button>
          :
            <Button
              onPress={() => navigation.navigate(
                Navigation.AUTHNAVIGATOR, 
                {
                  screen: Navigation.AUTH 
                }
              )}
              faIconLeft='user-alt'
              type='text'
            >
              Login / Register
            </Button>
          }
        </Container>
      </ContentContainer>
    </>
  )
}

export default SettingsScreen