import { Pressable, Text } from 'react-native'
import { Variables } from '../../../style'
import { StButtonContainer, StButtonText, StNegativeButtonContainer, StSecondaryButtonContainer, StTextButtonContainer } from './Button.styled'
import { Icon } from '../Icon'
import { StTextProps } from '../Text'

export type ButtonContainerProps = {
    type?: 'primary' | 'secondary' | 'text' | 'negative',
    size?: 'full-width' | number,
}

type InnerButtonProps = Partial<StTextProps> & {
    children?: JSX.Element | string,
    faIconLeft?: string,
    faIconRight?: string,
}

type ButtonProps = ButtonContainerProps & InnerButtonProps & {
    onPress?: () => void,
    disabled?: boolean,
}

const renderButtonContainer = ({children, type, fontSize, faIconLeft, faIconRight, color, size}: InnerButtonProps & ButtonContainerProps) => {
    switch (type) {
        case 'secondary':
            return (
                <StSecondaryButtonContainer
                    size={size}
                >
                    {renderButtonContent({children, fontSize, faIconLeft, faIconRight})}
                </StSecondaryButtonContainer>
            )
        case 'text':
            return (
                <StTextButtonContainer
                    size={size}
                >
                    {renderButtonContent({children, fontSize, faIconLeft, faIconRight, color: color || Variables.colors.text})}
                </StTextButtonContainer>
            )
        case 'negative':
            return (
                <StNegativeButtonContainer
                    size={size}
                >
                    {renderButtonContent({children, fontSize, faIconLeft, faIconRight})}
                </StNegativeButtonContainer>
            )
        default:
            return (
                <StButtonContainer
                    size={size}
                >
                    {renderButtonContent({children, fontSize, faIconLeft, faIconRight})}
                </StButtonContainer>
            )
    }
}

const renderButtonContent = ({children, fontSize, faIconLeft, faIconRight, color}: InnerButtonProps) => {
    return (
        <>
            {faIconLeft && 
                <Icon
                    name={faIconLeft}
                    color={color}
                />
            }
            <StButtonText
                fontSize={fontSize}
                color={color}
            >
                {children}
            </StButtonText>
            {faIconRight &&
                <Icon
                    name={faIconRight}
                    
                />
            }
        </>
    )
}

export const Button = ({ children, type, fontSize, size, faIconLeft, faIconRight, color, disabled, onPress }: ButtonProps) => {
    return (
        <Pressable disabled={disabled} onPress={onPress}>
            {size && size == 'full-width' ?
                renderButtonContainer({children, type, fontSize, faIconLeft, faIconRight, color})
            : typeof(size) == 'number' ?
                renderButtonContainer({children, type, fontSize, faIconLeft, faIconRight, color, size})
            :
            <Text> {/* By wrapping the entire button container in a text component, the container will behave as if width would be set to fit-content */}
                {renderButtonContainer({children, type, fontSize, faIconLeft, faIconRight, color})}
            </Text>
            }
            
        </Pressable>
    )
}
