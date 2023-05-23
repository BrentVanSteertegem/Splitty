import { View } from 'react-native'
import styled from 'styled-components'
import { Variables } from '../../../style'
import { PersonPreviewBubbleProps } from './PersonPreview'

export const StPersonPreview = styled(View)`
    flex-direction: row;
    align-items: center;
    gap: ${Variables.spacing.small}px;
`

export const StPersonPreviewBubble = styled(View)<PersonPreviewBubbleProps>`
    width: ${Variables.sizes.xxlarge}px;
    height: ${Variables.sizes.xxlarge}px;
    border-radius: ${Variables.sizes.xxlarge}px;
    background-color: ${({ bubbleColor }) => bubbleColor ? bubbleColor : Variables.colors.gray};
    align-items: center;
    justify-content: center;
`