import { forwardRef, Ref } from 'react'
import { CameraType, Camera as ExpoCamera } from 'expo-camera'
import { StCamera } from './Camera.styled'

type CameraProps = {
    children: React.ReactNode,
    type: CameraType,
}

export const Camera = forwardRef(({ children, type }: CameraProps, ref: Ref<ExpoCamera>) => {
    return (
        <StCamera type={type} ref={ref}>
            {children}
        </StCamera>
    )
})