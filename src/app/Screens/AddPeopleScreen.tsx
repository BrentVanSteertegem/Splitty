import { useEffect, useState } from 'react'
import { Navigation } from '../../core/navigation'
import { Button, CenteredContainer, ContentContainer, LargeVerticalPadding, FlexEndContainer, Text, TextInput, SmallVerticalPadding, MediumVerticalPadding } from '../Components'

const AddPeopleScreen = ({ navigation, route }) => {
  const { bill } = route.params

  useEffect(() => {
    if (!bill) {
      navigation.navigate(Navigation.SCANNAVIGATOR, { screen: Navigation.SCAN })
    }
  }, [])

  const [billName, setBillName] = useState<string>('')

  return bill ? (
    <ContentContainer>
      <LargeVerticalPadding />
      <Text fontSize='large' offset={true}>Bill name</Text>
      <TextInput 
        onChangeText={setBillName}
        placeholder='Restaurant name e.g.'
      />
      <MediumVerticalPadding />
      <Text fontSize='large' offset={true}>People</Text>
      <Text offset={true}>You</Text>
      <Text offset={true}>Chantal</Text>
      <Text offset={true}>Joske</Text>
      <Button faIconLeft='plus'>Add person</Button>
      <CenteredContainer>
        <FlexEndContainer>
          <Button
            onPress={() => window.alert(billName)}
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