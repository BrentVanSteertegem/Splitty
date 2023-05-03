import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Navigation } from '../../core/navigation'
import { AcceptResultScreen, AddItemsScreen, AddPeopleScreen, ScanScreen } from '../Screens'


// const ScanNavigator = ({ navigation }) => {
const ScanNavigator = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name={Navigation.SCAN}
                component={ScanScreen}
            />
            <Stack.Screen
                name={Navigation.ADDPEOPLE}
                component={AddPeopleScreen}
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