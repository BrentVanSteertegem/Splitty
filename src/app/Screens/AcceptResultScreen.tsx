import { ScrollView, View } from 'react-native'
import { ContentContainer, LargeVerticalPadding, MediumHorizontalPadding, SmallVerticalPadding, Text } from '../Components'

const AcceptResultScreen = ({ navigation, route }) => {
  const { bill, people, billName } = route.params

  return (
    <ScrollView>
      <LargeVerticalPadding />
      <ContentContainer>
        {people.map((person, index) => (
          <View key={index}>
            <Text fontSize='large'>{person.name}</Text>
            <MediumHorizontalPadding>
              {person.items.map((item, itemIndex) => (
                <View key={itemIndex}>
                  <Text>{item.name}</Text>
                  <Text grayedOut={true} fontSize='small'>{item.price} * {item.quantity}</Text>
                  <Text>
                    {'total: '}  
                    {bill.currency.length == 1 && `${bill.currency} `}
                    {item.totalPrice}
                    {bill.currency.length > 1 && ` ${bill.currency}`}
                  </Text>
                  <SmallVerticalPadding />
                </View>
              ))}
            </MediumHorizontalPadding>
            <Text>
              {'TOTAL: '}  
              {bill.currency.length == 1 && `${bill.currency} `}
              {person.total}
              {bill.currency.length > 1 && ` ${bill.currency}`}
            </Text>
            <SmallVerticalPadding />
          </View>
        ))}
      </ContentContainer>
    </ScrollView>
  )
}

export default AcceptResultScreen