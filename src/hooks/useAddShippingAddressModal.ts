"use client"

import { useAddShippingAddressModalStore } from "@/lib/store/addShippingAddressModalStore";
import { AddNewShippingAddressSchema } from "@/schemas/forms";
import { AddNewShippingAddressData } from "@/types/checkout";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import useShippingAddress from "./useShippingAddress";

const useAddShippingAddressModal = () => {
    const { isOpen, setModalState } = useAddShippingAddressModalStore();
    const { addShippingAddress , isLoadingAddAddress } = useShippingAddress();
    const { register, formState: { errors }, handleSubmit, setFocus, reset } = useForm<AddNewShippingAddressData>({
        resolver: yupResolver(AddNewShippingAddressSchema),
    })
    const onSubmit = async (data: AddNewShippingAddressData) => {
        try {
            await addShippingAddress.mutateAsync(data);
            setModalState(false);
            reset();
        } catch (error) {
            console.log(error);
        }
    }


    const handleCloseModal = () => setModalState(false);
    const handleOpenModal = () => setModalState(true);


    return {
        isOpen,
        register,
        errors,
        handleSubmit,
        onSubmit,
        setFocus,
        handleCloseModal,
        handleOpenModal,
        isLoadingAddAddress
    }
}

export default useAddShippingAddressModal