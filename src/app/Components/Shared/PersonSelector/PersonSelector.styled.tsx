import { View } from 'react-native'
import styled from 'styled-components'
import { Variables } from '../../../style'
import { StActivePersonPreviewContainerProps } from './PersonSelector'

export const StPersonSelector = styled(View)`
    flex-direction: row;
    gap: ${Variables.spacing.xsmall}px;
    margin-bottom: ${Variables.sizes.xlarge}px;
`

export const StActivePersonPreviewContainer = styled(View)<StActivePersonPreviewContainerProps>`
    margin-right: ${({ hasNext }) => hasNext ? Variables.spacing.xlarge : 0}px;
`