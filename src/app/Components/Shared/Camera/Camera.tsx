import { forwardRef } from 'react'
import { StCamera } from './Camera.styled'
import { CameraType } from 'expo-camera'

type CameraProps = {
    children: React.ReactNode,
    type: CameraType,
}

export const Camera = forwardRef(({ children, type }: CameraProps, ref: any) => {
    return (
        <StCamera type={type} ref={ref}>
            {children}
        </StCamera>
    )
})