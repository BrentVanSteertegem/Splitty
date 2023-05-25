import { ContainerProps } from './Container'
import { StRowContainer } from './Container.styled'

export const RowContainer = ({ children }: ContainerProps) => {
    return (
        <StRowContainer>
            {children}
        </StRowContainer>
    )
}