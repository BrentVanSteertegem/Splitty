import { Variables } from '../../../style'
import { Text } from '../Text'
import { StPersonPreview, StPersonPreviewBubble } from './PersonPreview.styled'

export type PersonPreviewBubbleProps = {
    bubbleColor?: string
}

type PersonPreviewProps = PersonPreviewBubbleProps & {
    name: string
}

export const PersonPreview = ({ name, bubbleColor }: PersonPreviewProps) => {
    return (
        <StPersonPreview>
            <StPersonPreviewBubble bubbleColor={bubbleColor}>
                <Text color={Variables.colors.white}>{name[0]}</Text>
            </StPersonPreviewBubble>
            <Text>{name}</Text>
        </StPersonPreview>
    )
}