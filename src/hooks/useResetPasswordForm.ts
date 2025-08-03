"use client"

import { resetPasswordSchema } from "@/schemas/forms";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import useAuth from "./useAuth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const useResetPasswordForm = ({ token }: { token: string }) => {
    const { register, handleSubmit, setFocus, formState: { errors } } = useForm({ resolver: yupResolver(resetPasswordSchema) });
    const { resetPassword, isLoading } = useAuth();
    const router = useRouter();

    const onSubmit = async ({ password }: { password: string }) => {
        await resetPassword(token, password).then((res) => {
            if (res.success) {
                router.push("/login");
                return toast.success("password reseted successfully")
            }
            return toast.error(res.error)
        })
    }

    return {
        onSubmit,
        register,
        handleSubmit,
        setFocus,
        errors,
        isLoading
    }
}

export default useResetPasswordForm