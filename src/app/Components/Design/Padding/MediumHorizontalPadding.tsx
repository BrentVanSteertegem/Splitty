import { ReactNode } from 'react'
import { StMediumHorizontalPadding } from './Padding.styled'

export type PaddingProps ={
    children?: ReactNode
}

export const MediumHorizontalPadding = ({ children }: PaddingProps) => {
    return (
        <StMediumHorizontalPadding>
            {children}
        </StMediumHorizontalPadding>
    )
}