import { Bill, Item, Person } from '../../../types'
import { BillItem } from '../BillItem/BillItem'
import { StBillItemsList } from './BillItemsList.styled'

type BillItemsListProps = {
    bill: Bill
    people: Person[]
    setPeople: (people: Person[]) => void
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