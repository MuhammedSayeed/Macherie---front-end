import { create } from 'zustand'


interface AuthOptionsModalStore {
    isOpen: boolean
    setAuthOptionsModalState: (state: boolean) => void
}

export const useAuthOptionsModalStore = create<AuthOptionsModalStore>((set) => ({
    isOpen: false,
    setAuthOptionsModalState: (state: boolean) => set(() => ({ isOpen: state })),
}))