import { TextProps } from './Text'
import { StHeaderTitle } from './Text.styled'

export const HeaderTitle = ({ children }: TextProps) => {
    return (
        <StHeaderTitle>
            {children}
        </StHeaderTitle>
    )
}