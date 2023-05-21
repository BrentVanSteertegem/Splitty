import { ReactNode } from 'react'
import { StText } from './Text.styled'

export type StTextProps = {
    fontSize?: 'small' | 'medium' | 'large',
    grayedOut?: boolean,
    offset?: boolean
}

export type TextProps = {
    children: ReactNode,
    style?: object
}

export const Text = ({ fontSize, grayedOut, offset, children, style }: TextProps & StTextProps) => {
    return (
        <StText
            fontSize={fontSize}
            grayedOut={grayedOut}
            offset={offset}
            style={style}
        >
            {children}
        </StText>
    )
}