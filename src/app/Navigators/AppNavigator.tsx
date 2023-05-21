import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SettingsScreen } from '../Screens'
import { DefaultNavigatorOptions, Variables } from '../style'
import { Navigation } from '../../core/navigation'
import ScanNavigator from './ScanNavigator'
import BillNavigator from './BillNavigator'
import { Icon } from '../Components/Design/Icon'

const AppNavigator = () => {
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator screenOptions={DefaultNavigatorOptions}>
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