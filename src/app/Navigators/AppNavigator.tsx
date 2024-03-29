import { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Navigation } from '../../core/navigation'
import { NavigationProps } from '../types'
import { DefaultNavigatorOptions, Variables } from '../style'
import { SettingsScreen } from '../Screens'
import ScanNavigator from './ScanNavigator'
import BillNavigator from './BillNavigator'
import { Icon, useAuthContext } from '../Components'

const AppNavigator = ({ navigation }: NavigationProps) => {
    const Tab = createBottomTabNavigator()

    const { isLoggedIn } = useAuthContext()

    useEffect(() => {
        navigation.navigate(
            Navigation.BILLNAVIGATOR, 
            {
                screen: Navigation.BILLS
            }
        )
    }, [isLoggedIn])

    return (
        <Tab.Navigator
            screenOptions={DefaultNavigatorOptions}
        >
            <Tab.Screen
                name={Navigation.BILLNAVIGATOR}
                component={BillNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Icon name="receipt" color={color} size={Variables.sizes.headerIcon} />
                }}
            />
            <Tab.Screen
                name={Navigation.SCANNAVIGATOR}
                component={ScanNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Icon name="camera" color={color} size={Variables.sizes.headerIcon} />
                }}
            />
            <Tab.Screen
                name={Navigation.SETTINGS}
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ color }) => <Icon name="cog" color={color} size={Variables.sizes.headerIcon} />
                }}
            />
        </Tab.Navigator>
    )
}

export default AppNavigator