import { useState } from 'react'
import { ScrollView } from 'react-native'
import { BillItemsList, Button, Container, ContentContainer, FullScreenContainer, LargeVerticalPadding, MediumVerticalPadding, PersonSelector, SmallVerticalPadding } from '../Components'
import { Navigation } from '../../core/navigation'
import { Person } from '../types'

const AddItemsScreen = ({ navigation, route }) => {
  const { bill } = route.params

  const [people, setPeople] = useState(bill.people)
  const updatePeople = (newPeople: Person[]) => {
    bill.people = newPeople
    setPeople(newPeople)
  }

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
            alignItems='flex-end'  
          >
            <Container
              justifyContent='flex-end'
            >
              <Button
                onPress={() => navigation.navigate(Navigation.SCANNAVIGATOR, { 
                  screen: Navigation.ACCEPTRESULT,
                  params: {
                    bill,
                    people
                  }
                })}
                faIconRight='chevron-right'
              >
                Next
              </Button>
            </Container>
            <SmallVerticalPadding />
          </Container>
        </ContentContainer>
      </FullScreenContainer>
    </ScrollView>
  )
}

export default AddItemsScreen