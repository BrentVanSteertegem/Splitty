import { StCamera } from './Camera.styled'
import { CameraType } from 'expo-camera'

type CameraProps = {
    children: React.ReactNode,
    type: CameraType
}

export const Camera = ({ children, type }: CameraProps) => {
    return (
        <StCamera type={type}>
            {children}
        </StCamera>
    )
}