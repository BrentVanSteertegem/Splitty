import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Navigation } from '../../core/navigation'
import { AcceptResultScreen, AddItemsScreen, AddPeopleScreen, ScanScreen } from '../Screens'
import { DefaultNavigatorOptions, Variables } from '../style'
import { HeaderButtonLeft, Title } from '../Components'

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
                        <HeaderButtonLeft onPress={() => navigation.navigate(Navigation.SCANNAVIGATOR, { screen: Navigation.SCAN })}>
                            <Title
                                style={{
                                    lineHeight: Variables.textSizes.xlarge + Variables.spacing.medium,
                                }}
                            >
                                &lt;
                            </Title>
                        </HeaderButtonLeft>
                    ),
                    headerBackVisible: false,
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