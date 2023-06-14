import { forwardRef, Ref } from 'react'
import { TextInput as RNTextInput } from 'react-native'
import { useFormikContext } from 'formik'
import { TextInput, TextInputProps } from '../../Design/Input'

type FormTextInputProps = {
  name: string
}

export const FormTextInput = forwardRef(({ name, placeholder, focus, keyboardType, hidden, onChangeText, onSubmitEditing }: FormTextInputProps & Partial<TextInputProps>, ref: Ref<RNTextInput>) => {
  const { values, touched, errors, handleBlur, setFieldValue } = useFormikContext()

  // const hasError = errors[name] && touched[name]

  return (
    <TextInput
      width='100%'
      ref={ref}
      value={values[name]}
      placeholder={placeholder}
      focus={focus}
      keyboardType={keyboardType}
      hidden={hidden}
      onChangeText={(text) => setFieldValue(name, text)}
      onSubmitEditing={onSubmitEditing}
      // error={hasError ? errors[name] : ''}
    />
  )
})