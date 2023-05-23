import { ReactNode } from 'react'
import { StModal, StInnerModal, StModalCard, StButtonContainer } from './Modal.styled'
import { CenteredContainer, ContentContainer } from '../Container'
import { Button } from '../Button'

type ModalProps = {
    children: ReactNode
    onCancel: () => void
    onCancelText?: string
    onContinue?: () => void
    onContinueText?: string
}

export const Modal = ({ children, onCancel, onCancelText, onContinue, onContinueText }: ModalProps) => {
    return (
        <StModal transparent={true} onRequestClose={onCancel}>
            <StInnerModal>
                <ContentContainer> 
                    <CenteredContainer>
                        <StModalCard>
                            {children}
                            <StButtonContainer>
                                {onCancelText &&
                                    <Button
                                    onPress={onCancel}
                                    type='negative'
                                    >
                                        Close
                                    </Button>
                                }
                                {onContinue && onContinueText &&
                                    <Button
                                    onPress={onContinue}
                                    >
                                        Add person
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