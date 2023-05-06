import { Pressable, Text } from 'react-native'
import { StButtonContainer, StButtonText } from './Button.styled'

export type ButtonContainerProps = {
    type?: 'primary' | 'secondary',
    size?: 'full-width' | 'fit-content',
}

type InnerButtonProps = {
    children?: JSX.Element | string,
    faIconLeft?: string,
    faIconRight?: string,
}

type ButtonProps = ButtonContainerProps & InnerButtonProps & {
    onPress?: () => void,
    disabled?: boolean,
}

const renderButtonContent = ({type, children, faIconLeft, faIconRight}: InnerButtonProps & ButtonContainerProps) => {
    return (
        <StButtonContainer type={type}>
            <StButtonText>{children}</StButtonText>
        </StButtonContainer>
    )
}

export const Button = ({ children, type, size, faIconLeft, faIconRight, disabled, onPress }: ButtonProps) => {
    return (
        <Pressable disabled={disabled} onPress={onPress}>
            {size && size == 'full-width' ?
                renderButtonContent({type, children, faIconLeft, faIconRight})
            : 
            <Text> {/* By wrapping the entire button container in a text component, the container will behave as if width would be set to fit-content */}
                {renderButtonContent({type, children, faIconLeft, faIconRight})}
            </Text>
            }
            
        </Pressable>
    )
}
