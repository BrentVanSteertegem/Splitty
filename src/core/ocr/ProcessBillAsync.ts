import Constants from 'expo-constants'
import { Bill, Entity, Item } from '../../app/types'

const { LOCATION, PROJECT_ID, PROCESSOR_ID, PROCESSOR_AUTH_TOKEN } = Constants.manifest.extra

export const processBillAsync = async (pictureBase64: string): Promise<Bill | undefined> => {
  const response = await fetch(`https://${LOCATION}-documentai.googleapis.com/v1/projects/${PROJECT_ID}/locations/${LOCATION}/processors/${PROCESSOR_ID}:process`,
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": `Bearer ${PROCESSOR_AUTH_TOKEN}`
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
        currency: ''
      }
      json.document.entities.forEach((entity: Entity) => {
        switch (entity.type){
          case 'line_item':
            const item: Item = {
              name:'',
              quantity: 0,
              totalPrice: 0,
              notes: [],
            }
            entity.properties.forEach((property) => {
              switch (property.type) {
                case 'line_item/amount':
                  const totalPrice = parseFloat(property.mentionText)
                  typeof totalPrice === 'number' && !isNaN(totalPrice) ? item.totalPrice = totalPrice : item.notes!.push('Could not establish the total price for this item.')
                  break
                case 'line_item/description':
                  item.description = property.mentionText
                  break
                case 'line_item/quantity':
                  let quantity = property.mentionText
                  if (isNaN(parseInt(quantity)) && quantity.length > 3 && !item.name) {
                    item.name = quantity.split(' ')[1]
                  }
                  while (isNaN(parseInt(quantity[0]))) {
                    quantity = quantity.slice(1)
                  }
                  while (isNaN(parseInt(quantity[quantity.length - 1]))) {
                    quantity = quantity.slice(0, -1)
                  }
                  typeof quantity === 'number' && !isNaN(quantity) ? item.quantity = quantity : item.notes!.push('Could not establish the quantity of this item.')
                  break
                case 'line_item/unit':
                  item.name = property.mentionText
                  break
                case 'line_item/unit_price':
                  const price = parseFloat(property.mentionText)
                  typeof price === 'number' && !isNaN(price) ? item.price = price : item.notes!.push('Could not establish the unit price for this item.')
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
            if (!item.name) {
              if (item.description) {
                item.name = item.description 
                item.description = undefined
              } else {
                item.notes!.push('Could not establish the name of this item.')
              }
            }
            bill.items.push(item)
            break
          case 'net_amount':
            bill.total = parseFloat(entity.mentionText)
            break
          case 'currency':
            bill.currency = entity.mentionText
            break
        } 
      })
      return bill
    }
    console.log('No entities')
  } else {
    console.log('No data')
  }
  return
}