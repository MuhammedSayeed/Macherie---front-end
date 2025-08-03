import { create } from "zustand"

interface DropdownState {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    toggle: () => void
}

export const useDropdownStore = create<DropdownState>((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({ isOpen }),
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}))
