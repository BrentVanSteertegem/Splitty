import { Variables } from '../../../style'
import { StTextInput, StTextInputContainer } from './TextInput.styled'

type TextInputProps = {
    placeholder?: string
    onChangeText?: (text: string) => void
}

export const TextInput = ({ placeholder, onChangeText }: TextInputProps) => {
    return (
        <StTextInputContainer>
            <StTextInput
                keyboardType='visible-password'
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={Variables.colors.placeholderColor}
            />
        </StTextInputContainer>
    )
}