import { useEffect, useState } from 'react'
import { Navigation } from '../../core/navigation'
import { Button, CenteredContainer, ContentContainer, LargeVerticalPadding, FlexEndContainer, Text, TextInput, SmallVerticalPadding, MediumVerticalPadding, Offset, PeopleSetter } from '../Components'
import { PersonProps } from '../types'

const AddPeopleScreen = ({ navigation, route }) => {
  const { bill } = route.params

  useEffect(() => {
    if (!bill) {
      navigation.navigate(Navigation.SCANNAVIGATOR, { screen: Navigation.SCAN })
    }
  }, [])

  const [billName, setBillName] = useState<string>('')
  const [people, setPeople] = useState<PersonProps[]>([{
    name: 'You',
    items: [],
    total: 0
  }])

  return bill ? (
    <ContentContainer>
      <LargeVerticalPadding />
      <Offset>
        <Text fontSize='large'>Bill name</Text>
      </Offset>
      <TextInput 
        onChangeText={setBillName}
        placeholder='Restaurant name e.g.'
      />
      <MediumVerticalPadding />
      <Offset>
        <Text fontSize='large'>People</Text>
      </Offset>
      <PeopleSetter
        people={people}
        setPeople={setPeople}
      />
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
  ) : null
}

export default AddPeopleScreen