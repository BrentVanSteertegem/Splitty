import { useState, useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'
import { Pressable, ScrollView, View } from 'react-native'
import { Bill, NavigationProps, Person } from '../types'
import { Navigation } from '../../core/navigation'
import { getData } from '../../core/storage/StoreData'
import { Variables } from '../style'
import { ContentContainer, Divider, SmallVerticalPadding, Text } from '../Components'
import { useAuthContext } from '../Components/Shared/Auth/AuthProvider'
import { getBills } from '../../core/modules/bill/api'

const BillsScreen = ({ navigation }: NavigationProps) => {
  const { isLoggedIn, user } = useAuthContext()
  const [bills, setBills] = useState<Bill[]>([])

  useEffect(() => {
    const getAllBills = async () => {
      let newBills: Bill[] = await getData('bills') || []
      if (isLoggedIn) {
        const { data } = await getBills(user!.id)
        newBills = data!.map((supabaseBill: any) => {
          return supabaseBill.bill
        })
      }
      setBills(newBills)
    }
    getAllBills()
  }, [useIsFocused(), bills])

  const getAmountWhoPaidBack = (people: Person[]) => {
    let amount = 0
    people.forEach((person: Person) => {
      if (person.hasPaid) amount++
    })
    return amount == people.length ? 'Everyone' : amount
  }

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
                  bills,
                  index
                }
              }
            )}
            key={index}
          >
            <View // I'm using a styled View because a styled component doesn't work here
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            >
              <View>
                <Text
                  crossedOut={getAmountWhoPaidBack(bill.people) == 'Everyone' ? true : false}
                >{bill.name}</Text>
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
                    {getAmountWhoPaidBack(bill.people)} paid you back
                  </Text>
                </Text>
              </View>
              <Text
                color={Variables.colors.red}
                crossedOut={getAmountWhoPaidBack(bill.people) == 'Everyone' ? true : false}
              >
                {bill.currency.length == 1 && `${bill.currency} `}
                {bill.total}
                {bill.currency.length > 1 && ` ${bill.currency}`}
              </Text>
            </View>
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