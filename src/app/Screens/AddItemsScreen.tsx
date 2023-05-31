import { useState } from 'react'
import { ScrollView } from 'react-native'
import { BillItemsList, Button, Container, ContentContainer, FullScreenContainer, LargeVerticalPadding, MediumVerticalPadding, PersonSelector, SmallVerticalPadding } from '../Components'
import { Navigation } from '../../core/navigation'

const AddItemsScreen = ({ navigation, route }) => {
  const { bill, people: paramsPeople, billName } = route.params

  const [people, setPeople] = useState(paramsPeople)
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
            setPeople={setPeople}
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
                    people,
                    billName
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