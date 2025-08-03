"use client"

import { useEditContactInfoModalStore } from "@/lib/store/EditContactInfoModalStore";
import { contactInfoSchema } from "@/schemas/forms";
import { EditContactFormData } from "@/types/checkout";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMemo } from "react";
import { useForm } from "react-hook-form";



interface IProps {
    name: string,
    phone: string,
}


const useEditContactInfoModal = (defaultValues: IProps) => {
    const { isOpen, setEditContactInfoState } = useEditContactInfoModalStore();
    const { register, formState: { errors }, handleSubmit, watch } = useForm<EditContactFormData>({
        resolver: yupResolver(contactInfoSchema),
        defaultValues: defaultValues
    })

    const handleOpenEditModal = () => setEditContactInfoState(true);
    const handleCloseEditModal = () => setEditContactInfoState(false);

    const currentName = watch("name");
    const currentPhone = watch("phone");

    const isValueChanged = useMemo(() => {
        return currentName !== defaultValues.name || currentPhone !== defaultValues.phone;
    }, [currentName, currentPhone, defaultValues]);

    return {
        isOpen,
        handleOpenEditModal,
        handleCloseEditModal,
        register,
        errors,
        handleSubmit,
        isValueChanged
    }
}

export default useEditContactInfoModal