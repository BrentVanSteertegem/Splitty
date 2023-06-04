import { ReactNode } from 'react'
import { StText } from './Text.styled'

export type StTextProps = {
    fontSize?: 'xsmall' | 'small' | 'medium' | 'large',
    color?: string,
    grayedOut?: boolean,
    crossedOut?: boolean,
}

export type TextProps = {
    children: ReactNode,
}

export const Text = ({ fontSize, color, grayedOut, crossedOut, children }: TextProps & StTextProps) => {
    return (
        <StText
            fontSize={fontSize}
            color={color}
            grayedOut={grayedOut}
            crossedOut={crossedOut}
        >
            {children}
        </StText>
    )
}