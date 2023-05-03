import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Navigation } from '../../core/navigation'
import { BillDetailScreen, BillsScreen } from '../Screens'
import { DefaultNavigatorOptions } from '../style'


// const BillNavigator = ({ navigation }) => {
const BillNavigator = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator screenOptions={DefaultNavigatorOptions}>
            <Stack.Screen
                name={Navigation.BILLS}
                component={BillsScreen}
            />
            <Stack.Screen
                name={Navigation.BILLDETAIL}
                component={BillDetailScreen}
            />
        </Stack.Navigator>
    )
}

export default BillNavigator