import { Pressable } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Navigation } from '../../core/navigation'
import { AcceptEditResultScreen, BillDetailScreen, BillsScreen, EditItemsScreen, EditPeopleScreen } from '../Screens'
import { DefaultNavigatorOptions, Variables } from '../style'
import { HeaderButtonLeft, Icon } from '../Components'
import { HeaderTitle } from '../Components/Design/Text/HeaderTitle'

const BillNavigator = ({ navigation }) => {
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
                        title: route.params!.bills[route.params!.index].name,
                        headerLeft: () => (
                            <HeaderButtonLeft
                                onPress={() => navigation.goBack()}
                            >
                                <HeaderTitle>&lt;</HeaderTitle>
                            </HeaderButtonLeft>
                        ),
                        headerBackVisible: false,
                        headerRight: () => (
                            <Pressable
                                onPress={() => {
                                    navigation.navigate(
                                        Navigation.BILLNAVIGATOR, 
                                        {
                                            screen: Navigation.EDITITEMS,
                                            params: {
                                                bills: route.params!.bills,
                                                index: route.params!.index
                                            }
                                        }
                                    )
                                }}
                            >
                                <Icon name='edit' size={Variables.sizes.headerIcon} />
                            </Pressable>
                        ),
                    })
                }
            />
            <Stack.Screen
                name={Navigation.EDITPEOPLE}
                component={EditPeopleScreen}
                options={
                    ({ route }) => ({
                        title: route.params!.bill.name || 'Nameless bill',
                        headerLeft: () => (
                            <HeaderButtonLeft
                                onPress={() => navigation.navigate(
                                    Navigation.BILLNAVIGATOR,
                                    {
                                        screen: Navigation.BILLDETAIL,
                                        params: {
                                            bills: route.params!.bills,
                                            index: route.params!.index
                                        }
                                    }
                                )}
                            >
                                <HeaderTitle>&lt;</HeaderTitle>
                            </HeaderButtonLeft>
                        ),
                        headerBackVisible: false,
                    })
                }
            />
            <Stack.Screen
                name={Navigation.EDITITEMS}
                component={EditItemsScreen}
                options={
                    ({ route }) => ({
                        title: route.params!.bills[route.params!.index].name || 'Nameless bill',
                        headerLeft: () => (
                            <HeaderButtonLeft
                                onPress={() => navigation.navigate(
                                    Navigation.BILLNAVIGATOR,
                                    {
                                        screen: Navigation.BILLDETAIL,
                                        params: {
                                            bills: route.params!.bills,
                                            index: route.params!.index
                                        }
                                    }
                                )}
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
                component={AcceptEditResultScreen}
                options={
                    ({ route }) => ({
                        title: route.params!.bill.name || 'Nameless bill',
                        headerLeft: () => (
                            <HeaderButtonLeft
                                onPress={() => navigation.navigate(
                                    Navigation.BILLNAVIGATOR,
                                    {
                                        screen: Navigation.BILLDETAIL,
                                        params: {
                                            bills: route.params!.bills,
                                            index: route.params!.index
                                        }
                                    }
                                )}
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