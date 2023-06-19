import * as yup from 'yup'
import { useMutation } from '@tanstack/react-query'
import { login } from '../../core/modules/auth/api'
import { Container, ContentContainer, CustomVerticalMargin, Form, FormSubmitButton, FormTextInput, SmallVerticalPadding, Text } from '../Components'
import { Variables } from '../style'

const LoginScreen = () => {
  const { mutate, isLoading, isError, error } = useMutation(login)

  const schema = yup.object().shape({
    email: yup.string().trim().required().email(),
    password: yup.string().required(),
  })

  const handleSubmit = async (values) => {
    mutate(values)
  }

  return (
   <ContentContainer>
    <Container
      justifyContent='center'
    >
      <Form
        width='80%'
        initialValues={{ 
          email: '', 
          password: '' 
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <SmallVerticalPadding />
        {isError &&
        <>
          <CustomVerticalMargin
            margin={-Variables.textSizes.medium * 1.4}
          /> 
          <Text
            color={Variables.colors.error}
            >
            {error.message}
          </Text>
        </>
        }
        <FormTextInput
          name='email'
          label='Email'
          placeholder='john.doe@email.com'
          keyboardType='email-address'
        />
        <FormTextInput
          name='password'
          label='Password'
          placeholder='Password'
          hidden={true}
        />
        <SmallVerticalPadding>
          <FormSubmitButton
            width={150}
          >
            Login
          </FormSubmitButton>
        </SmallVerticalPadding>
      </Form>
    </Container>
  </ContentContainer>
  )
}

export default LoginScreen