import { ReactNode } from 'react'
import { StHeaderButtonLeft } from './Button.styled'

type HeaderButtonLeftProps = {
    onPress: () => void,
    children: ReactNode
}

export const HeaderButtonLeft = ({ onPress, children }: HeaderButtonLeftProps) => {
    return (
        <StHeaderButtonLeft onPress={onPress}>
            {children}
        </StHeaderButtonLeft>
    )
}