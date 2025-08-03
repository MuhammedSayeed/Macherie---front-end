import { IGetItem, IRemovedItem, IUpdatedItem } from "@/interfaces/cart"
import { IColor } from "@/interfaces/products"
import { create } from "zustand"
import { persist } from "zustand/middleware"



export interface CartItem {
    productId: string
    variantId: string
    title: string
    price: number
    image: string
    quantity: number
    color: IColor
    size: string | null
}
export interface CartStore {
    _id: string // Cart object ID
    items: CartItem[]
    totalPrice: number

    // Actions
    addItem: (item: CartItem) => void
    removeItem: (removedItem: IRemovedItem) => void
    updateItem: (updatedItem: IUpdatedItem) => void
    clearCart: () => void
    getItem: (item: IGetItem) => CartItem | undefined
}
const calcTotalPrice = (items: CartItem[]) => {
    const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    return { totalPrice }
}
const generateCartId = () => {
    const timestamp = Math.floor(Date.now() / 1000).toString(16);
    const randomHex = Math.random().toString(16).substr(2, 16)
    return timestamp + randomHex.padEnd(16, "0")
}



export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            _id: generateCartId(),
            items: [],
            totalPrice: 0,

            addItem: (newItem) => {
                set((state) => {
                    const existingItemIndex = state.items.findIndex(
                        (item) =>
                            item.productId === newItem.productId &&
                            item.variantId === newItem.variantId &&
                            item.color.colorHexCode === newItem.color.colorHexCode &&
                            item.color.colorIdentifier === newItem.color.colorIdentifier &&
                            item.size === newItem.size
                    );

                    let updatedItems: CartItem[];

                    if (existingItemIndex >= 0) {
                        updatedItems = state.items.map((item, index) => index === existingItemIndex ? { ...item, quantity: item.quantity + newItem.quantity } : item)

                    } else {
                        updatedItems = [...state.items, newItem];
                    }

                    const { totalPrice } = calcTotalPrice(updatedItems);

                    return { items: updatedItems, totalPrice }
                })
            },
            removeItem: (removedItem) => {
                set((state) => {
                    const { productId, variantId, size } = removedItem;
                    const updatedItems = state.items.filter((item) => !(item.productId === productId && item.variantId === variantId && item.size === size))
                    const { totalPrice } = calcTotalPrice(updatedItems);

                    return {
                        items: updatedItems,
                        totalPrice
                    }
                })
            },
            updateItem: (updatedItem) => {
                set((state) => {
                    const { productId, variantId, size, quantity } = updatedItem;
                    const updatedItems = state.items.map((i) =>
                        i.productId === productId && i.variantId === variantId && i.size === size ? { ...i, quantity } : i
                    )

                    const { totalPrice } = calcTotalPrice(updatedItems);

                    return {
                        items: updatedItems,
                        totalPrice
                    }
                })

            },
            clearCart: () => {
                set({
                    items: [],
                    totalPrice: 0
                })
            },
            getItem: (item) => {
                const { productId, variantId, size } = item;
                return get().items.find((item) => item.productId === productId && item.variantId === variantId && item.size === size)
            }

        }), {
        name: "cart-storage",
        partialize: (state) => ({
            _id: state._id,
            items: state.items,
            totalPrice: state.totalPrice
        })
    }
    )
) 
