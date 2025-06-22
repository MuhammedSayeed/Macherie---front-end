import { create } from 'zustand'


interface CartDrawerStore {
    isOpen: boolean
    setCartDrawerState: (state: boolean) => void
}

export const useCartDrawerStore = create<CartDrawerStore>((set) => ({
    isOpen: false,
    setCartDrawerState: (state: boolean) => set(() => ({ isOpen: state })),
}))