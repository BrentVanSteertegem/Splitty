import { format } from 'date-fns'
import Constants from 'expo-constants'
import { Bill, Entity, Item } from '../../app/types'
import { supabase } from '../api/supabase'

const { LOCATION, PROJECT_ID, PROCESSOR_ID } = Constants!.manifest!.extra

const getDocumentAIKey = async () => {
  const { data } = await supabase
    .from('DocumentAI')
    .select('key')
    .eq('id', 1)
    .single()
    .throwOnError()

  return data && data.key
}

export const processBillAsync = async (pictureBase64: string): Promise<Bill | undefined> => {
  const response = await fetch(`https://${LOCATION}-documentai.googleapis.com/v1/projects/${PROJECT_ID}/locations/${LOCATION}/processors/${PROCESSOR_ID}:process`,
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": `Bearer ${await getDocumentAIKey()}`
      },
      body: JSON.stringify({
        "skipHumanReview": true,
        rawDocument: {
          "content": pictureBase64,
          "mimeType": "image/jpeg"
        },
        fieldMask: 'entities'
      })
    }
  )
  const json = await response.json()
  if (json) {
    if (json.document && json.document.entities) {
      const bill: Bill = {
        items: [],
        total: 0,
        currency: '',
        date: format(new Date(), 'dd/MM/yyyy'),
        people: [{
          id: 0,
          name: 'You',
          items: [],
          total: 0
        }],
      }
      json.document.entities.forEach((entity: Entity) => {
        switch (entity.type){
          case 'line_item':
            const item: Item = {
              id: -1,
              name:'',
              quantity: 0,
              price: 0,
              totalPrice: 0,
              notes: [],
            }
            entity.properties.forEach((property) => {
              switch (property.type) {
                case 'line_item/amount':
                  item.totalPrice = parseFloat(property.mentionText.replaceAll(',', '.'))
                  break
                case 'line_item/quantity':
                  let quantity = property.mentionText
                  if (isNaN(parseInt(quantity)) && quantity.length > 3) {
                    item.name ? item.description = item.name : null
                    item.name = quantity.split(' ')[1]
                  }
                  while (isNaN(parseInt(quantity[0]))) {
                    quantity = quantity.slice(1)
                  }
                  while (isNaN(parseInt(quantity[quantity.length - 1]))) {
                    quantity = quantity.slice(0, -1)
                  }
                  typeof parseInt(quantity) == 'number' ? item.quantity = parseInt(quantity) : null
                  break
                case 'line_item/unit':
                  item.name = property.mentionText
                  break
                case 'line_item/unit_price':
                  item.price = parseFloat(property.mentionText.replaceAll(',', '.'))
                  break
              }
            })
            if (!item.price) {
              item.totalPrice && item.quantity ? item.price = item.totalPrice / item.quantity : item.notes!.push('Could not establish the unit price for this item.')
            }
            if (!item.quantity) {
              item.totalPrice && item.price ? item.quantity = item.totalPrice / item.price : item.notes!.push('Could not establish the quantity of this item.')
            }
            if (!item.totalPrice) {
              item.quantity && item.price ? item.totalPrice = item.quantity * item.price : item.notes!.push('Could not establish the total price for this item.')
            }
            item.name && item.price && bill.items.push(item)
            break
          case 'currency':
            bill.currency = entity.mentionText
            break
        } 
      })
      if (!bill.currency) {
        bill.currency = '€'
      }
      bill.items.forEach((item, index) => {
        item.id = index
        bill.total += item.totalPrice!
      })
      bill.total = parseFloat(bill.total.toFixed(2))
      return bill
    }
    console.log('No entities')
  } else {
    console.log('No data')
  }
  return
}