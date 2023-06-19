import { View, TextInput } from 'react-native'
import styled from 'styled-components'
import { DefaultStyles } from '../../../style'
import { StTextInputComponentProps, StTextInputContainerProps } from './TextInput'

export const StTextInputComponent = styled(View)<StTextInputComponentProps>`
    ${({ width }) => width && `width: ${typeof(width) == 'number' ? `${width}px` : width};`}
`

export const StTextInputContainer = styled(View)<StTextInputContainerProps>`
    ${DefaultStyles.textInputContainer}
    border: 1px solid ${({ borderColor }) => borderColor ? borderColor : 'transparent'};
`
    
export const StTextInput = styled(TextInput)`
    ${DefaultStyles.textInput}
`