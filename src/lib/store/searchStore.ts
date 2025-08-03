import { create } from 'zustand'


interface SearchStore {
    isOpen: boolean
    setSearchState: (state: boolean) => void
}

export const useSearchStore = create<SearchStore>((set) => ({
    isOpen: false,
    setSearchState: (state: boolean) => set(() => ({ isOpen: state })),
}))