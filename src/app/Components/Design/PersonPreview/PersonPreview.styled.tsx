import { View } from 'react-native'
import styled from 'styled-components'
import { Variables } from '../../../style'
import { PersonPreviewBubbleProps, StPersonPreviewProps } from './PersonPreview'

export const StPersonPreview = styled(View)<StPersonPreviewProps>`
    flex-direction: row;
    align-items: center;
    gap: ${({ gap }) => gap ? gap : Variables.spacing.small}px;
`

export const StPersonPreviewBubble = styled(View)<PersonPreviewBubbleProps>`
    width: ${Variables.sizes.xxlarge}px;
    height: ${Variables.sizes.xxlarge}px;
    border-radius: ${Variables.sizes.xxlarge}px;
    background-color: ${({ bubbleColor }) => bubbleColor ? bubbleColor : Variables.colors.gray};
    align-items: center;
    justify-content: center;
`