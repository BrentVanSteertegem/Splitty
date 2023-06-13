import { TextProps } from './Text'
import { StTitle } from './Text.styled'

export type StTitleProps = {
    color?: string
    fontSize?: number
}

export const Title = ({ children, color, fontSize }: TextProps & StTitleProps) => {
    return (
        <StTitle
            color={color}
            fontSize={fontSize}
        >
            {children}
        </StTitle>
    )
}