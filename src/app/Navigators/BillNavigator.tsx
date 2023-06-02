import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Navigation } from '../../core/navigation'
import { BillDetailScreen, BillsScreen } from '../Screens'
import { DefaultNavigatorOptions } from '../style'
import { HeaderButtonLeft } from '../Components'
import { HeaderTitle } from '../Components/Design/Text/HeaderTitle'

const BillNavigator = ({ navigation, route }) => {
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
                options={
                    ({ route }) => ({
                        title: route.params!.bill.name || 'New bill',
                        headerLeft: () => (
                            <HeaderButtonLeft
                                onPress={() => navigation.goBack()}
                            >
                                <HeaderTitle>&lt;</HeaderTitle>
                            </HeaderButtonLeft>
                        ),
                        headerBackVisible: false,
                    })
                }
            />
        </Stack.Navigator>
    )
}

export default BillNavigator