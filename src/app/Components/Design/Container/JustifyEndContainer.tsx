import { ContainerProps } from './Container'
import { StJustifyEndContainer } from './Container.styled'

export const JustifyEndContainer = ({ children }: ContainerProps) => {
    return (
        <StJustifyEndContainer>
            {children}
        </StJustifyEndContainer>
    )
}