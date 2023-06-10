import { ScrollView, View } from 'react-native'
import { Button, Container, ContentContainer, LargeVerticalPadding, PersonCard, SmallVerticalPadding, Text } from '../Components'
import { Bill, Person } from '../types'
import { Navigation } from '../../core/navigation'
import { getData, storeData } from '../../core/storage/StoreData'

const AcceptResultScreen = ({ navigation, route }) => {
  const { bill, people } = route.params

  const onComplete = async () => {
    if (!bill.name || bill.name.trim().length == 0) {
      bill.name = 'Nameless bill'
    }
    
    const bills: Bill[] = await getData('bills') || []
    bills.unshift(bill)
    storeData('bills', bills)
    navigation.navigate(Navigation.SCAN, {
      bill: null
    })
    navigation.navigate(
      Navigation.BILLNAVIGATOR, 
      {
        screen: Navigation.BILLS,
      }
    )
  }

  return (
    <ScrollView>
      <LargeVerticalPadding />
      <ContentContainer>
        <Text fontSize='small'>You can view your splitted bill below. Press “complete” to accept this result or press “edit” to change the result.</Text>
        <LargeVerticalPadding />
        {people.map((person: Person, index: number) => (
          <View key={index}>
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
            onPress={
              () => navigation.navigate(
                Navigation.SCANNAVIGATOR, 
                {
                  screen: Navigation.ADDITEMS,
                  params: {
                    bill: route.params.bill!
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

export default AcceptResultScreen