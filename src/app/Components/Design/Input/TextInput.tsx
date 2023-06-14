import { forwardRef, Ref } from 'react'
import { TextInput as RNTextInput } from 'react-native'
import { Variables } from '../../../style'
import { StTextInput, StTextInputContainer } from './TextInput.styled'

export type StTextInputContainerProps = {
    width?: string | number
}

export type TextInputProps = StTextInputContainerProps & {
    value: string
    placeholder?: string
    focus?: boolean
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'visible-password'
    hidden?: boolean
    onChangeText?: (text: string) => void
    onSubmitEditing?: () => void
}

export const TextInput = forwardRef(({ width, value, placeholder, focus, keyboardType, hidden, onChangeText, onSubmitEditing }: TextInputProps, ref: Ref<RNTextInput>) => {
    return (
        <StTextInputContainer
            width={width}
        >
            <StTextInput
                ref={ref}
                value={value}
                autoFocus={focus}
                keyboardType={keyboardType}
                secureTextEntry={hidden}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={Variables.colors.placeholderColor}
                onSubmitEditing={onSubmitEditing}
            />
        </StTextInputContainer>
    )
})