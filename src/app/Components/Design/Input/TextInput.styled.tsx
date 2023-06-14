import { View, TextInput } from 'react-native'
import styled from 'styled-components'
import { DefaultStyles } from '../../../style'
import { StTextInputContainerProps } from './TextInput'

export const StTextInputContainer = styled(View)<StTextInputContainerProps>`
    ${DefaultStyles.textInputContainer}
    ${({ width }) => width && `width: ${typeof(width) == 'number' ? `${width}px` : width};`}
`
    
export const StTextInput = styled(TextInput)`
    ${DefaultStyles.textInput}
`