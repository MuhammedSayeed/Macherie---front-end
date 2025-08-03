"use client"

import { useCallback, useEffect, useMemo, useState } from "react";
import useHybridCart from "./useHybridCart";
import { CartItem } from "@/lib/store/cartStore";

interface UseCartItemProps {
    item: CartItem
}
interface UseCartItemReturn {
    editMode: boolean
    quantity: number
    isQuantityChanged: boolean
    canDecrease: boolean
    canIncrease: boolean
    toggleEditMode: () => void
    increaseQuantity: () => void
    decreaseQuantity: () => void
    handleConfirmEdit: () => void
    handleCancelEdit: () => void
    resetItemQty: () => void
}

const QUANTITY_LIMITS = {
    MIN: 1,
    MAX: 8,
} as const

const useCartItem = ({ item }: UseCartItemProps): UseCartItemReturn => {
    const { updateCart } = useHybridCart();
    const [editMode, setEditMode] = useState(false)
    const [quantity, setQuantity] = useState(item.quantity)
    const isQuantityChanged = useMemo(() => quantity !== item.quantity, [quantity, item.quantity]);
    const canDecrease = useMemo(() => quantity > QUANTITY_LIMITS.MIN, [quantity])
    const canIncrease = useMemo(() => quantity <= QUANTITY_LIMITS.MAX, [quantity])


    useEffect(() => {
        setQuantity(item.quantity)
    }, [item.quantity])


    const increaseQuantity = useCallback(() => {
        if (canIncrease) {
            setQuantity((prev) => prev + 1)
        }
    }, [canIncrease])

    const decreaseQuantity = useCallback(() => {
        if (canDecrease) {
            setQuantity((prev) => prev - 1)
        }
    }, [canDecrease])

    const toggleEditMode = useCallback(() => {
        setEditMode((prev) => !prev)
    }, [])

    const resetItemQty = useCallback(() => {
        setQuantity(item.quantity)
    }, [item.quantity])


    const handleConfirmEdit = useCallback(async () => {
        if (!isQuantityChanged) return
        const success = await updateCart({
            productId: item.productId,
            variantId: item.variantId,
            size: item.size as string,
            quantity,
        });
        if (success) {
            setEditMode(false)
        } else {
            resetItemQty()
        }
    }, [isQuantityChanged, quantity, item.productId, item.variantId, item.size, updateCart, resetItemQty])


    const handleCancelEdit = useCallback(() => {
        resetItemQty()
        setEditMode(false)
    }, [resetItemQty])

    return {
        editMode,
        quantity,
        isQuantityChanged,
        canDecrease,
        canIncrease,
        toggleEditMode,
        increaseQuantity,
        decreaseQuantity,
        handleConfirmEdit,
        handleCancelEdit,
        resetItemQty
    }
}

export default useCartItem