import { Text, View, Pressable } from 'react-native'
import styled from 'styled-components'
import { DefaultStyles, Variables } from '../../../style'
import { StTextProps } from '../Text'

export const StButtonContainer = styled(View)`
    ${DefaultStyles.button}
`

export const StSecondaryButtonContainer = styled(StButtonContainer)`
    background-color: ${Variables.colors.secondary};
`

export const StTextButtonContainer = styled(StButtonContainer)`
    background-color: 'transparent';
    padding: 0;
`

export const StNegativeButtonContainer = styled(StButtonContainer)`
    background-color: ${Variables.colors.error};
`

export const StButtonText = styled(Text)<StTextProps>`
    ${DefaultStyles.buttonText}
    ${props => props && props.fontSize && props.fontSize == 'large' ? `font-size: ${Variables.textSizes.xlarge}px;` : null}
    ${props => props && props.color ? `color: ${props.color};` : null}
`

export const StHeaderButtonLeft = styled(Pressable)`
    padding-right: ${Variables.spacing.xsmall}px;
`