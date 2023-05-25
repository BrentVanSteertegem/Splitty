import { Pressable } from 'react-native'
import { Variables } from '../../../style'
import { Icon } from '../../Design/Icon'
import { Text } from '../../Design/Text'
import { StAmountSelectorContainer, StButton, StAmount, StButtonNegative } from './amountSelector.styled'

type AmountSelectorProps = {
    amount: number
    setAmount: (isPositiveAction: boolean) => void
}

export const AmountSelector = ({ amount, setAmount }: AmountSelectorProps) => {
    return (
        <StAmountSelectorContainer>
            <Pressable
                onPress={() => setAmount(false)}
            >
                <StButtonNegative>
                    <Icon
                        name='minus'
                        size={Variables.textSizes.xsmall}
                        />
                </StButtonNegative>
            </Pressable>
            <StAmount>
                <Text fontSize='xsmall'>{amount}</Text>
            </StAmount>
            <Pressable
                onPress={() => setAmount(true)}
            >
                <StButton>
                    <Icon
                        name='plus'
                        size={Variables.textSizes.xsmall}
                        />
                </StButton>
            </Pressable>
        </StAmountSelectorContainer>
    )
}