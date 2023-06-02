import { ScrollView, View } from 'react-native'
import { Button, Card, Container, ContentContainer, Divider, LargeVerticalPadding, SmallVerticalPadding, Text, XSmallVerticalPadding } from '../Components'
import { Bill, PersonProps } from '../types'
import { Variables } from '../style'
import { Navigation } from '../../core/navigation'
import { getData, storeData } from '../../core/storage/StoreData'

const AcceptResultScreen = ({ navigation, route }) => {
  const { bill, people } = route.params

  const onComplete = async () => {
    const bills: Bill[] = await getData('bills') || []
    bills.push(bill)
    storeData('bills', bills)
    navigation.navigate(Navigation.SCAN, {
      bill: null,
      people: [{
        id: 0,
        name: 'You',
        items: [],
        total: 0
      }],
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
        {people.map((person: PersonProps, index: number) => (
          <View key={index}>
               <Card>
                <Text>{person.name}</Text>
                <XSmallVerticalPadding />
                {person.items.map((item, itemIndex) => (
                  <View key={itemIndex}>
                    <Container
                      gap={Variables.spacing.xsmall}
                      flexDirection='row'
                    >
                      <Text
                        fontSize='small'
                      >
                        {item.quantity}x
                      </Text>
                      <Container
                        flexDirection='row'
                        justifyContent='space-between'
                      >
                        <View>
                          <Text
                            fontSize='small'
                          >{item.name}</Text>
                          <Text
                            grayedOut={true}
                            fontSize='small'
                          >
                            {bill.currency.length == 1 && `${bill.currency} `}
                            {item.price}
                            {bill.currency.length > 1 && ` ${bill.currency}`}
                          </Text>
                        </View>
                        <Text
                          color={Variables.colors.red}
                          fontSize='small'
                        >
                            {bill.currency.length == 1 && `${bill.currency} `}
                            {item.totalPrice}
                            {bill.currency.length > 1 && ` ${bill.currency}`}
                        </Text>
                      </Container>
                    </Container>
                  </View>
                ))}
                <Divider />
                <Container
                  flexDirection='row'
                  justifyContent='flex-end'
                >
                  <Text
                    color={Variables.colors.red}
                  >
                    {bill.currency.length == 1 && `${bill.currency} `}
                    {person.total}
                    {bill.currency.length > 1 && ` ${bill.currency}`}
                  </Text>
                </Container>
            </Card>
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
                    bill: route.params.bill!,
                    people: route.params.people!
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