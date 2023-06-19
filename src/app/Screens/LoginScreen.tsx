import { useRef } from 'react'
import { TextInput } from 'react-native'
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

  const passwordRef = useRef<TextInput>(null)

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
          onSubmitEditing={handleSubmit}
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