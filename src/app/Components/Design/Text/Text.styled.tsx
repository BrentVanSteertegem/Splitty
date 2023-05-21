import { Text } from 'react-native'
import styled from 'styled-components'
import { DefaultStyles, Variables } from '../../../style'
import { StTextProps } from './Text'

export const StText = styled(Text)<StTextProps>`
    ${DefaultStyles.text}
    ${({ grayedOut }) => grayedOut && `color: ${Variables.colors.darkGray}`}
    ${({ fontSize }) => 
    fontSize == 'small' ? `font-size: ${Variables.textSizes.small}px; line-height: ${Variables.textSizes.small * 1.4}px;` : 
    fontSize == 'large' ? `font-size: ${Variables.textSizes.large}px; line-height: ${Variables.textSizes.large * 1.4}px;` :
    `font-size: ${Variables.textSizes.medium}px; line-height: ${Variables.textSizes.medium * 1.4}px;`
    }
    ${({ offset }) => offset && `margin-left: ${Variables.spacing.medium}px;`}
`

export const StTitle = styled(Text)`
    ${DefaultStyles.title}
`