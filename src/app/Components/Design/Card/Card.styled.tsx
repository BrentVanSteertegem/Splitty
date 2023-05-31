import { View } from 'react-native'
import styled from 'styled-components'
import { Variables } from '../../../style'

export const StCard = styled(View)`
    background-color: ${Variables.colors.white};
    padding: ${Variables.spacing.medium}px;
    border-radius: ${Variables.rounded.medium}px;
    gap: ${Variables.spacing.xsmall}px;
`