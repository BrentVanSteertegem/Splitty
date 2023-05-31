import { ReactNode } from 'react'
import { StContainer } from './Container.styled'

export type ContainerProps = {
    children: ReactNode
}

export type StContainerProps = {
    flexDirection?: 'row' | 'column'
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
    alignItems?: 'flex-start' | 'center' | 'flex-end'
    gap?: number
}

export const Container = ({ children, flexDirection, justifyContent, alignItems, gap }: ContainerProps & StContainerProps) => {
    return (
        <StContainer
            flexDirection={flexDirection}
            justifyContent={justifyContent}
            alignItems={alignItems}
            gap={gap}
        >
            {children}
        </StContainer>
    )
}