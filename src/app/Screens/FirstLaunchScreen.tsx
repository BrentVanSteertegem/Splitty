import { Navigation } from '../../core/navigation'
import { NavigationProps } from '../types'
import { Button } from '../Components'

const FirstLaunchScreen = ({ navigation }: NavigationProps) => {
  return (
    <>
      <Button
        onPress={() => {
          navigation.navigate(
            Navigation.AUTHNAVIGATOR,
            {
              screen: Navigation.LOGIN
            }
          )
        }}
      >
        Login
      </Button>
      <Button
        onPress={() => {
          navigation.navigate(
            Navigation.AUTHNAVIGATOR,
            {
              screen: Navigation.REGISTER
            }
          )
        }}
      >
        Register
      </Button>
      <Button
        type='text'
        onPress={() => {
          navigation.navigate(
            Navigation.APPNAVIGATOR,
            {
              screen: Navigation.BILLS
            }
          )
        }}
      >
        Continue as guest
      </Button>
    </>
  )
}

export default FirstLaunchScreen