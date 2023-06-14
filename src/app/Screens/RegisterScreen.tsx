import * as yup from 'yup'
import { useMutation } from '@tanstack/react-query'
import { register } from '../../core/modules/auth/api'
import { Container, ContentContainer, Form, FormSubmitButton, FormTextInput, LargeVerticalPadding, MediumVerticalPadding, SmallVerticalPadding } from '../Components'

const RegisterScreen = () => {
  const { mutate, isLoading, isError, error } = useMutation(register)
  
  const schema = yup.object().shape({
    firstName: yup.string().trim().required('first name is a required field'),
    lastName: yup.string().trim(),
    email: yup.string().trim().required().email(),
    password: yup.string().required('password is a required field').min(6, 'password must contain at least 6 characters'),
    confirmPassword: yup.string().required('confirm password is a required field').equals([yup.ref('password')], 'Passwords must match'),
    acceptedTerms: yup.boolean().oneOf([true], 'you must accept the terms and conditions'),
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
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
          acceptedTerms: true,
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <SmallVerticalPadding />
        <FormTextInput
          name='firstName'
          label='First name'
          placeholder='john'
        />
        <FormTextInput
          name='lastName'
          label='Last name'
          placeholder='doe'
        />
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
        <FormTextInput
          name='confirmPassword'
          label='Confirm password'
          placeholder='Confirm password'
          hidden={true}
        />
        <SmallVerticalPadding>
          <FormSubmitButton
            width={150}
          >
            Register
          </FormSubmitButton>
        </SmallVerticalPadding>
      </Form>
    </Container>
  </ContentContainer>
  )
}

export default RegisterScreen