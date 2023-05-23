import { ReactNode } from 'react'
import { StOffset } from './Offset.styled'

export type StOffsetProps = {
    offset?: string
}

type OffsetProps = StOffsetProps & {
    children: ReactNode,
}

export const Offset = ({ offset, children }: OffsetProps) => {
    return (
        <StOffset offset={offset}>{children}</StOffset>
    )
}