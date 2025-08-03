"use client"

import { useCartDrawerStore } from "@/lib/store/cartDrawerStore";



const useCartDrawer = () => {
    const { isOpen, setCartDrawerState } = useCartDrawerStore();

    const handleOnClose = () => {
        setCartDrawerState(false);
    }
    const handleOnOpen = () => {
        setCartDrawerState(true);
    }


    

    return {
        isOpen,
        handleOnClose,
        handleOnOpen
    }
}

export default useCartDrawer