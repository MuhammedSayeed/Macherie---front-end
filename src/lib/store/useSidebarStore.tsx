import { ISidebarLink } from '@/interfaces/sidebar'
import { create } from 'zustand'


interface SidebarStore {
    isOpen: boolean
    showSubLinks: boolean
    subLinks: ISidebarLink[]
    setSidebarState: (state: boolean) => void,
    setShowSubLinks: (state: boolean) => void,
    setSubLinks: (links: ISidebarLink[]) => void
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
    setSubLinks: (links: ISidebarLink[]) => set(() => ({ subLinks: links })),
    setCurrentSubLink: (link : string) => set(() => ({ currentSubLink: link }))
}))