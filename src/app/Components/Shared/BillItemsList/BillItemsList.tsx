import { Bill, Item, PersonProps } from '../../../types'
import { BillItem } from '../BillItem/BillItem'
import { StBillItemsList } from './BillItemsList.styled'

type BillItemsListProps = {
    bill: Bill
    people: PersonProps[]
    setPeople: (people: PersonProps[]) => void
    activePersonIndex: number
}

export const BillItemsList = ({ bill, people, setPeople, activePersonIndex }: BillItemsListProps) => {
    return (
        <StBillItemsList>
            {bill.items.map(( item: Item, index: number ) => 
                <BillItem
                    key={index}
                    item={item}
                    index={index}
                    bill={bill}
                    people={people}
                    setPeople={setPeople}
                    activePersonIndex={activePersonIndex}
                />
            )}
        </StBillItemsList>
    )
}