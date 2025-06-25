"use client"

import { useFilterDrawerStore } from "@/lib/store/useFilterDrawerStore"

const useFilterDrawer = () => {
    const {isOpen , setCartDrawerState} = useFilterDrawerStore();

    const toggleDrawer = () => {
        setCartDrawerState(!isOpen)
    }


    return {isOpen , setCartDrawerState , toggleDrawer}
}

export default useFilterDrawer