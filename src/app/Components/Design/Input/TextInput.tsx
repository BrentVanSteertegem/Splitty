import { Variables } from '../../../style'
import { StTextInput, StTextInputContainer } from './TextInput.styled'

type TextInputProps = {
    value: string
    placeholder?: string
    focus?: boolean
    onChangeText?: (text: string) => void
    onSubmitEditing?: () => void
}

export const TextInput = ({ value, placeholder, focus, onChangeText, onSubmitEditing }: TextInputProps) => {
    return (
        <StTextInputContainer>
            <StTextInput
                value={value}
                autoFocus={focus}
                keyboardType='visible-password'
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={Variables.colors.placeholderColor}
                onSubmitEditing={onSubmitEditing}
            />
        </StTextInputContainer>
    )
}