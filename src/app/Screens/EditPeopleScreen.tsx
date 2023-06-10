import { NavigationProps } from '../types'
import { Navigation } from '../../core/navigation'
import { ManagePeople } from '../Components'

const EditPeopleScreen = ({ navigation, route }: NavigationProps) => {
  const { bill, bills, index } = route.params
  
  return (
    <ManagePeople
      bill={bill}
      bills={bills}
      index={index}
      navigation={navigation}
      buttonNavigator={Navigation.BILLNAVIGATOR}
      nextButtonScreen={Navigation.EDITITEMS}
    />
  )
}

export default EditPeopleScreen