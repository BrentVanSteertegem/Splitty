import { View, TextInput } from 'react-native'
import styled from 'styled-components'
import { DefaultStyles } from '../../../style'
import { StTextInputComponentProps } from './TextInput'

export const StTextInputComponent = styled(View)<StTextInputComponentProps>`
    ${({ width }) => width && `width: ${typeof(width) == 'number' ? `${width}px` : width};`}
`

export const StTextInputContainer = styled(View)`
    ${DefaultStyles.textInputContainer}
`
    
export const StTextInput = styled(TextInput)`
    ${DefaultStyles.textInput}
`