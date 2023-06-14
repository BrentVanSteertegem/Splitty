import * as yup from 'yup'
import { useMutation } from '@tanstack/react-query'
import { login } from '../../core/modules/auth/api'
import { Variables } from '../style'
import { Container, ContentContainer, Form, FormSubmitButton, FormTextInput, LargeVerticalPadding } from '../Components'

const LoginScreen = () => {
  const { mutate, isLoading, isError, error } = useMutation(login)
  
  const schema = yup.object().shape({
    email: yup.string().required().email(),
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
          placeholder='john.doe@email.com'
          keyboardType='email-address'
        />
        <FormTextInput
          name='password'
          placeholder='Password'
          hidden={true}
        />
        <FormSubmitButton
          width={150}
        >
          Login
        </FormSubmitButton>
      </Form>
    </Container>
  </ContentContainer>
  )
}

export default LoginScreen