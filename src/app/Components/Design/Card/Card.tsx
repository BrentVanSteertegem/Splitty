import { ReactNode } from 'react'
import { StCard } from './Card.styled'

type CardProps = {
    children: ReactNode
}

export const Card = ({ children }: CardProps) => {
    return (
        <StCard>{children}</StCard>
    )
}