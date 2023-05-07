import { Text, View } from 'react-native'
import styled from 'styled-components'
import { DefaultStyles, Variables } from '../../../style'
import { ButtonContainerProps, ButtonTextProps } from './Button'

export const StButtonContainer = styled(View)<ButtonContainerProps>`
    ${DefaultStyles.button}
    ${props => props && props.type !== undefined && props.type == 'secondary' ? `background-color: ${Variables.colors.secondary};` : null}
`

export const StButtonText = styled(Text)<ButtonTextProps>`
    ${DefaultStyles.buttonText}
    ${props => props && props.fontSize !== undefined && props.fontSize == 'large' ? `font-size: ${Variables.textSizes.xlarge}px;` : null}
`