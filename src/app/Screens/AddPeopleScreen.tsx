import { useEffect } from 'react'
import { Navigation } from '../../core/navigation'
import { NavigationProps } from '../types'
import { ManagePeople } from '../Components'

const AddPeopleScreen = ({ navigation, route }: NavigationProps) => {
  const { bill } = route.params
  
  useEffect(() => {
    if (!bill) {
      navigation.navigate(Navigation.SCANNAVIGATOR, { screen: Navigation.SCAN })
    }
  }, [])
  
  return bill ? (
    <ManagePeople
      bill={bill}
      navigation={navigation}
      buttonNavigator={Navigation.SCANNAVIGATOR}
      nextButtonScreen={Navigation.ADDITEMS}
    />
  ) : null
}

export default AddPeopleScreen