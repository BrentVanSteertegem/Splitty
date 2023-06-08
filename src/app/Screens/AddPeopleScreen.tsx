import { useEffect, useState, useRef } from 'react'
import { ScrollView } from 'react-native'
import { Navigation } from '../../core/navigation'
import { Button, CenteredContainer, ContentContainer, LargeVerticalPadding, Text, TextInput, SmallVerticalPadding, MediumVerticalPadding, PeopleSetter, FullScreenContainer, Container } from '../Components'
import { Person } from '../types'
import { MediumHorizontalPadding } from '../Components'

const AddPeopleScreen = ({ navigation, route }) => {
  const { bill } = route.params
  
  useEffect(() => {
    if (!bill) {
      navigation.navigate(Navigation.SCANNAVIGATOR, { screen: Navigation.SCAN })
    }
  }, [])
  
  const [people, setPeople] = useState<Person[]>(bill.people)
  
  const addPerson = (newPeople: Person[]) => {
    bill.people = newPeople
    setPeople(newPeople)
  }

  const setBillName = (text: string) => {
    bill.name = text
  }

  const svRef = useRef<ScrollView>(null)
  
  return bill ? (
    <ScrollView
      ref={svRef}
      onContentSizeChange={() => svRef.current!.scrollToEnd({ animated: true })}
      >
      <FullScreenContainer>
        <ContentContainer>
          <LargeVerticalPadding />
          <MediumHorizontalPadding>
            <Text fontSize='large'>Bill name</Text>
          </MediumHorizontalPadding>
          <TextInput 
            onChangeText={setBillName}
            placeholder='Restaurant name e.g.'
            />
          <MediumVerticalPadding />
          <MediumHorizontalPadding>
            <Text fontSize='large'>People</Text>
            <PeopleSetter
              people={people}
              setPeople={addPerson}
            />
          </MediumHorizontalPadding>
          <MediumVerticalPadding />
          <Container
            justifyContent='flex-end'
          >
            <Button
              fontSize='large'
              size='full-width'
              onPress={() => navigation.navigate(
                Navigation.SCANNAVIGATOR, { 
                  screen: Navigation.ADDITEMS, 
                  params: {
                    people,
                    bill
                  } 
                }
              )}
            >
              Split bill
            </Button>
          </Container>
        </ContentContainer>
      </FullScreenContainer>
    </ScrollView>
  ) : null
}

export default AddPeopleScreen