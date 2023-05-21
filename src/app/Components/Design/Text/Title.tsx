import { StTitle } from './Text.styled'
import { TextProps } from './Text'

export const Title = ({ children, style }: TextProps) => {
    return (
        <StTitle style={style}>
            {children}
        </StTitle>
    )
}