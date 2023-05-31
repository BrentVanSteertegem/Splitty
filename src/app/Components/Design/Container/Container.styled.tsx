import { Dimensions, View } from 'react-native'
import styled from 'styled-components'
import { DefaultStyles, Variables } from '../../../style'
import { StContainerProps } from './Container'

export const StContainer = styled(View)<StContainerProps>`
    ${DefaultStyles.container}
    ${({ flexDirection }) => flexDirection && `flexDirection : ${flexDirection}`};
    ${({ justifyContent }) => justifyContent && `justifyContent : ${justifyContent}`};
    ${({ alignItems }) => alignItems && `alignItems : ${alignItems}`};
    ${({ gap }) => gap && `gap : ${gap}px`};
`

export const StContentContainer = styled(View)`
    ${DefaultStyles.container}
    ${DefaultStyles.contentContainer}
`

export const StCenteredContainer = styled(View)`
    ${DefaultStyles.container}
    ${DefaultStyles.centered}
`

export const StFullScreenContainer = styled(View)`
    ${DefaultStyles.container}
    min-height: ${Dimensions.get('window').height - 136}px;
`