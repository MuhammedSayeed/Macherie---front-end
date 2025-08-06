"use client"

import { useContext } from "react"
import useCustomQuery from "./useCustomQuery"
import { AuthContext } from "@/context/auth/AuthContext"
import Cookies from 'js-cookie';
import { IAddress } from "@/interfaces/address";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "@/config/axios";

const useShippingAddress = () => {
    const { user } = useContext(AuthContext);
    const token = Cookies.get("token");
    const queryClient = useQueryClient()


    const { data } = useCustomQuery({
        queryKey: ["shipping-address", `${user?._id}`],
        endPoint: "/shippingAddress",
        config: {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
        enabled: !!(user?._id && token)
    })
    const addShippingAddress = useMutation({
        mutationFn: async (newAddress: Omit<IAddress, "_id">) => {
            const { data } = await axiosInstance.post("/shippingAddress", newAddress, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            return data.results;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["shipping-address", `${user?._id}`] })
        },
        onError: (err) => {
            console.log(err);
        }
    })

    const deleteShippingAddress = useMutation({
        mutationFn: async (addressId: string) => {
            const { data } = await axiosInstance.delete(`/shippingAddress/${addressId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            return data.results;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["shipping-address", `${user?._id}`] })
        },
        onError: (err) => {
            console.log(err);
        }
    })

    return {
        addresses: (data?.results?.addresses ?? []) as IAddress[],
        addShippingAddress,
        isLoadingAddAddress: addShippingAddress.isPending,
        deleteShippingAddress,
        isLoadingDeleteAddress: deleteShippingAddress.isPending,
    }
}

export default useShippingAddress