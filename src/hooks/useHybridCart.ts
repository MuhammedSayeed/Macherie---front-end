/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useContext } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { CartData } from "@/interfaces/cart"
import { AuthContext } from "@/context/auth/AuthContext"
import { checkAvailability } from "@/lib/api/products"
import axiosInstance from "@/config/axios"
import showToast from "@/config/toast"
import useCustomQuery from "./useCustomQuery"

import type { ICheckItemAvailability, IGetItem, IRemovedItem, IUpdatedItem } from "@/interfaces/cart"
import { CartItem, useCartStore } from "@/lib/store/cartStore"

/**
 * Custom hook for managing hybrid cart functionality (local + server)
 * Handles cart operations for both authenticated and unauthenticated users
 */
const useHybridCart = () => {
    const localCart = useCartStore()
    const queryClient = useQueryClient()
    const { isAuthenticated, user, getToken } = useContext(AuthContext)

    const { data: serverCart, isLoading: isServerCartLoading } = useCustomQuery({
        queryKey: ["cart", user?._id as string],
        endPoint: "/cart",
        config: {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        },
        enabled: isAuthenticated && !!user,
    })

    // ==================== UTILITY FUNCTIONS ====================
    const getItemsOfCart = (): CartItem[] => {
        if (isAuthenticated && serverCart) {
            const cartData = serverCart.results || serverCart
            if (cartData && Array.isArray(cartData.cartItems)) {
                return cartData.cartItems as CartItem[]
            }
            return []
        }
        return localCart.items as CartItem[]
    }
    const getItemInCart = (item: IGetItem): CartItem | undefined => {
        const items = getItemsOfCart()
        return items.find((i) => i.variantId === item.variantId && i.productId === item.productId && item.size === i.size)
    }
    const checkItemAvailability = async (item: ICheckItemAvailability): Promise<boolean> => {
        const { variantId, quantity, size } = item
        const { available, errorMessage } = await checkAvailability(variantId, size, `${quantity}`)

        if (!available && errorMessage) {
            return false
        }
        return true
    }
    const updateCartCache = (data: any) => {
        queryClient.setQueryData(["cart", user?._id as string], {
            success: true,
            results: data,
        })
    }
    const handleMutationError = (err: any, defaultMessage: string) => {
        toast.error(err.response?.data?.message || defaultMessage)
    }

    // ==================== SERVER MUTATIONS ====================
    const addToServerCart = useMutation({
        mutationFn: async (item: CartItem) => {
            const token = getToken()
            const serverItem = {
                productId: item.productId,
                variantId: item.variantId,
                title: item.title,
                price: item.price,
                image: item.image,
                quantity: item.quantity,
                color: {
                    colorHexCode: item.color?.colorHexCode,
                    colorIdentifier: item.color?.colorIdentifier,
                },
                size: item.size,
            }

            const { data } = await axiosInstance.post(
                "/cart",
                { item: serverItem },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            )
            return data.results
        },
        onSuccess: updateCartCache,
        onError: (err) => handleMutationError(err, "Failed to add item to cart"),
    });
    const removeFromServerCart = useMutation({
        mutationFn: async (removedItem: IRemovedItem) => {
            const token = getToken()
            const { data } = await axiosInstance.put("/cart", removedItem, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            return data.results
        },
        onSuccess: updateCartCache,
        onError: (err) => handleMutationError(err, "Failed to remove item from cart"),
    })
    const updateServerCart = useMutation({
        mutationFn: async (updatedItem: IUpdatedItem) => {
            const token = getToken()
            const { data } = await axiosInstance.put("/cart/qty", updatedItem, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            return data.results
        },
        onSuccess: updateCartCache,
        onError: (err) => handleMutationError(err, "Failed to update cart"),
    })
    const clearCartFromServer = useMutation({
        mutationFn: async () => {
            const token = getToken()
            const { data } = await axiosInstance.delete("/cart", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            return data.results
        },
        onSuccess: () => {
            queryClient.setQueryData(["cart", user?._id as string], {
                success: true,
                results: { cartItems: [], totalPrice: 0 },
            })
        },
        onError: (err: any) => handleMutationError(err, "Failed to clear cart"),
    })

    // ==================== PUBLIC CART OPERATIONS ====================
    const addToCart = async (item: CartItem): Promise<void> => {
        try {
            // Check if item already exists in cart
            const existingItem = getItemInCart({
                productId: item.productId,
                variantId: item.variantId,
                size: item.size as string,
            })

            const currentQuantity = existingItem?.quantity || 0
            const newTotalQuantity = currentQuantity + item.quantity

            // Verify availability
            const available = await checkItemAvailability({
                variantId: item.variantId,
                quantity: newTotalQuantity,
                size: item.size as string,
            })

            if (!available) {
                showToast("Requested quantity is not available", "error")
                return
            }

            // Add to appropriate cart
            if (isAuthenticated && user) {
                await addToServerCart.mutateAsync(item)
            } else {
                localCart.addItem(item)
                toast.success("Item added to cart")
            }
        } catch (error) {
            console.error("Error adding item to cart:", error)
            showToast("Failed to add item to cart", "error")
        }
    }
    const removeFromCart = async (removedItem: IRemovedItem): Promise<void> => {
        try {
            if (isAuthenticated && user) {
                await removeFromServerCart.mutateAsync(removedItem)
            } else {
                localCart.removeItem(removedItem)
                toast.success("Item removed from cart")
            }
        } catch (error) {
            console.error("Error removing item from cart:", error)
            showToast("Failed to remove item from cart", "error")
        }
    }
    const updateCart = async (updatedItem: IUpdatedItem): Promise<boolean> => {
        try {
            // Check availability for new quantity
            const available = await checkItemAvailability({
                variantId: updatedItem.variantId,
                quantity: updatedItem.quantity,
                size: updatedItem.size as string,
            })

            if (!available) {
                showToast("Requested quantity is not available", "error")
                return false
            }

            // Update appropriate cart
            if (isAuthenticated && user) {
                await updateServerCart.mutateAsync(updatedItem)
            } else {
                localCart.updateItem(updatedItem)
                toast.success("Cart updated")
            }

            return true
        } catch (error) {
            console.error("Error updating cart:", error)
            if (!isAuthenticated || !user) {
                showToast("Failed to update cart", "error")
            }
            return false
        }
    }
    const clearCart = async (): Promise<void> => {
        try {
            if (isAuthenticated && user) {
                await clearCartFromServer.mutateAsync()
            } else {
                localCart.clearCart()
                toast.success("Cart cleared")
            }
        } catch (error) {
            console.error("Error clearing cart:", error)
            showToast("Failed to clear cart", "error")
        }
    }

    // ==================== CART DATA GETTERS ====================
    const getCurrentCart = (): CartData => {
        if (isAuthenticated && serverCart) {
            const cartData = serverCart.results || serverCart

            if (cartData && Array.isArray(cartData.cartItems)) {
                return {
                    items: cartData.cartItems as CartItem[],
                    totalPrice: cartData.totalPrice || 0,
                    isEmpty: cartData.cartItems.length === 0,
                }
            }

            // Return empty cart if no cart items
            return {
                items: [],
                totalPrice: 0,
                isEmpty: true,
            }
        }

        // Fallback to local cart
        return {
            items: localCart.items || [],
            totalPrice: localCart.totalPrice || 0,
            isEmpty: !localCart.items || localCart.items.length === 0,
        }
    }

    // ==================== COMPUTED VALUES ====================
    const isLoading = isAuthenticated ? isServerCartLoading : false
    const isMutating =
        addToServerCart.isPending ||
        removeFromServerCart.isPending ||
        updateServerCart.isPending ||
        clearCartFromServer.isPending

    return {
        ...getCurrentCart(),
        addToCart,
        removeFromCart,
        updateCart,
        clearCart,
        getItemInCart,
        isLoading,
        isMutating,
        isAuthenticated,
    }
}

export default useHybridCart
