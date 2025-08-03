import { ISubLink } from '@/interfaces/sidebar'
import { create } from 'zustand'


interface SidebarStore {
    isOpen: boolean
    showSubLinks: boolean
    subLinks: ISubLink[]
    setSidebarState: (state: boolean) => void,
    setShowSubLinks: (state: boolean) => void,
    setSubLinks: (links: ISubLink[]) => void
    currentSubLink : string
    setCurrentSubLink: (link : string) => void
}

export const useSidebarStore = create<SidebarStore>((set) => ({
    showSubLinks: false,
    isOpen: false,
    subLinks: [],
    currentSubLink: "",
    setSidebarState: (state: boolean) => set(() => ({ isOpen: state })),
    setShowSubLinks: (state: boolean) => set(() => ({ showSubLinks: state })),
    setSubLinks: (links: ISubLink[]) => set(() => ({ subLinks: links })),
    setCurrentSubLink: (link : string) => set(() => ({ currentSubLink: link }))
}))