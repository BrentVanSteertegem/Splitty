import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Navigation } from '../../core/navigation'
import AppNavigator from './AppNavigator'
import AuthNavigator from './AuthNavigator'
import { useAuthContext } from '../Components/Shared/Auth/AuthProvider'

const AppContent = () => {
  const { isLoggedIn } = useAuthContext()

  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
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
  )
}

export default AppContent