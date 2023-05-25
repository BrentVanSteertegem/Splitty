import { Variables } from '../../../style'
import { Text } from '../Text'
import { StPersonPreview, StPersonPreviewBubble } from './PersonPreview.styled'

export type PersonPreviewBubbleProps = {
    bubbleColor?: string
}

export type StPersonPreviewProps = {
    gap?: number
}

type PersonPreviewProps = PersonPreviewBubbleProps & StPersonPreviewProps & {
    name: string,
    showFullName?: boolean
}

export const PersonPreview = ({ name, showFullName = true, bubbleColor, gap }: PersonPreviewProps) => {
    return (
        <StPersonPreview gap={gap}>
            <StPersonPreviewBubble bubbleColor={bubbleColor}>
                <Text color={Variables.colors.white}>{name[0].toUpperCase()}</Text>
            </StPersonPreviewBubble>
            {showFullName && <Text>{name}</Text>}
        </StPersonPreview>
    )
}