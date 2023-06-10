import { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { Bill, Person } from '../../../types'
import { Container, ContentContainer, FullScreenContainer } from '../../Design/Container'
import { LargeVerticalPadding, MediumVerticalPadding, SmallVerticalPadding } from '../../Design/Padding'
import { PersonSelector } from '../PersonSelector'
import { BillItemsList } from '../BillItemsList'
import { Button } from '../../Design/Button'
import { useIsFocused } from '@react-navigation/native'

type ManageItemsProps = {
    navigation: any
    bill: Bill
    bills?: Bill[]
    index?: number
    ButtonsNavigator: string
    editPeopleButtonScreen?: string
    nextButtonScreen: string
}

export const ManageItems = ({ navigation, bill, bills, index, ButtonsNavigator, editPeopleButtonScreen, nextButtonScreen }: ManageItemsProps) => {
    const [people, setPeople] = useState(bill.people)
    const updatePeople = (newPeople: Person[]) => {
      bill.people = newPeople
      setPeople(newPeople)
    }
    useEffect(() => {
        // Refresh people when returning from edit (or add) people screen
        setPeople(bill.people)
    }, [useIsFocused()])
  
    const [activePersonIndex, setActivePersonIndex] = useState(0)
  
    return (
        <ScrollView>
            <FullScreenContainer>
                <LargeVerticalPadding />
                <PersonSelector
                    people={people}
                    activePersonIndex={activePersonIndex}
                    setActivePersonIndex={setActivePersonIndex}
                />
                <ContentContainer>
                    <BillItemsList
                        bill={bill}
                        people={people}
                        setPeople={updatePeople}
                        activePersonIndex={activePersonIndex}
                    />
                    <MediumVerticalPadding />
                    <Container
                        flexDirection='row'
                        justifyContent={editPeopleButtonScreen ? 'space-between' : 'flex-end'}
                        alignItems='flex-end'
                    >
                        {editPeopleButtonScreen &&
                            <Button
                                onPress={() => navigation.navigate(
                                    ButtonsNavigator, 
                                    { 
                                        screen: editPeopleButtonScreen,
                                        params: {
                                            bill,
                                            bills,
                                            index
                                        }
                                    }
                                )}
                                faIconLeft='chevron-left'
                                type='secondary'
                            >
                                Edit people
                            </Button>
                        }
                        <Button
                            onPress={() => navigation.navigate(
                                ButtonsNavigator, 
                                { 
                                    screen: nextButtonScreen,
                                    params: {
                                        bill,
                                        people,
                                        bills,
                                        index
                                    }
                                }
                            )}
                            faIconRight='chevron-right'
                        >
                            Next
                        </Button>
                    </Container>
                    <SmallVerticalPadding />
                </ContentContainer>
            </FullScreenContainer>
      </ScrollView>
    )
}