import { ReactNode } from 'react'
import { StText } from './Text.styled'

export type StTextProps = {
    fontSize?: 'small' | 'medium' | 'large',
    color?: string,
    grayedOut?: boolean,
}

export type TextProps = {
    children: ReactNode,
}

export const Text = ({ fontSize, color, grayedOut, children }: TextProps & StTextProps) => {
    return (
        <StText
            fontSize={fontSize}
            color={color}
            grayedOut={grayedOut}
        >
            {children}
        </StText>
    )
}