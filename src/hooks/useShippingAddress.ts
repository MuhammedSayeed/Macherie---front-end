"use client"

import { useContext } from "react"
import useCustomQuery from "./useCustomQuery"
import { AuthContext } from "@/context/auth/AuthContext"
import Cookies from 'js-cookie';

const useShippingAddress = () => {
    const { user } = useContext(AuthContext);

    const token = Cookies.get("token");

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


    return {
        data
    }
}

export default useShippingAddress