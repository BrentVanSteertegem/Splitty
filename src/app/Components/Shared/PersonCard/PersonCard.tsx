import { useState } from 'react'
import { Pressable, View } from 'react-native'
import { Bill, Person } from '../../../types'
import { Variables } from '../../../style'
import { Card } from '../../Design/Card'
import { XSmallVerticalPadding } from '../../Design/Padding'
import { Text } from '../../Design/Text'
import { Container } from '../../Design/Container'
import { Divider } from '../../Design/Divider'
import { Icon } from '../../Design/Icon'

type PersonCardProps = {
    person: Person
    bill: Bill
    isFinished?: boolean
    updatePerson?: (person: Person) => void
}


export const PersonCard = ({ person, bill, isFinished, updatePerson }: PersonCardProps) => {
    const [hasPaid, setHasPaid] = useState<boolean>(person.hasPaid || false)
    
    const toggleHasPaid = async () => {
        setHasPaid(!person.hasPaid)
        person.hasPaid = !person.hasPaid
        updatePerson ? await updatePerson(person) : console.log('No updatePerson function passed to PersonCard')
        return
    }

    return (
        <Card>
            <Container
                flexDirection='row'
                justifyContent='space-between'
                alignItems='center'
            >
                <Text>{person.name}</Text>
                {isFinished && person.name !== 'You' &&(
                    <Container
                        flexDirection='row'
                        justifyContent='flex-end'
                        alignItems='center'
                        gap={Variables.spacing.xxsmall}
                    >
                        <Text
                            grayedOut={true}
                            fontSize='medium'
                        >
                            Paid:
                        </Text>
                        <Pressable
                            onPress={toggleHasPaid}
                        >
                            <Icon
                                name={hasPaid ? 'check-square' : 'square'}
                                size={Variables.sizes.large}
                                color={hasPaid ? Variables.colors.green : Variables.colors.gray}
                            />
                        </Pressable>
                    </Container>
                )}
            </Container>
            <XSmallVerticalPadding />
            {person.items.map((item, itemIndex) => (
                <View key={itemIndex}>
                    <Container
                        gap={Variables.spacing.xsmall}
                        flexDirection='row'
                    >
                        <Text
                            fontSize='small'
                        >
                            {item.quantity}x
                        </Text>
                        <Container
                            flexDirection='row'
                            justifyContent='space-between'
                        >
                            <View>
                                <Text
                                    fontSize='small'
                                >
                                    {item.name}
                                </Text>
                                <Text
                                    grayedOut={true}
                                    fontSize='small'
                                >
                                    {bill.currency.length == 1 && `${bill.currency} `}
                                    {item.price}
                                    {bill.currency.length > 1 && ` ${bill.currency}`}
                                </Text>
                            </View>
                            <Text
                                color={
                                    person.name == 'You' ?
                                        Variables.colors.text :
                                    person.hasPaid ? 
                                        Variables.colors.green : 
                                    Variables.colors.red
                                }
                                fontSize='small'
                            >
                                {bill.currency.length == 1 && `${bill.currency} `}
                                {item.totalPrice}
                                {bill.currency.length > 1 && ` ${bill.currency}`}
                            </Text>
                        </Container>
                    </Container>
                </View>
            ))}
            <Divider />
            <Container
                flexDirection='row'
                justifyContent='flex-end'
            >
                <Text
                    color={
                        person.name == 'You' ?
                            Variables.colors.text :
                        person.hasPaid ? 
                            Variables.colors.green : 
                        Variables.colors.red
                    }
                >
                    {bill.currency.length == 1 && `${bill.currency} `}
                    {person.total}
                    {bill.currency.length > 1 && ` ${bill.currency}`}
                </Text>
            </Container>
        </Card>
    )
}