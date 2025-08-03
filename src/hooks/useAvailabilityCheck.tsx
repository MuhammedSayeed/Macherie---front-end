"use client"
import { useCallback } from "react"
import { checkAvailability } from "@/lib/api/products"
import showToast from "@/config/toast"

interface UseAvailabilityCheckProps {
    variantId: string
    colorIdentifier: string
    size: string
}

const useAvailabilityCheck = ({ variantId, colorIdentifier, size }: UseAvailabilityCheckProps) => {
    const checkItemAvailability = useCallback(async (quantity: number): Promise<boolean> => {
        const { available, errorMessage } = await checkAvailability(variantId, colorIdentifier, size, `${quantity}`)

        if (!available && errorMessage) {
            showToast(errorMessage, "error")
            return false
        }
        return true
    },
        [variantId, colorIdentifier, size])


    return {
        checkItemAvailability
    }
}

export default useAvailabilityCheck