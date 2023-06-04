import { Text } from 'react-native'
import styled from 'styled-components'
import { DefaultStyles, Variables } from '../../../style'
import { StTextProps } from './Text'

export const StText = styled(Text)<StTextProps>`
    ${DefaultStyles.text}
    ${({ color }) => color && `color: ${color}`}
    ${({ grayedOut }) => grayedOut && `color: ${Variables.colors.darkGray}`}
    ${({ crossedOut }) => crossedOut && 'text-decoration: line-through'}
    ${({ fontSize }) => 
    fontSize == 'xsmall' ? `font-size: ${Variables.textSizes.xsmall}px; line-height: ${Variables.textSizes.xsmall * 1.4}px;` : 
    fontSize == 'small' ? `font-size: ${Variables.textSizes.small}px; line-height: ${Variables.textSizes.small * 1.4}px;` : 
    fontSize == 'large' ? `font-size: ${Variables.textSizes.large}px; line-height: ${Variables.textSizes.large * 1.4}px;` :
    `font-size: ${Variables.textSizes.medium}px; line-height: ${Variables.textSizes.medium * 1.4}px;`
    }
`

export const StTitle = styled(Text)`
    ${DefaultStyles.title}
`

export const StHeaderTitle = styled(StTitle)`
    line-height: ${Variables.textSizes.xlarge + Variables.spacing.medium}px;
`