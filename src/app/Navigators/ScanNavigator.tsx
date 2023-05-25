import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Navigation } from '../../core/navigation'
import { AcceptResultScreen, AddItemsScreen, AddPeopleScreen, ScanScreen } from '../Screens'
import { DefaultNavigatorOptions } from '../style'
import { HeaderButtonLeft } from '../Components'
import { HeaderTitle } from '../Components/Design/Text/HeaderTitle'

const ScanNavigator = ({ navigation }) => {
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
                    title: 'New bill',
                    headerLeft: () => (
                        <HeaderButtonLeft
                            onPress={
                                () => navigation.navigate(
                                    Navigation.SCANNAVIGATOR, 
                                    {
                                        screen: Navigation.SCAN
                                    }
                                )
                            }
                        >
                            <HeaderTitle>&lt;</HeaderTitle>
                        </HeaderButtonLeft>
                    ),
                    headerBackVisible: false,
                }}
            />
            <Stack.Screen
                name={Navigation.ADDITEMS}
                component={AddItemsScreen}
                options={
                    ({ route }) => ({
                        title: route.params?.billName || 'New bill',
                        headerLeft: () => (
                            <HeaderButtonLeft
                                onPress={
                                    () => navigation.navigate(
                                        Navigation.SCANNAVIGATOR, 
                                        {
                                            screen: Navigation.ADDPEOPLE,
                                            params: {
                                                bill: route.params.bill!,
                                                people: route.params.people!,
                                                billName: route.params?.billName
                                            }
                                        }
                                    )
                                }
                            >
                                <HeaderTitle>&lt;</HeaderTitle>
                            </HeaderButtonLeft>
                        ),
                        headerBackVisible: false,
                    })
                }

            />
            <Stack.Screen
                name={Navigation.ACCEPTRESULT}
                component={AcceptResultScreen}
                options={
                    ({ route }) => ({
                        title: route.params.billName || 'New bill',
                        headerLeft: () => (
                            <HeaderButtonLeft
                                onPress={
                                    () => navigation.navigate(
                                        Navigation.SCANNAVIGATOR, 
                                        {
                                            screen: Navigation.ADDITEMS,
                                            params: {
                                                bill: route.params.bill!,
                                                people: route.params.people!,
                                                billName: route.params?.billName
                                            }
                                        }
                                    )
                                }
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

export default ScanNavigator