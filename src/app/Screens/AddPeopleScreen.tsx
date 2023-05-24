import { useEffect, useState, useRef } from 'react'
import { ScrollView } from 'react-native'
import { Navigation } from '../../core/navigation'
import { Button, CenteredContainer, ContentContainer, LargeVerticalPadding, FlexEndContainer, Text, TextInput, SmallVerticalPadding, MediumVerticalPadding, PeopleSetter } from '../Components'
import { PersonProps } from '../types'
import { FullScreenContainer } from '../Components/Design/Container/FullScreenContainer'
import { MediumHorizontalPadding } from '../Components'

const AddPeopleScreen = ({ navigation, route }) => {
  const { bill, people: paramsPeople, billName: paramsBillName } = route.params
  
  useEffect(() => {
    if (!bill) {
      navigation.navigate(Navigation.SCANNAVIGATOR, { screen: Navigation.SCAN })
    }
  }, [])
  
  const [billName, setBillName] = useState<string>(paramsBillName || '')
  const [people, setPeople] = useState<PersonProps[]>(paramsPeople || [{
    id: 0,
    name: 'You',
    items: [],
    total: 0
  }])
  
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
          </MediumHorizontalPadding>
          <PeopleSetter
            people={people}
            setPeople={setPeople}
            />
          <MediumVerticalPadding />
          <CenteredContainer>
            <FlexEndContainer>
              <Button
                onPress={() => navigation.navigate(
                  Navigation.SCANNAVIGATOR, { 
                    screen: Navigation.ADDITEMS, 
                    params: { 
                      billName,
                      people,
                      bill
                    } 
                  }
                  )}
                  >
                Split expenses
              </Button>
              <SmallVerticalPadding />
            </FlexEndContainer>
          </CenteredContainer>
        </ContentContainer>
      </FullScreenContainer>
    </ScrollView>
  ) : null
}

export default AddPeopleScreen