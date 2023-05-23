import { View } from 'react-native'
import styled from 'styled-components'
import { StOffsetProps } from './Offset'
import { Variables } from '../../../style'

export const StOffset = styled(View)<StOffsetProps>`
    margin-left: ${({ offset }) => offset ? offset : Variables.spacing.medium}px;    
`