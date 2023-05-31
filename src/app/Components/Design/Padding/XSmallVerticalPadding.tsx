import { PaddingProps } from './MediumHorizontalPadding'
import { StXSmallVerticalPadding } from './Padding.styled'

export const XSmallVerticalPadding = ({ children }: PaddingProps) => {
    return (
        <StXSmallVerticalPadding>
            {children}
        </StXSmallVerticalPadding>
    )
}