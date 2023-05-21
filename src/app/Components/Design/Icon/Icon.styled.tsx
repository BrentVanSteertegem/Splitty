import { FontAwesome5 } from '@expo/vector-icons'
import styled from 'styled-components'
import { Variables } from '../../../style'
import { IconProps } from './Icon'

export const StIcon = styled(FontAwesome5)<IconProps>`
    color: ${props => props.color ? props.color : Variables.colors.buttonText};
    size: ${props => props.size ? props.size : Variables.sizes.icon};
    height: ${props => props.size ? props.size : Variables.sizes.icon};
`