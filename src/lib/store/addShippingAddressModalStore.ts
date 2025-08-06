import { create } from 'zustand'


interface AddShippingAddressModalStore {
    isOpen: boolean
    setModalState: (state: boolean) => void
}

export const useAddShippingAddressModalStore = create<AddShippingAddressModalStore>((set) => ({
    isOpen: false,
    setModalState: (state: boolean) => set(() => ({ isOpen: state })),
}))