import { PaddingProps } from './MediumHorizontalPadding'
import { StMediumVerticalPadding } from './Padding.styled'

export const MediumVerticalPadding = ({ children }: PaddingProps) => {
    return (
        <StMediumVerticalPadding>
            {children}
        </StMediumVerticalPadding>
    )
}