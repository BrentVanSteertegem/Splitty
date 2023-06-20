import { useRef, useState } from 'react'
import { ScrollView } from 'react-native'
import { Bill, Person } from '../../../types'
import { Container, ContentContainer, FullScreenContainer } from '../../Design/Container'
import { LargeVerticalPadding, MediumHorizontalPadding, MediumVerticalPadding } from '../../Design/Padding'
import { Text } from '../../Design/Text'
import { TextInput } from '../../Design/Input'
import { PeopleSetter } from '../PeopleSetter'
import { Button } from '../../Design/Button'

type ManagePeopleProps = {
    bill: Bill
    bills?: Bill[]
    index?: number
    navigation: any
    buttonNavigator: string
    nextButtonScreen: string
}

export const ManagePeople = ({ bill, bills, index, navigation, buttonNavigator, nextButtonScreen }: ManagePeopleProps) => {
    const [people, setPeople] = useState<Person[]>(bill.people)
    const addPerson = (newPerson: Person) => {
        const newPeople = [...bill.people, newPerson]
        bill.people = newPeople
        setPeople(newPeople)
    }
    const deletePerson = (id: number) => {
        const person = bill.people.find(person => person.id === id)
        person?.items && person.items.length > 0 && bill.items.forEach(item => {
            const personItem = person.items.find((personItem) => personItem.id == item.id)
            if (personItem) {
                item.quantity += personItem.quantity
            }
        })
                
        const newPeople = bill.people.filter(person => person.id !== id)
        bill.people = newPeople
        setPeople(newPeople)
    }
  
    const [billName, setBillName] = useState<string>(bill.name!)
    const updateBillName = (text: string) => {
      bill.name = text
      setBillName(text)
    }
  
    const svRef = useRef<ScrollView>(null)
    
    return (
        <ScrollView
            ref={svRef}
            onContentSizeChange={() => svRef.current!.scrollToEnd({ animated: true })}
        >
            <FullScreenContainer>
                <ContentContainer>
                    <LargeVerticalPadding />
                    <MediumHorizontalPadding>
                        <Text
                            fontSize='large'
                        >
                            Bill name
                        </Text>
                    </MediumHorizontalPadding>
                    <TextInput 
                        value={billName}
                        onChangeText={updateBillName}
                        placeholder='Restaurant name e.g.'
                    />
                    <MediumVerticalPadding />
                    <MediumHorizontalPadding>
                        <Text
                            fontSize='large'
                        >
                            People
                        </Text>
                        <PeopleSetter
                            people={bill.people}
                            addPerson={addPerson}
                            onPersonPress={deletePerson}
                        />
                    </MediumHorizontalPadding>
                    <MediumVerticalPadding />
                    <Container
                        justifyContent='flex-end'
                    >
                        <Button
                            fontSize='large'
                            width='100%'
                            onPress={() => navigation.navigate(
                                buttonNavigator, 
                                { 
                                    screen: nextButtonScreen, 
                                    params: {
                                        people,
                                        bill,
                                        bills,
                                        index
                                    } 
                                }
                            )}
                        >
                            {bills ? 'Update bill' : 'Split bill'}
                        </Button>
                    </Container>
                </ContentContainer>
            </FullScreenContainer>
        </ScrollView>
    )
}