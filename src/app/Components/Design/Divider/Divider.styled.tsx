import { View } from 'react-native'
import styled from 'styled-components'
import { DividerProps } from './Divider'
import { Variables } from '../../../style'

export const StDivider = styled(View)<DividerProps>`
    width: 100%;
    height: ${({ thickness }) => thickness || 1}px;
    background-color: ${({ color }) => color || Variables.colors.darkGray};
`