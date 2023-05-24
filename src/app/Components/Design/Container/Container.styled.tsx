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

export const StFlexEndContainer = styled(View)`
    ${DefaultStyles.container}
    ${DefaultStyles.flexEnd}
`

export const StFullScreenContainer = styled(View)`
    min-height: ${Dimensions.get('window').height - 136}px;
`