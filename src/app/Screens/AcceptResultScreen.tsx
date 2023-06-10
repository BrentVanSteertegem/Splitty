import { Navigation } from '../../core/navigation'
import { NavigationProps } from '../types'
import { AcceptResult } from '../Components'

const AcceptResultScreen = ({ navigation, route }: NavigationProps) => {
  const { bill, people } = route.params

  return (
    <AcceptResult
      navigation={navigation}
      people={people}
      bill={bill}
      buttonsNavigator={Navigation.SCANNAVIGATOR}
      editItemsScreen={Navigation.ADDITEMS}
    />
  )
}

export default AcceptResultScreen