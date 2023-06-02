import { useState, useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'
import { Pressable, ScrollView, View } from 'react-native'
import { Bill } from '../types'
import { getData } from '../../core/storage/StoreData'
import { Container, ContentContainer, Divider, SmallVerticalPadding, Text } from '../Components'
import { Variables } from '../style'
import { Navigation } from '../../core/navigation'

const BillsScreen = ({ navigation }) => {
  const [bills, setBills] = useState<Bill[]>([])

  useEffect(() => {
    const getBills = async () => {
      const newBills: Bill[] = await getData('bills') || []
      setBills(newBills)
    }
    getBills()
  }, [useIsFocused()])

  return (
    <ScrollView>
      <SmallVerticalPadding />
      <ContentContainer>
        {bills.map((bill: Bill, index: number) => (
          <Pressable
            onPress={() => navigation.navigate(
              Navigation.BILLNAVIGATOR, 
              { 
                screen: Navigation.BILLDETAIL,
                params: {
                  bill: bill
                }
              }
            )}
            key={index}
          >
            <Container
              flexDirection='row'
              justifyContent='space-between'
            >
              <View>
                <Text>{bill.name}</Text>
                <Text
                  grayedOut={true}
                  fontSize='small'
                >
                  {bill.date}
                </Text>
                <Text
                  grayedOut={true}
                  fontSize='small'
                >
                  {bill.people.length + ' persons - '}
                  <Text
                    color={Variables.colors.green}
                    fontSize='small'
                  >
                    {'X' || 'Everyone'} paid you back
                  </Text>
                </Text>
              </View>
              <Text
                color={Variables.colors.red}
              >
                {bill.currency.length == 1 && `${bill.currency} `}
                {bill.total}
                {bill.currency.length > 1 && ` ${bill.currency}`}
              </Text>
            </Container>
            <SmallVerticalPadding />
            {index < bills.length - 1 &&
              <>
                <Divider color={Variables.colors.gray} />
                <SmallVerticalPadding />
              </>
            }
          </Pressable>
        ))}
      </ContentContainer>
    </ScrollView>
  )
}

export default BillsScreen