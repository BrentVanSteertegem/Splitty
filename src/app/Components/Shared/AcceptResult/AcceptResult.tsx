import { ScrollView, View } from 'react-native'
import { Navigation } from '../../../../core/navigation'
import { getData, storeData } from '../../../../core/storage/StoreData'
import { Bill, Person } from '../../../types'
import { LargeVerticalPadding, SmallVerticalPadding } from '../../Design/Padding'
import { Container, ContentContainer } from '../../Design/Container'
import { Text } from '../../Design/Text'
import { PersonCard } from '../PersonCard'
import { Button } from '../../Design/Button'

type AcceptResultProps = {
    navigation: any
    people: Person[]
    bill: Bill
    bills?: Bill[]
    index?: number
    buttonsNavigator: string
    editItemsScreen: string
}

export const AcceptResult = ({ navigation, people, bill, bills, index, buttonsNavigator, editItemsScreen }: AcceptResultProps) => {
    const onComplete = async () => {
        if (!bill.name || bill.name.trim().length == 0) {
            bill.name = 'Nameless bill'
            console.log(bills, index)
        }

        if (bills && index) {
            console.log('update')
            bills!.splice(index!, 1, bill)
            storeData('bills', bills)
            navigation.navigate(
                Navigation.BILLNAVIGATOR, 
                {
                    screen: Navigation.BILLDETAIL,
                    params: {
                        bills,
                        index
                    }
                }
                )
            } else {
                console.log('create')
                const bills: Bill[] = await getData('bills') || []
                bills.unshift(bill)
                storeData('bills', bills)
                navigation.navigate(
                    Navigation.SCANNAVIGATOR,
                    {
                        screen: Navigation.SCAN,
                        params: {
                            bill: null
                        }
                    }
                )
                navigation.navigate(
                    Navigation.BILLNAVIGATOR, 
                    {
                        screen: Navigation.BILLS,
                    }
                )
            }
      }
    
      return (
        <ScrollView>
            <LargeVerticalPadding />
            <ContentContainer>
                <Text
                    fontSize='small'
                >
                    You can view your splitted bill below. Press “complete” to accept this result or press “edit” to change the result.
                </Text>
                <LargeVerticalPadding />
                {people.map((person: Person, index: number) => (
                    <View
                        key={index}
                    >
                        <PersonCard
                            person={person}
                            bill={bill}
                        />
                        <SmallVerticalPadding />
                    </View>
                ))}
                <Container
                    flexDirection='row'
                    justifyContent='space-between'
                >
                    <Button
                        faIconLeft='chevron-left'
                        type='secondary'
                        onPress={() => navigation.navigate(
                            buttonsNavigator, 
                            {
                                screen: editItemsScreen,
                                params: {
                                    bill,
                                    bills,
                                    index
                                }
                            }
                        )
                        }
                    >
                        Edit
                    </Button>
                    <Button
                        onPress={onComplete}
                    >
                        Complete
                    </Button>
                </Container>
                <SmallVerticalPadding />
            </ContentContainer>
        </ScrollView>
      )
}