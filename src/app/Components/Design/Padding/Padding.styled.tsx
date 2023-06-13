import { View } from 'react-native'
import styled from 'styled-components'
import { DefaultStyles } from '../../../style'
import { CustomVerticalPaddingProps } from './CustomVerticalPadding'

export const StCustomVerticalPadding = styled(View)<Partial<CustomVerticalPaddingProps>>`
    padding-top: ${({ padding }) => padding}px;
`

export const StLargeVerticalPadding = styled(View)`
    ${DefaultStyles.largeVerticalPadding}
`

export const StMediumHorizontalPadding = styled(View)`
    ${DefaultStyles.mediumHorizontalPadding}
`

export const StMediumVerticalPadding = styled(View)`
    ${DefaultStyles.mediumVerticalPadding}
`

export const StSmallVerticalPadding = styled(View)`
    ${DefaultStyles.smallVerticalPadding}
`

export const StXSmallVerticalPadding = styled(View)`
    ${DefaultStyles.xSmallVerticalPadding}
`