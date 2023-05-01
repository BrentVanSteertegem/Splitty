import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BillsScreen, ScanScreen, SettingsScreen } from '../Screens'
import { DefaultNavigatorOptions, Variables } from '../style'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { Navigation } from '../../core/navigation'

const AppNavigator = () => {
    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator screenOptions={DefaultNavigatorOptions}>
            <Tab.Screen
                name={Navigation.BILLS}
                component={BillsScreen}
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome5 name="receipt" color={color} size={Variables.sizes.headerIcon} />
                }}
            />
            <Tab.Screen
                name={Navigation.SCAN}
                component={ScanScreen}
                options={{
                    headerStyle: {
                        height: 0
                    },
                    tabBarIcon: ({ color }) => <FontAwesome5 name="camera" color={color} size={Variables.sizes.headerIcon} />
                }}
            />
            <Tab.Screen
                name={Navigation.SETTINGS}
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome5 name="cog" color={color} size={Variables.sizes.headerIcon} />
                }}
            />
        </Tab.Navigator>
    )
}

export default AppNavigator