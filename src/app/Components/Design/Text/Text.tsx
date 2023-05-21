import { ReactNode } from 'react'
import { StText } from './Text.styled'

export type TextProps = {
    children: ReactNode,
    style?: object
}

export const Text = ({ children, style }: TextProps) => {
    return (
        <StText style={style}>
            {children}
        </StText>
    )
}