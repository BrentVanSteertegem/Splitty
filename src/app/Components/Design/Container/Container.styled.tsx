import { Dimensions, View } from 'react-native'
import styled from 'styled-components'
import { DefaultStyles } from '../../../style'

export const StContainer = styled(View)`
    ${DefaultStyles.container}
`

export const StContentContainer = styled(View)`
    ${DefaultStyles.container}
    ${DefaultStyles.contentContainer}
`

export const StCenteredContainer = styled(View)`
    ${DefaultStyles.container}
    ${DefaultStyles.centered}
`

export const StJustifyEndContainer = styled(View)`
    ${DefaultStyles.container}
    justify-content: flex-end;
`

export const StFullScreenContainer = styled(View)`
    ${DefaultStyles.container}
    min-height: ${Dimensions.get('window').height - 136}px;
`

export const StAlignEndContainer = styled(View)`
    ${DefaultStyles.container}
    align-items: flex-end;
`