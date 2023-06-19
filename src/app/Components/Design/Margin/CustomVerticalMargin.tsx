import { ReactNode } from 'react'
import { StCustomVerticalMargin } from './Margin.styled'

export type CustomVerticalMarginProps = {
    children?: ReactNode
    margin: number
}

export const CustomVerticalMargin = ({ children, margin }: CustomVerticalMarginProps) => {
    return (
        <StCustomVerticalMargin
            margin={margin}
        >
            {children}
        </StCustomVerticalMargin>
    )
}