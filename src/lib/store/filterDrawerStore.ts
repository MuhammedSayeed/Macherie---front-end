import { create } from 'zustand'


interface FilterDrawerStore {
    isOpen: boolean
    setCartDrawerState: (state: boolean) => void
}

export const useFilterDrawerStore = create<FilterDrawerStore>((set) => ({
    isOpen: false,
    setCartDrawerState: (state: boolean) => set(() => ({ isOpen: state })),
}))