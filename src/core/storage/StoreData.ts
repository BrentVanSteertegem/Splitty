import AsyncStorage from '@react-native-async-storage/async-storage'

const storeData = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value)
    return await AsyncStorage.setItem(`@${key}`, jsonValue)
  } catch {
    console.log('Error storing data.')
  }
}

const getData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(`@${key}`)
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch {
    console.log('Error getting data.')
  }
}

export {
  storeData,
  getData,
}