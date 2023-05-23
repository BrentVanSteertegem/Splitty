import { Modal, View } from 'react-native'
import styled from 'styled-components'
import { DefaultStyles, Variables } from '../../../style'

export const StModal = styled(Modal)`
    height: '100%';
`

export const StInnerModal = styled(View)`
    background-color: #0007;
    height: 100%;
`

export const StModalCard = styled(View)`
    background-color: ${Variables.colors.white};
    padding: ${Variables.spacing.large}px ${Variables.spacing.medium}px;
    border-radius: ${Variables.rounded.medium}px;
    width: 100%;
` 

export const StButtonContainer = styled(View)`
    ${DefaultStyles.centered}
    margin-top: ${Variables.spacing.large}px;
    flex-direction: row;
    gap: ${Variables.spacing.medium}px;
`