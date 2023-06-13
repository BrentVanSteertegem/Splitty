import { PaddingProps } from './MediumHorizontalPadding'
import { StCustomVerticalPadding } from './Padding.styled'

export type CustomVerticalPaddingProps = PaddingProps & {
    padding: number
}

export const CustomVerticalPadding = ({ children, padding }: CustomVerticalPaddingProps) => {
    return (
        <StCustomVerticalPadding
            padding={padding}
        >
            {children}
        </StCustomVerticalPadding>
    )
}