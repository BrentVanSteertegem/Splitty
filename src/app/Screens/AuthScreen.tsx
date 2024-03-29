import { Navigation } from '../../core/navigation'
import { NavigationProps } from '../types'
import { Variables } from '../style'
import { Button, Container, ContentContainer, CustomVerticalPadding, SmallVerticalPadding, Title } from '../Components'

const AuthScreen = ({ navigation }: NavigationProps) => {
  return (
    <ContentContainer>
      <SmallVerticalPadding />
      <Container
        gap={60}
      >
        <Container
          justifyContent='center'
          alignItems='center'
          gap={Variables.sizes.large}
        >
          <CustomVerticalPadding 
            padding={60}
          />
          <Title
            color={Variables.colors.primary}
            fontSize={80}
          >
            Splitty
          </Title>
        </Container>
        <Container
          alignItems='center'
        >
          <Button
            width={150}
            onPress={() => {
              navigation.navigate(
                Navigation.AUTHNAVIGATOR,
                {
                  screen: Navigation.LOGIN
                }
              )
            }}
          >
            Login
          </Button>
          <Button
            width={150}
            onPress={() => {
              navigation.navigate(
                Navigation.AUTHNAVIGATOR,
                {
                  screen: Navigation.REGISTER
                }
              )
            }}
          >
            Register
          </Button>
          <Button
            type='text'
            width={180}
            onPress={() => {
              navigation.navigate(
                Navigation.APPNAVIGATOR,
                {
                  screen: Navigation.BILLS
                }
              )
            }}
          > 
            Continue as guest
          </Button>
        </Container>
      </Container>
    </ContentContainer>
  )
}

export default AuthScreen