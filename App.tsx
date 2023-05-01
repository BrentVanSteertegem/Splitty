import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import AppNavigator from './src/app/Navigators/AppNavigator'
import { Variables } from './src/app/style'
import { AppContainer } from './src/app/Components'

const AppTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: Variables.colors.primary,
    background: Variables.colors.backgroundColor,
    text: Variables.colors.headerText,
    card: Variables.colors.primary,
  },
};

const App = () => {
  return (
    <AppContainer>
      <NavigationContainer theme={AppTheme}>
        <AppNavigator />
      </NavigationContainer>
    </AppContainer>
  )
}

export default App