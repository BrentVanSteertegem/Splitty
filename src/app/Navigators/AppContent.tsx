import { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Navigation } from '../../core/navigation'
import AppNavigator from './AppNavigator'
import AuthNavigator from './AuthNavigator'
import { useAuthContext } from '../Components/Shared/Auth/AuthProvider'
import { getData, storeData } from '../../core/storage/StoreData'

const AppContent = () => {
  const { isLoggedIn } = useAuthContext()
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | undefined>(undefined)

  const Stack = createNativeStackNavigator()

  useEffect(() => {
    const handleFirstLaunch =  async () => {
      setIsFirstLaunch(true)
      await storeData('isNotFirstLaunch', true)
    }

    const checkIfFirstLaunch = async () => {
      const isNotFirstLaunch = await getData('isNotFirstLaunch')
      isNotFirstLaunch ? 
      setIsFirstLaunch(false) :
      handleFirstLaunch()
    }

    checkIfFirstLaunch()
  }, [])

  return isLoggedIn !== undefined && isFirstLaunch !== undefined ? (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName={isFirstLaunch ? Navigation.AUTHNAVIGATOR : Navigation.APPNAVIGATOR}
    >
      {!isLoggedIn &&
        <Stack.Screen
          name={Navigation.AUTHNAVIGATOR}
          component={AuthNavigator}
        />
      }
      <Stack.Screen
        name={Navigation.APPNAVIGATOR}
        component={AppNavigator}
      />
    </Stack.Navigator>
  ) : null
}

export default AppContent