import { useEffect, useState } from 'react'
import { storeData } from '../../core/storage/StoreData'
import { NavigationProps, Profile } from '../types'
import { Variables } from '../style'
import { Button, Container, ContentContainer, LargeVerticalPadding, Modal, Text, useAuthContext } from '../Components'
import { Navigation } from '../../core/navigation'
import { logout } from '../../core/modules/auth/api'
import { deleteBills } from '../../core/modules/bill/api'
import { getProfile } from '../../core/modules/profile/api'

type SupabaseProfile = {
  id: string
  first_name: string
  last_name: string
}

const SettingsScreen = ({ navigation }: NavigationProps) => {
  const [showModal, setShowModal] = useState(false)

  const { isLoggedIn, user } = useAuthContext()

  const [profile, setProfile] = useState<SupabaseProfile | undefined>(user ? user.user_metadata.data : undefined)
  useEffect(() => {
    const updateProfile = async () => {
      const profile = await getProfile(user!.id)
      setProfile(profile.data)
    }
    user && updateProfile()
  }, [user])

  const handleLogout = async () => {
    await logout()
    await storeData('bills', [])
  }

  const renderDeleteAllBillsModal = () => {
    const onDelete = async () => {
      await storeData('bills', [])
      isLoggedIn && await deleteBills(user!.id)
      setShowModal(false)
      navigation.navigate(
        Navigation.BILLNAVIGATOR, 
        { 
          screen: Navigation.BILLS 
        }
      )
    }

    const onCancel = () => {
      setShowModal(false)
    }

    return (
      <Modal
        onCancel={onCancel}
        buttons={[
          <Button
            key={1}
            onPress={onCancel}
          >
            Cancel
          </Button>,
          <Button
            key={0}
            type='negative'
            onPress={onDelete}
          >
            Delete
          </Button>,
        ]}
      >
        <Text>
          Deleting all bills is a destructive action. 
        </Text>
        <Text>
          Are you sure you want to continue?
        </Text>
      </Modal>
    )
}

  return (
    <>
      {showModal && renderDeleteAllBillsModal()}
      <LargeVerticalPadding />
      <ContentContainer>
        <Container
          gap={Variables.spacing.medium}
        >
          <Button
            onPress={() => setShowModal(true)}
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
              <Container
                flexDirection='row'
                alignItems='center'
                justifyContent='space-between'
                gap={Variables.spacing.medium}
              >
              <Text>
                Logout
              </Text>
              <Text
                fontSize='small'
                color={Variables.colors.darkGray}
              >
                {profile && profile.first_name} {profile && profile.last_name}
              </Text>
              </Container>
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