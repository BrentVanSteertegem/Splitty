import { Text, View } from 'react-native'
import styled from 'styled-components'
import { DefaultStyles, Variables } from '../../../style'
import { ButtonContainerProps } from './Button'

export const StButtonContainer = styled(View)<ButtonContainerProps>`
    ${DefaultStyles.button}
    background-color: ${props => props && props.type == 'secondary' ? Variables.colors.secondary : Variables.colors.primary};
`

export const StButtonText = styled(Text)`
    ${DefaultStyles.buttonText}
`