import { Navigation } from '../../core/navigation'
import { AcceptResult } from '../Components'
import { NavigationProps } from '../types'

const AcceptEditResultScreen = ({ navigation, route }: NavigationProps) => {
  const { bill, bills, index, people } = route.params

  return (
    <AcceptResult
      navigation={navigation}
      people={people}
      bill={bill}
      buttonsNavigator={Navigation.BILLNAVIGATOR}
      editItemsScreen={Navigation.EDITITEMS}
      bills={bills}
      index={index}
    />
  )
}

export default AcceptEditResultScreen