import { Pressable, Text } from 'react-native'
import { StButtonContainer, StButtonText } from './Button.styled'

export type ButtonContainerProps = {
    type?: 'primary' | 'secondary',
    size?: 'full-width' | 'fit-content',
}

export type ButtonTextProps = {
    fontSize?: 'medium' | 'large',
}

type InnerButtonProps = ButtonTextProps & {
    children?: JSX.Element | string,
    faIconLeft?: string,
    faIconRight?: string,
}

type ButtonProps = ButtonContainerProps & InnerButtonProps & {
    onPress?: () => void,
    disabled?: boolean,
}

const renderButtonContent = ({children, type, fontSize, faIconLeft, faIconRight}: InnerButtonProps & ButtonContainerProps) => {
    return (
        <StButtonContainer type={type}>
            <StButtonText fontSize={fontSize}>{children}</StButtonText>
        </StButtonContainer>
    )
}

export const Button = ({ children, type, fontSize, size, faIconLeft, faIconRight, disabled, onPress }: ButtonProps) => {
    return (
        <Pressable disabled={disabled} onPress={onPress}>
            {size && size == 'full-width' ?
                renderButtonContent({children, type, fontSize, faIconLeft, faIconRight})
            : 
            <Text> {/* By wrapping the entire button container in a text component, the container will behave as if width would be set to fit-content */}
                {renderButtonContent({children, type, fontSize, faIconLeft, faIconRight})}
            </Text>
            }
            
        </Pressable>
    )
}
