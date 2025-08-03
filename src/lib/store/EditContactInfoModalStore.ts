import { create } from 'zustand'


interface EditContactInfoModal {
    isOpen: boolean
    setEditContactInfoState: (state: boolean) => void
}

export const useEditContactInfoModalStore = create<EditContactInfoModal>((set) => ({
    isOpen: false,
    setEditContactInfoState: (state: boolean) => set(() => ({ isOpen: state })),
}))