import { Navigation } from '../../core/navigation'
import { ManageItems } from '../Components'
import { NavigationProps } from '../types'

const EditItemsScreen = ({ navigation, route }: NavigationProps) => {
  const { bills, index } = route.params
  const bill = bills[index]

  return (
    <ManageItems
      navigation={navigation}
      bill={bill}
      bills={bills}
      index={index}
      ButtonsNavigator={Navigation.BILLNAVIGATOR}
      editPeopleButtonScreen={Navigation.EDITPEOPLE}
      nextButtonScreen={Navigation.ACCEPTRESULT}
    />
  )
}

export default EditItemsScreen