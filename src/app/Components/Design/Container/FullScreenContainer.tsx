import { ContainerProps } from './Container'
import { StFullScreenContainer } from './Container.styled'

export const FullScreenContainer = ({ children }: ContainerProps) => {
    return (
        <StFullScreenContainer>
            {children}
        </StFullScreenContainer>
    )
}