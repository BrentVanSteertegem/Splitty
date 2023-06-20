import { useEffect, useState } from 'react'
import { getData, storeData } from '../../core/storage/StoreData'
import { NavigationProps } from '../types'
import { Variables } from '../style'
import { Button, Container, ContentContainer, LargeVerticalPadding, Modal, SmallVerticalPadding, Text, useAuthContext } from '../Components'
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
  const [showDeleteWarning, setShowDeleteWarning] = useState(false)
  const [showAuthWarning, setShowAuthWarning] = useState(false)
  
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

  const handleAuth = async () => {
    const bills = await getData('bills')
    bills && bills.length > 0 ? 
      setShowAuthWarning(true) :
    navigation.navigate(
      Navigation.AUTHNAVIGATOR, 
      {
        screen: Navigation.AUTH 
      }
    )
  }

  const renderDeleteWarningModal = () => {
    const onDelete = async () => {
      await storeData('bills', [])
      isLoggedIn && await deleteBills(user!.id)
      setShowDeleteWarning(false)
      navigation.navigate(
        Navigation.BILLNAVIGATOR, 
        { 
          screen: Navigation.BILLS 
        }
      )
    }

    const onCancel = () => {
      setShowDeleteWarning(false)
    }

    return (
      <Modal
        onCancel={onCancel}
        buttons={[
          <Button
            key={0}
            onPress={onCancel}
          >
            Cancel
          </Button>,
          <Button
            key={1}
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

  const renderAuthWarningModal = () => {
    const onCancel = () => {
      setShowAuthWarning(false)
    }

    const onContinue = async (saveBillsOnAuthChange: boolean) => {
      await storeData('saveBillsOnAuthChange', saveBillsOnAuthChange)
      navigation.navigate(
        Navigation.AUTHNAVIGATOR, 
        {
          screen: Navigation.AUTH 
        }
      )
    }

    return (
      <Modal
        onCancel={onCancel}
        buttons={[
          <Button
            key={0}
            onPress={onCancel}
            type='negative'
          >
            Cancel
          </Button>,
          <Button
            key={1}
            type='secondary'
            onPress={() => onContinue(false)}
          >
            Don't upload
          </Button>,
           <Button
            key={2}
            onPress={() => onContinue(true)}
          >
           Upload
         </Button>,
        ]}
      >
        <Text>
          Looks like you have split some bills while you were not logged in.
        </Text>
        <SmallVerticalPadding />
        <Text>
          Would you like to upload them to your account?
        </Text>
      </Modal>
    )
  }

  return (
    <>
      {showDeleteWarning && renderDeleteWarningModal()}
      {showAuthWarning && renderAuthWarningModal()}
      <LargeVerticalPadding />
      <ContentContainer>
        <Container
          gap={Variables.spacing.medium}
        >
          <Button
            onPress={() => setShowDeleteWarning(true)}
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
              onPress={handleAuth}
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