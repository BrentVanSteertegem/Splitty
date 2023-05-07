import { Button } from '../Components/Design/Button'

const ScanScreen = () => {
  return (
    <>
      <Button type='primary' size='full-width' fontSize='large' onPress={() => window.alert('Scan button clicked')}>Scan</Button>
    </>
  )
}

export default ScanScreen