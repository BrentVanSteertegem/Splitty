import { ScrollView, View } from 'react-native'
import { ContentContainer, PersonCard, SmallVerticalPadding } from '../Components'
import { Person } from '../types'
import { storeData } from '../../core/storage/StoreData'

const BillDetailScreen = ({ route }) => {
  const { bills, index } = route.params

  const bill = bills[index]

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