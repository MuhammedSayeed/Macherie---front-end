"use client"

import { useFilterDrawerStore } from "@/lib/store/filterDrawerStore";


const useFilterDrawer = () => {
    const {isOpen , setCartDrawerState} = useFilterDrawerStore();

    const toggleDrawer = () => {
        setCartDrawerState(!isOpen)
    }


    return {isOpen , setCartDrawerState , toggleDrawer}
}

export default useFilterDrawer