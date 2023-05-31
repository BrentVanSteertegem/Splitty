import { StDivider } from "./Divider.styled"

export type DividerProps = {
    color?: string
    thickness?: number
}

export const Divider = ({ color, thickness }: DividerProps) => {
    return (
        <StDivider
            color={color}
            thickness={thickness}
        />
    )
}