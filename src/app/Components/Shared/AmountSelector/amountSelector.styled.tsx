import { View } from 'react-native/'
import styled from 'styled-components'
import { Variables } from '../../../style'
import { StButtonContainer } from '../../Design/Button/Button.styled'

export const StAmountSelectorContainer = styled(View)`
    flex-direction: row;
    align-items: center;
`

export const StAmount = styled(View)`
    width: ${Variables.spacing.small * 3}px;
    padding: ${Variables.spacing.xsmall}px 0;
    background-color: ${Variables.colors.white};
    align-items: center;
`

export const StButton = styled(StButtonContainer)`
    margin: 0;
    padding: ${Variables.spacing.xsmall}px;
    height: ${Variables.spacing.xsmall * 2 + Variables.textSizes.xsmall * 1.4}px;
    border-radius: ${Variables.rounded.small}px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
`

export const StButtonNegative = styled(StButton)`
    background-color: ${Variables.colors.darkGray};
    border-top-left-radius: ${Variables.rounded.small}px;
    border-bottom-left-radius: ${Variables.rounded.small}px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
`