"use client";

import { AuthContext } from "@/context/auth/AuthContext";
import { useContext, useState } from "react";
import useCheckout from "./useCheckout";
import { useForm } from "react-hook-form";
import { CheckoutFormData } from "@/types/checkout";
import { yupResolver } from "@hookform/resolvers/yup";
import { checkoutFormSchema } from "@/schemas/forms";


const useAuthenticatedCheckoutForm = () => {
    const [saveAddress, setSaveAddress] = useState(true);
    const { user, isAuthenticated } = useContext(AuthContext);
    const { isLoading } = useCheckout();

    const form = useForm<CheckoutFormData>({
        resolver: yupResolver(checkoutFormSchema),
        defaultValues: {
            name: user?.name,
            email: user?.email,
            phone: user?.phone,
            shippingAddress: {
                address: "",
                city: "",
                governorate: "",
                country: "",
            },
        }
    })
    const onSumbit = async (data: CheckoutFormData) => {
        console.log({
            ...data,
            isGuest: isAuthenticated ? false : true,
            user: user ? user._id : null,
            saveAddress: saveAddress,
        });
    }

    const handleSaveAddress = () => setSaveAddress(false);

    return {
        form,
        onSumbit,
        isLoading,
        handleSaveAddress,
    }
}

export default useAuthenticatedCheckoutForm