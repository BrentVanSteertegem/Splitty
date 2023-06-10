import { Navigation } from '../../core/navigation'
import { ManageItems } from '../Components'
import { NavigationProps } from '../types'

const AddItemsScreen = ({ navigation, route }: NavigationProps) => {
  const { bill } = route.params

  return (
    <ManageItems
      navigation={navigation}
      bill={bill}
      ButtonsNavigator={Navigation.SCANNAVIGATOR}
      nextButtonScreen={Navigation.ACCEPTRESULT}
    />
  )
}

export default AddItemsScreen