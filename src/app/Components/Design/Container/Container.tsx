import { ReactNode } from 'react'
import { StContainer } from './Container.styled'

export type ContainerProps = {
    children: ReactNode
}

export const Container = ({ children }: ContainerProps) => {
    return (
        <StContainer>
            {children}
        </StContainer>
    )
}