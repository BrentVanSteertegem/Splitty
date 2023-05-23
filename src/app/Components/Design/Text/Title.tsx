import { TextProps } from './Text'
import { StTitle } from './Text.styled'

export const Title = ({ children }: TextProps) => {
    return (
        <StTitle>
            {children}
        </StTitle>
    )
}