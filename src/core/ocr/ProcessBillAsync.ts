import Constants from 'expo-constants'
import { ResponseData } from '../../app/types'

const { LOCATION, PROJECT_ID, PROCESSOR_ID, PROCESSOR_AUTH_TOKEN } = Constants.manifest.extra

export const processBill = async (pictureBase64: string): Promise<ResponseData> => {
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
  return json
}