import { ContainerProps } from './Container'
import { StAlignEndContainer } from './Container.styled'

export const AlignEndContainer = ({ children }: ContainerProps) => {
    return (
        <StAlignEndContainer>
            {children}
        </StAlignEndContainer>
    )
}