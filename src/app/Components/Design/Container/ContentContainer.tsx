import { ContainerProps } from './Container'
import { StContentContainer } from './Container.styled'

export const ContentContainer = ({ children }: ContainerProps) => {
    return (
        <StContentContainer>
            {children}
        </StContentContainer>
    )
}