import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Navigation } from '../../core/navigation'
import { NavigationProps } from '../types'
import { DefaultNavigatorOptions } from '../style'
import { FirstLaunchScreen, LoginScreen, RegisterScreen } from '../Screens'
import { HeaderButtonLeft, HeaderTitle } from '../Components'

const AuthNavigator = ({ navigation }: NavigationProps) => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator
            screenOptions={DefaultNavigatorOptions}
        >
            <Stack.Screen
                name={Navigation.FIRSTLAUNCH}
                component={FirstLaunchScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name={Navigation.LOGIN}
                component={LoginScreen}
                options={{
                    headerLeft: () => (
                        <HeaderButtonLeft
                            onPress={() => navigation.navigate(
                                Navigation.AUTHNAVIGATOR,
                                {
                                    screen: Navigation.FIRSTLAUNCH,
                                }
                            )}
                        >
                            <HeaderTitle>&lt;</HeaderTitle>
                        </HeaderButtonLeft>
                    ),
                    headerBackVisible: false,
                    
                }}
            />
            <Stack.Screen
                name={Navigation.REGISTER}
                component={RegisterScreen}
                options={{
                    headerLeft: () => (
                        <HeaderButtonLeft
                            onPress={() => navigation.navigate(
                                Navigation.AUTHNAVIGATOR,
                                {
                                    screen: Navigation.FIRSTLAUNCH,
                                }
                            )}
                        >
                            <HeaderTitle>&lt;</HeaderTitle>
                        </HeaderButtonLeft>
                    ),
                    headerBackVisible: false,
                    
                }}
            />
        </Stack.Navigator>
    )
}

export default AuthNavigator