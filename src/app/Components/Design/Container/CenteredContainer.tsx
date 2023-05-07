import { ContainerProps } from './Container'
import { StCenteredContainer } from './Container.styled'

export const CenteredContainer = ({ children }: ContainerProps) => {
    return (
        <StCenteredContainer>
            {children}
        </StCenteredContainer>
    )
}