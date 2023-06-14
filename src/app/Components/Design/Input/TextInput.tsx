import { forwardRef, Ref } from 'react'
import { TextInput as RNTextInput } from 'react-native'
import { Variables } from '../../../style'
import { StTextInput, StTextInputComponent, StTextInputContainer } from './TextInput.styled'
import { Text } from '../Text'
import { MediumHorizontalPadding } from '../Padding'

export type StTextInputComponentProps = {
    width?: string | number
}

export type TextInputProps = StTextInputComponentProps & {
    value: string
    label?: string
    placeholder?: string
    focus?: boolean
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'visible-password'
    hidden?: boolean
    onChangeText?: (text: string) => void
    onSubmitEditing?: () => void
}

export const TextInput = forwardRef(({ width, value, label, placeholder, focus, keyboardType, hidden, onChangeText, onSubmitEditing }: TextInputProps, ref: Ref<RNTextInput>) => {
    return (
        <StTextInputComponent
            width={width}
        >
            {label && 
                <MediumHorizontalPadding>
                    <Text>
                        {label}
                    </Text>
                </MediumHorizontalPadding>
            }
            <StTextInputContainer
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
        </StTextInputComponent>
        )
})