import { StContainer, StContentContainer, StFlexEndContainer } from './Container.styled'

export type ContainerProps = {
    children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => {
    return (
        <StContainer>
            {children}
        </StContainer>
    )
}