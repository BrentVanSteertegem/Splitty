import { Text, View, Pressable } from 'react-native'
import styled from 'styled-components'
import { DefaultStyles, Variables } from '../../../style'
import { StTextProps } from '../Text'
import { ButtonContainerProps } from './Button'

export const StButtonContainer = styled(View)<Omit<ButtonContainerProps, 'type'>>`
    ${DefaultStyles.button}
    width: ${({ width }) => width ? typeof(width) == 'number' ? `${width}px` : width : '100%'};
`

export const StSecondaryButtonContainer = styled(StButtonContainer)<Omit<ButtonContainerProps, 'type'>>`
    background-color: ${Variables.colors.secondary};
`

export const StTextButtonContainer = styled(StButtonContainer)<Omit<ButtonContainerProps, 'type'>>`
    background-color: 'transparent';
    padding: 0;
`

export const StNegativeButtonContainer = styled(StButtonContainer)<Omit<ButtonContainerProps, 'type'>>`
    background-color: ${Variables.colors.error};
`

export const StButtonText = styled(Text)<StTextProps>`
    ${DefaultStyles.buttonText}
    ${({ fontSize }) => fontSize && fontSize == 'large' ? `font-size: ${Variables.textSizes.xlarge}px;` : null}
    ${({ color }) => color ? `color: ${color};` : null}
`

export const StHeaderButtonLeft = styled(Pressable)`
    padding-right: ${Variables.spacing.xsmall}px;
`