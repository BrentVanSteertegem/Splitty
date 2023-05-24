import { PaddingProps } from './MediumHorizontalPadding'
import { StSmallVerticalPadding } from './Padding.styled'

export const SmallVerticalPadding = ({ children }: PaddingProps) => {
    return (
        <StSmallVerticalPadding>
            {children}
        </StSmallVerticalPadding>
    )
}