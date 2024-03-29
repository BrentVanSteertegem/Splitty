import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Navigation } from '../../core/navigation'
import { NavigationProps } from '../types'
import { DefaultNavigatorOptions } from '../style'
import { AcceptResultScreen, AddItemsScreen, AddPeopleScreen, ScanScreen } from '../Screens'
import { HeaderButtonLeft, HeaderTitle } from '../Components'

const ScanNavigator = ({ navigation }: NavigationProps) => {
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
                        title: route.params!.bill.name || 'New bill',
                        headerLeft: () => (
                            <HeaderButtonLeft
                                onPress={
                                    () => navigation.navigate(
                                        Navigation.SCANNAVIGATOR, 
                                        {
                                            screen: Navigation.ADDPEOPLE,
                                            params: {
                                                bill: route.params!.bill
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
                        title: route.params!.bill.name || 'New bill',
                        headerLeft: () => (
                            <HeaderButtonLeft
                                onPress={
                                    () => navigation.navigate(
                                        Navigation.SCANNAVIGATOR, 
                                        {
                                            screen: Navigation.ADDITEMS,
                                            params: {
                                                bill: route.params!.bill
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