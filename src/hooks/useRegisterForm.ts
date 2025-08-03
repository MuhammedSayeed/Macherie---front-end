"use client"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "@/schemas/forms";
import { IRegisterFormData } from "@/interfaces/forms";
import { useContext} from "react";
import { AuthContext } from "@/context/auth/AuthContext";

const useRegisterForm = () => {
    const { isAuthServiceLoading: isLoading, signup } = useContext(AuthContext);

    const { register, handleSubmit, setFocus, formState: { errors } } = useForm({ resolver: yupResolver(registerSchema) });

    const onSubmit = async (registerFormData: IRegisterFormData) => {
        await signup(registerFormData);
    }


    return {
        register,
        handleSubmit,
        setFocus,
        errors,
        onSubmit,
        isLoading
    }
}

export default useRegisterForm