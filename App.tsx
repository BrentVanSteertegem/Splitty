import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { Variables } from './src/app/style'
import { AppContainer } from './src/app/Components'
import AppContent from './src/app/Navigators/AppContent';
import { NavigationProps } from './src/app/types';

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

const App = ({ navigation, route }: NavigationProps) => {
  return (
    <AppContainer>
      <NavigationContainer theme={AppTheme}>
        <AppContent
          navigation={navigation}
          route={route}
        />
      </NavigationContainer>
    </AppContainer>
  )
}

export default App