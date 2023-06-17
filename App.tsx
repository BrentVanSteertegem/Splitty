import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NavigationProps } from './src/app/types'
import { Variables } from './src/app/style'
import AppContent from './src/app/Navigators/AppContent'
import { AppContainer } from './src/app/Components'
import AuthProvider from './src/app/Components/Shared/Auth/AuthProvider'

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
}

const queryClient = new QueryClient()

const App = ({ navigation, route }: NavigationProps) => {
  return (
    <QueryClientProvider
      client={queryClient}
    >
      <AppContainer>
        <AuthProvider>
          <NavigationContainer
            theme={AppTheme}
          >
            <AppContent
              navigation={navigation}
              route={route}
            />
          </NavigationContainer>
        </AuthProvider>
      </AppContainer>
    </QueryClientProvider>
  )
}

export default App