import { CartItem } from "@/lib/store/cartStore"

export interface IRemovedItem {
    productId: string,
    variantId: string,
    size: string
}

export interface IUpdatedItem {
    productId: string,
    variantId: string,
    size: string,
    quantity: number
}

export interface IGetItem {
    productId: string, variantId: string, size: string
}

export interface ICheckItemAvailability {
    variantId: string,  size: string, quantity: number
}

export interface CartData {
    items: CartItem[]
    totalPrice: number
    isEmpty: boolean
}
