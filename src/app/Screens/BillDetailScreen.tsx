import { ScrollView, View } from 'react-native'
import { ContentContainer, PersonCard, SmallVerticalPadding } from '../Components'
import { NavigationProps, Person } from '../types'
import { storeData } from '../../core/storage/StoreData'
import { useEffect } from 'react'

const BillDetailScreen = ({ navigation, route }: NavigationProps) => {
  const { bills, index } = route.params
  const bill = bills[index]
  
  useEffect(() => {
    navigation.setOptions({
      title: bills[index].name
    })
  }, [navigation])

  const updatePerson = async (person: Person, peopleIndex: number) => {
    const newBills = [...bills]
    newBills[index].people[peopleIndex] = { ...person }
    return await storeData('bills', bills)
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