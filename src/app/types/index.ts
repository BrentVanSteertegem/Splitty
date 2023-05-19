export type ResponseData = {
    document: Document
    humanReviewStatus: {
        state: string
    }
}

type Document = {
    entities: Entity[]
}

export type Entity = {
    confidence: number
    id: number
    mentionText: string
    pageAnchor: {
        pageRefs: {
        pageNumber: number
        boundingPoly: {
            normalizedVertices: {
            x: number
            y: number
            }[]
        }
        }[]
    }
    textAnchor: {
        textSegments: {
        startOffset: string
        endOffset: string
        }[]
    }
    properties: {
        mentionText: string
    }[]
    type: string
}