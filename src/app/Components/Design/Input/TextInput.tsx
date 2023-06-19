import { forwardRef, Ref } from 'react'
import { TextInput as RNTextInput, ScrollView } from 'react-native'
import { Variables } from '../../../style'
import { StTextInput, StTextInputComponent, StTextInputContainer } from './TextInput.styled'
import { Text } from '../Text'
import { MediumHorizontalPadding } from '../Padding'
import { Container } from '../Container'

export type StTextInputComponentProps = {
    width?: string | number
}

export type StTextInputContainerProps = {
    borderColor: string
}

export type TextInputProps = StTextInputComponentProps & {
    value: string
    label?: string
    placeholder?: string
    focus?: boolean
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'visible-password'
    hidden?: boolean
    onChangeText?: (text: string) => void
    onSubmitEditing?: (values: any | undefined) => void | Promise<void>
    error?: string
    onBlur?: (e: any | undefined) => void
    blurOnSubmit?: boolean
}

const renderTitle = (label: string | undefined, error: string | undefined) => {
    return label ? (
            <MediumHorizontalPadding>
                <ScrollView
                    horizontal={true}
                >
                    <Container
                        flexDirection='row'
                        alignItems='center'
                        >
                        <Text>
                            {label}
                        </Text>
                        {error &&
                            <Text
                            color={Variables.colors.error}
                            fontSize='small'
                            >
                                {' - '}
                                {error}
                            </Text>
                        }
                    </Container>
                </ScrollView>
            </MediumHorizontalPadding>
    ) : error ? (
        <MediumHorizontalPadding>
             <ScrollView
                    horizontal={true}
            >
                <Text
                    color={Variables.colors.error}
                    fontSize='small'
                >
                    {error}
                </Text>
            </ScrollView>
        </MediumHorizontalPadding>
    ) : null
}


export const TextInput = forwardRef(({ width, value, label, placeholder, focus, keyboardType, hidden, onChangeText, onSubmitEditing, error, onBlur, blurOnSubmit }: TextInputProps, ref: Ref<RNTextInput>) => {
    return (
        <StTextInputComponent
            width={width}
        >
            {renderTitle(label, error)}
            <StTextInputContainer
                borderColor={error ? Variables.colors.error : 'transparent'}
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
                    onBlur={onBlur}
                    blurOnSubmit={blurOnSubmit}
                />
            </StTextInputContainer>
        </StTextInputComponent>
        )
})