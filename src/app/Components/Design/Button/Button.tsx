import { Pressable, Text } from 'react-native'
import { Variables } from '../../../style'
import { StButtonContainer, StButtonText, StNegativeButtonContainer, StSecondaryButtonContainer, StTextButtonContainer } from './Button.styled'
import { Icon } from '../Icon'
import { StTextProps } from '../Text'

export type ButtonContainerProps = {
    type?: 'primary' | 'secondary' | 'text' | 'negative',
    width?: string | number,
}

type InnerButtonProps = Partial<StTextProps> & {
    children?: JSX.Element | string,
    faIconLeft?: string,
    faIconRight?: string,
}

export type ButtonProps = ButtonContainerProps & InnerButtonProps & {
    onPress?: () => void,
    disabled?: boolean,
}

const renderButtonContainer = ({children, type, fontSize, faIconLeft, faIconRight, color, width}: InnerButtonProps & ButtonContainerProps) => {
    switch (type) {
        case 'secondary':
            return (
                <StSecondaryButtonContainer
                    width={width}
                >
                    {renderButtonContent({children, fontSize, faIconLeft, faIconRight})}
                </StSecondaryButtonContainer>
            )
        case 'text':
            return (
                <StTextButtonContainer
                    width={width}
                >
                    {renderButtonContent({children, fontSize, faIconLeft, faIconRight, color: color || Variables.colors.text})}
                </StTextButtonContainer>
            )
        case 'negative':
            return (
                <StNegativeButtonContainer
                    width={width}
                >
                    {renderButtonContent({children, fontSize, faIconLeft, faIconRight})}
                </StNegativeButtonContainer>
            )
        default:
            return (
                <StButtonContainer
                    width={width}
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
            {typeof children === 'string' ?
                <StButtonText
                    fontSize={fontSize}
                    color={color}
                >
                    {children}
                </StButtonText> 
            :
                children
            }
            {faIconRight &&
                <Icon
                    name={faIconRight}
                    
                />
            }
        </>
    )
}

export const Button = ({ children, type, fontSize, width, faIconLeft, faIconRight, color, disabled, onPress }: ButtonProps) => {
    return (
        <Pressable disabled={disabled} onPress={onPress}>
            {width ?
                renderButtonContainer({children, type, fontSize, faIconLeft, faIconRight, color, width})
            :
                <Text> {/* By wrapping the entire button container in a text component, the container will behave as if width would be set to fit-content */}
                    {renderButtonContainer({children, type, fontSize, faIconLeft, faIconRight, color})}
                </Text>
            }
            
        </Pressable>
    )
}
