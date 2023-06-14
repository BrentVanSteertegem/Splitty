import * as yup from 'yup'
import { useMutation } from '@tanstack/react-query'
import { login } from '../../core/modules/auth/api'
import { Container, ContentContainer, Form, FormSubmitButton, FormTextInput, LargeVerticalPadding, SmallVerticalPadding } from '../Components'

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
    <LargeVerticalPadding />
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