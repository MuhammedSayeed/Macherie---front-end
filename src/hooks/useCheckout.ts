"use client"

import axiosInstance from "@/config/axios";
import { useState } from "react"

const useCheckout = () => {
    const [isLoading, setIsLoading] = useState(false);


    const checkoutOrder = async (data: any) => {
        setIsLoading(true);
        try {

            const res = await axiosInstance.post("/order", data);
            console.log(res);

        } catch (error) {
            console.log(error);

        } finally {
            setIsLoading(false);
        }
    }
    return {
        checkoutOrder,
        isLoading
    }
}

export default useCheckout