import { View, Text } from 'react-native'
import { Button } from '../Components/Design/Button'

const ScanScreen = () => {
  return (
    <View>
      <Text>Scan screen</Text>
      <Button type='primary' size='full-width' onPress={() => window.alert('Scan button clicked')}>Scan</Button>
    </View>
  )
}

export default ScanScreen