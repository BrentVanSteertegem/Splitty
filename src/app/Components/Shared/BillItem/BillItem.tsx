import { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Bill, Item, PersonProps } from '../../../types'
import { Text } from '../../Design/Text'
import { AmountSelector } from '../AmountSelector'
import { StBillItem } from './BillItem.styled'

type BillItemProps = {
    item: Item
    index: number
    bill: Bill
    people: PersonProps[]
    setPeople: (people: PersonProps[]) => void
    activePersonIndex: number
}

export const BillItem = ({ item, index, bill, people, setPeople, activePersonIndex }: BillItemProps) => {
    const activePerson = people[activePersonIndex]
    const [amount, setAmount] = useState(activePerson.items.find((personItem: Item) => personItem.name == item.name)?.quantity || 0)
    const [remaining, setRemaining] = useState(item.quantity)

    useEffect(() => {
        setAmount(activePerson.items.find((personItem: Item) => personItem.name == item.name)?.quantity || 0)
    }, [activePersonIndex])

    const updateAmount = (item: Item, index: number, isPositiveAction: boolean) => {
        const newPeople = [...people]
        if (isPositiveAction) {
            if (remaining > 0) {
                const newAmount = amount + 1
                if (amount > 0) {
                    newPeople.splice(activePersonIndex, 1, {
                        ...activePerson,
                        total: parseFloat((activePerson.total + item.price).toFixed(2)),
                        items: activePerson.items.map((personItem: Item) => {
                            if (personItem.name == item.name) {
                                return {
                                    ...personItem,
                                    quantity: newAmount,
                                    totalPrice: newAmount * item.price
                                }
                            }
                            return personItem
                        })
                    })
                } else {
                    newPeople.splice(activePersonIndex, 1, {
                        ...activePerson,
                        total: parseFloat((activePerson.total + item.price).toFixed(2)),
                        items: [...activePerson.items, {
                            ...item,
                            quantity: newAmount,
                            totalPrice: item.price
                        }]
                    })
                }
                setAmount(newAmount)
                setRemaining(remaining - 1)
            }
        } else if (!isPositiveAction) {
            if ( amount > 0 ) {
                const newAmount = amount - 1
                newPeople.splice(activePersonIndex, 1, {
                    ...activePerson,
                    total: parseFloat((activePerson.total - item.price).toFixed(2)),
                    items: activePerson.items.map((personItem: Item) => {
                        if (personItem.name == item.name) {
                            return {
                                ...personItem,
                                quantity: newAmount,
                                totalPrice:  newAmount * item.price
                            }
                        }
                        return personItem
                    })
                })
                setAmount(newAmount)
                setRemaining(remaining + 1)
            }
        }
        setPeople(newPeople)
    }
    
    return (
        <StBillItem>
            <View>
                <Text
                    fontSize='small'
                >
                    {item.name}
                </Text>
                <Text
                    fontSize='small'
                    grayedOut={true}
                    >
                    {bill.currency.length == 1 && `${bill.currency} `}
                    {item.price}
                    {bill.currency.length > 1 && ` ${bill.currency}`}
                    {` - Remaining: ${remaining}`}
                </Text>
            </View>
            <AmountSelector
                amount={amount}
                setAmount={(isPositiveAction: boolean) => updateAmount(item, index, isPositiveAction)}
            />
        </StBillItem>
    )
    
}