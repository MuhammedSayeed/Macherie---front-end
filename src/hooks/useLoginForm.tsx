"use client"

import { AuthContext } from "@/context/auth/AuthContext";
import { ILoginFormData } from "@/interfaces/forms";
import { loginSchema } from "@/schemas/forms";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";

const useLoginForm = () => {
    const { register, handleSubmit, setFocus, formState: { errors } } = useForm({ resolver: yupResolver(loginSchema) });
    const { login, isAuthServiceLoading: isLoading } = useContext(AuthContext);


    const onSubmit = async (loginFormData: ILoginFormData) => {
        await login(loginFormData);
    }


    return {
        register,
        handleSubmit,
        errors,
        setFocus,
        onSubmit,
        isLoading
    }
}

export default useLoginForm