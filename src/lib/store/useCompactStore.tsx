import { create } from 'zustand'


interface CompactStore {
    isCompactView: boolean
    setIsCompactView: (state: boolean) => void
}

export const useCompactStore = create<CompactStore>((set) => ({
    isCompactView: false,
    setIsCompactView: (state: boolean) => set(() => ({ isCompactView: state })),
}))