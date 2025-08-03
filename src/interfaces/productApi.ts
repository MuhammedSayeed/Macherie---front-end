import { IProduct } from "./products"

export interface ProductsResponse {
    results: IProduct[]
    metaData: {
        totalDocs: number
        hasNextPage: boolean
    },
    error?: boolean
    errorMessage?: string
}

export interface ProductAvailabilityResponse {

    available: boolean
    error?: boolean
    errorMessage?: string | null
}