import { useFormikContext } from 'formik'
import { Button, ButtonProps } from '../../Design/Button/Button'

export const FormSubmitButton = ({ children, type, fontSize, width, faIconLeft, faIconRight, color, disabled }: ButtonProps) => {
  const { handleSubmit, isValid, values, setFieldTouched } = useFormikContext()

  const handlePress = () => {
    if (isValid) {
      handleSubmit()
    } else {
      for (const value in values) {
        setFieldTouched(value, true)
      }
    }
  }

  return (
    <Button
        type={type}
        fontSize={fontSize}
        width={width}
        faIconLeft={faIconLeft}
        faIconRight={faIconRight}
        color={color}
        disabled={disabled}
        onPress={handlePress}
    >
        {children}
    </Button>
  )
}