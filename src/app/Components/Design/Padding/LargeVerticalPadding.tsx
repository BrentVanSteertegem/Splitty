import { PaddingProps } from './MediumHorizontalPadding'
import { StLargeVerticalPadding } from './Padding.styled'

export const LargeVerticalPadding = ({children}: PaddingProps) => {
    return (
        <StLargeVerticalPadding>
            {children}
        </StLargeVerticalPadding>
    )
}