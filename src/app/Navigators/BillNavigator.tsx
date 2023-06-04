import { Pressable } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Navigation } from '../../core/navigation'
import { BillDetailScreen, BillsScreen } from '../Screens'
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
                        title: route.params!.bills[route.params!.index].name || 'New bill',
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
                                onPress={() => window.alert('Edit bill')}
                            >
                                <Icon name='edit' size={Variables.sizes.headerIcon} />
                            </Pressable>
                        ),
                    })
                }
            />
        </Stack.Navigator>
    )
}

export default BillNavigator