import Constants from 'expo-constants'

const { API_URL } = Constants.manifest.extra

const generateBody = (image: string) => {
  const body = {
    requests: [
      {
        image: {
          content: image,
        },
        features: [
          {
            type: 'TEXT_DETECTION',
            maxResults: 1,
          },
        ],
      },
    ],
  }
  return body
}

export const callGoogleVisionAsync = async (image: string) => {
  const body = generateBody(image)
  console.log(API_URL)
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
  const result = await response.json()
  const detectedText = result.responses[0].fullTextAnnotation
  return detectedText
    ? detectedText
    : { text: "This image doesn't contain any text!" }
}