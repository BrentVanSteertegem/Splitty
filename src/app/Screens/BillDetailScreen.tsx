import { useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { storeData } from '../../core/storage/StoreData'
import { NavigationProps, Person } from '../types'
import { ContentContainer, PersonCard, SmallVerticalPadding, useAuthContext } from '../Components'
import { updateBill } from '../../core/modules/bill/api'

const BillDetailScreen = ({ navigation, route }: NavigationProps) => {
  const { bills, index } = route.params
  const bill = bills[index]
  
  const { isLoggedIn } = useAuthContext()

  useEffect(() => {
    navigation.setOptions({
      title: bills[index].name
    })
  }, [useIsFocused()])

  const updatePerson = async (person: Person, peopleIndex: number) => {
    bill.people[peopleIndex] = { ...person }

    bills.splice(index, 1, bill)
    await storeData('bills', bills)
    
    isLoggedIn && await updateBill(bill)
    
    return
  }

  return (
    <ScrollView>
      <SmallVerticalPadding />
      <ContentContainer>
        {bill.people.map((person: Person, index: number) => (
          <View key={index}>
            <PersonCard
              person={person}
              bill={bill}
              isFinished={true}
              updatePerson={(person) => updatePerson(person, index)}
            />
            <SmallVerticalPadding />
          </View>
        ))}
      </ContentContainer>
    </ScrollView>
  )
}

export default BillDetailScreen