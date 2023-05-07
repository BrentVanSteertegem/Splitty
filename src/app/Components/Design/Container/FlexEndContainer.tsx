import { ContainerProps } from './Container'
import { StFlexEndContainer } from './Container.styled'

export const FlexEndContainer = ({ children }: ContainerProps) => {
    return (
        <StFlexEndContainer>
            {children}
        </StFlexEndContainer>
    )
}