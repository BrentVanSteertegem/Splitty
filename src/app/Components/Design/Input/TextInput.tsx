import { Variables } from '../../../style'
import { StTextInput, StTextInputContainer } from './TextInput.styled'

type TextInputProps = {
    placeholder?: string
    focus?: boolean
    onChangeText?: (text: string) => void
    onSubmitEditing?: () => void
}

export const TextInput = ({ placeholder, focus, onChangeText, onSubmitEditing }: TextInputProps) => {
    return (
        <StTextInputContainer>
            <StTextInput
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