import { useRef } from 'react'
import { TextInput } from 'react-native'
import * as yup from 'yup'
import { useMutation } from '@tanstack/react-query'
import { register } from '../../core/modules/auth/api'
import { Variables } from '../style'
import { Container, ContentContainer, CustomVerticalMargin, Form, FormSubmitButton, FormTextInput, SmallVerticalPadding, Text } from '../Components'

const RegisterScreen = () => {
  const { mutate, isError, error } = useMutation(register)
  
  const schema = yup.object().shape({
    firstName: yup.string().trim().required('first name is a required field'),
    lastName: yup.string().trim(),
    email: yup.string().trim().required().email(),
    password: yup.string().required('password is a required field').min(6, 'password must contain at least 6 characters'),
    confirmPassword: yup.string().required('confirm password is a required field').equals([yup.ref('password')], 'Passwords must match'),
  })

  const lastNameRef = useRef<TextInput>(null)
  const emailRef = useRef<TextInput>(null)
  const passwordRef = useRef<TextInput>(null)
  const confirmPasswordRef = useRef<TextInput>(null)

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
          name='firstName'
          label='First name'
          placeholder='john'
          onSubmitEditing={() => {
            lastNameRef.current!.focus()
          }}
          blurOnSubmit={false}
        />
        <FormTextInput
          name='lastName'
          ref={lastNameRef}
          label='Last name'
          placeholder='doe'
          onSubmitEditing={() => {
            emailRef.current!.focus()
          }}
          blurOnSubmit={false}
        />
        <FormTextInput
          name='email'
          ref={emailRef}
          label='Email'
          placeholder='john.doe@email.com'
          keyboardType='email-address'
          onSubmitEditing={() => {
            passwordRef.current!.focus()
          }}
          blurOnSubmit={false}
        />
        <FormTextInput
          name='password'
          ref={passwordRef}
          label='Password'
          placeholder='Password'
          hidden={true}
          onSubmitEditing={() => {
            confirmPasswordRef.current!.focus()
          }}
          blurOnSubmit={false}
        />
        <FormTextInput
          name='confirmPassword'
          ref={confirmPasswordRef}
          label='Confirm password'
          placeholder='Confirm password'
          hidden={true}
          onSubmitEditing={handleSubmit}
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