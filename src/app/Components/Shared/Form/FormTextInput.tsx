import { forwardRef, Ref } from 'react'
import { TextInput as RNTextInput } from 'react-native'
import { useFormikContext } from 'formik'
import { TextInput, TextInputProps } from '../../Design/Input'

type FormTextInputProps = {
  name: string
}

export const FormTextInput = forwardRef(({ name, label, placeholder, focus, keyboardType, hidden, onChangeText, onSubmitEditing, blurOnSubmit }: FormTextInputProps & Partial<TextInputProps>, ref: Ref<RNTextInput>) => {
  const { values, touched, errors, handleBlur, setFieldValue } = useFormikContext()

  const hasError = errors[name] && touched[name]

  const onTextChange = (text: string) => {
    setFieldValue(name, text)
    onChangeText && onChangeText(text)
  }

  return (
    <TextInput
      width='100%'
      ref={ref}
      value={values[name]}
      label={label}
      placeholder={placeholder}
      focus={focus}
      keyboardType={keyboardType}
      hidden={hidden}
      onChangeText={onTextChange}
      onSubmitEditing={onSubmitEditing}
      error={hasError ? errors[name] : ''}
      onBlur={handleBlur(name)}
      blurOnSubmit={blurOnSubmit}
    />
  )
})