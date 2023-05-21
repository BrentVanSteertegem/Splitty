import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Navigation } from '../../core/navigation'
import { AcceptResultScreen, AddItemsScreen, AddPeopleScreen, ScanScreen } from '../Screens'
import { DefaultNavigatorOptions } from '../style'

const ScanNavigator = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator
            screenOptions={DefaultNavigatorOptions}
        >
            <Stack.Screen
                name={Navigation.SCAN}
                component={ScanScreen}
                options={{ 
                    headerShown: false
                }}
            />
            <Stack.Screen
                name={Navigation.ADDPEOPLE}
                component={AddPeopleScreen}
                options={{
                    headerTitle: 'New bill'
                }}
            />
            <Stack.Screen
                name={Navigation.ADDITEMS}
                component={AddItemsScreen}
            />
            <Stack.Screen
                name={Navigation.ACCEPTRESULT}
                component={AcceptResultScreen}
            />
        </Stack.Navigator>
    )
}

export default ScanNavigator