import { View } from 'react-native'
import styled from 'styled-components'
import { CustomVerticalMarginProps } from './CustomVerticalMargin'

export const StCustomVerticalMargin = styled(View)<Omit<CustomVerticalMarginProps, 'children'>>`
    margin-top: ${({ margin }) => margin}px;
`