import { Text, View, Pressable } from 'react-native'
import styled from 'styled-components'
import { DefaultStyles, Variables } from '../../../style'
import { ButtonTextProps } from './Button'

export const StButtonContainer = styled(View)`
    ${DefaultStyles.button}
`

export const StSecondaryButtonContainer = styled(StButtonContainer)`
    background-color: ${Variables.colors.secondary};
`

export const StTextButtonContainer = styled(StButtonContainer)`
    background-color: ${Variables.colors.secondary};
    padding: 0;
`

export const StNegativeButtonContainer = styled(StButtonContainer)`
    background-color: ${Variables.colors.error};
`

export const StButtonText = styled(Text)<ButtonTextProps>`
    ${DefaultStyles.buttonText}
    ${props => props && props.fontSize !== undefined && props.fontSize == 'large' ? `font-size: ${Variables.textSizes.xlarge}px;` : null}
`

export const StHeaderButtonLeft = styled(Pressable)`
    padding-right: ${Variables.spacing.xsmall}px;
`