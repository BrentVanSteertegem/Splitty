export type NavigationProps = {
    navigation: {
        navigate: (screen: string, params: any) => void
        goBack: () => void
        setOptions: (options: any) => void
    }
    route: {
        params: any
    }       
}

export type ResponseData = {
    document: Document
    humanReviewStatus: {
        state: string
    }
}

type Document = {
    entities: Entity[]
}

export type Entity = SubEntity & {
    properties: SubEntity[]
}

type SubEntity = {
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
    type: string
}

export type Bill = {
    items: Item[]
    total: number
    currency: string
    name?: string
    date: string
    people: Person[]
}

export type Item = {
    name: string
    description?: string
    quantity: number
    price: number
    totalPrice?: number
    notes?: string[]
}

export type Person = {
    id: number
    name: string
    items: Item[]
    total: number
    hasPaid?: boolean
}