import { Pressable, Text } from 'react-native'
import { StButtonContainer, StButtonText, StNegativeButtonContainer, StSecondaryButtonContainer, StTextButtonContainer } from './Button.styled'
import { Icon } from '../Icon'

export type ButtonContainerProps = {
    type?: 'primary' | 'secondary' | 'text' | 'negative',
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

const renderButtonContainer = ({children, type, fontSize, faIconLeft, faIconRight}: InnerButtonProps & ButtonContainerProps) => {
    switch (type) {
        case 'secondary':
            return (
                <StSecondaryButtonContainer>
                    {renderButtonContent({children, fontSize, faIconLeft, faIconRight})}
                </StSecondaryButtonContainer>
            )
        case 'text':
            return (
                <StTextButtonContainer>
                    {renderButtonContent({children, fontSize, faIconLeft, faIconRight})}
                </StTextButtonContainer>
            )
        case 'negative':
            return (
                <StNegativeButtonContainer>
                    {renderButtonContent({children, fontSize, faIconLeft, faIconRight})}
                </StNegativeButtonContainer>
            )
        default:
            return (
                <StButtonContainer>
                    {renderButtonContent({children, fontSize, faIconLeft, faIconRight})}
                </StButtonContainer>
            )
    }
}

const renderButtonContent = ({children, fontSize, faIconLeft, faIconRight}: InnerButtonProps) => {
    return (
        <>
            {faIconLeft && <Icon name={faIconLeft}/>}
            <StButtonText fontSize={fontSize}>{children}</StButtonText>
            {faIconRight && <Icon name={faIconRight}/>}
        </>
    )
}

export const Button = ({ children, type, fontSize, size, faIconLeft, faIconRight, disabled, onPress }: ButtonProps) => {
    return (
        <Pressable disabled={disabled} onPress={onPress}>
            {size && size == 'full-width' ?
                renderButtonContainer({children, type, fontSize, faIconLeft, faIconRight})
            : 
            <Text> {/* By wrapping the entire button container in a text component, the container will behave as if width would be set to fit-content */}
                {renderButtonContainer({children, type, fontSize, faIconLeft, faIconRight})}
            </Text>
            }
            
        </Pressable>
    )
}
