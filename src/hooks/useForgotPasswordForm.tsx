"use client"

import { forgotPasswordSchema } from "@/schemas/forms";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import useAuth from "./useAuth";
import { useState } from "react";
import toast from "react-hot-toast";

const useForgotPasswordForm = () => {
    const [success, setSuccess] = useState(false);
    const { register, handleSubmit, setFocus, formState: { errors } } = useForm({ resolver: yupResolver(forgotPasswordSchema) });
    const { forgotPassword, isLoading } = useAuth();

    const onSubmit = async ({ email }: { email: string }) => {
        await forgotPassword(email).then((res) => {
            if (res.error) return toast.error(res.error);
            setSuccess(true);
        })
    }

    return {
        register,
        handleSubmit,
        setFocus,
        errors,
        onSubmit,
        isLoading,
        success
    }
}

export default useForgotPasswordForm