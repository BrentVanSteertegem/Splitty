import React, { ReactNode } from 'react'
import { StModal, StInnerModal, StModalCard, StButtonContainer } from './Modal.styled'
import { CenteredContainer, ContentContainer } from '../Container'
import { Button, ButtonProps } from '../Button'

type ModalProps = {
    children: ReactNode
    onCancel: () => void
    buttons?: ReactNode[]
}

export const Modal = ({ children, onCancel, buttons }: ModalProps) => {
    return (
        <StModal transparent={true} onRequestClose={onCancel}>
            <StInnerModal>
                <ContentContainer> 
                    <CenteredContainer>
                        <StModalCard>
                            {children}
                            <StButtonContainer>
                                {buttons && buttons.length > 0 ? 
                                    buttons
                                : 
                                    <Button 
                                        onPress={onCancel}
                                        type='negative'
                                    >
                                        Close
                                    </Button>
                                }
                            </StButtonContainer>
                        </StModalCard>    
                    </CenteredContainer>
                </ContentContainer>
            </StInnerModal>
        </StModal>
    )
}