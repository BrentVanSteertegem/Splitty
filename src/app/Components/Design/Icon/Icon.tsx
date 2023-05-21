import { StIcon } from './Icon.styled'

export type IconProps = {
    name: string,
    color?: string,
    size?: number,
}

export const Icon = ({name, color, size}: IconProps) => {   
    return <StIcon color={color} name={name} size={size}/>
}