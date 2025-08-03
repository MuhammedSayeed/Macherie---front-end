"use client"

import { LoaderCircle } from "lucide-react";
import { Button } from "../ui/button";
import { IRESET_PASSWORD_INPUTS } from "@/interfaces/forms";
import { PasswordInput } from "../ui/inputs/PasswordInput";
import { useEffect, useState } from "react";
import { RESET_PASSWORD_INPUTS_FORM } from "@/constants/forms";
import useResetPasswordForm from "@/hooks/useResetPasswordForm";


interface IProps {
    token: string
}

const ResetPasswordForm = ({ token }: IProps) => {
    const { handleSubmit, onSubmit, register, errors, isLoading, setFocus } = useResetPasswordForm({ token })
    const [showPassword, setShowPassword] = useState(false)
    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev)
    }
    const renderFormInput = (input: IRESET_PASSWORD_INPUTS) => {
        const commonProps = {
            id: input.id,
            label: input.label,
            error: errors[input.name]?.message as string,
            disabled: false,
        }
        if (input.type === "password") return <PasswordInput key={input.id} {...commonProps} {...register(input.name)} showPassword={showPassword} onToggleVisibility={togglePasswordVisibility} placeholder={`Enter your ${input.label.toLowerCase()}`} />
    }

    useEffect(() => {
        setFocus("password")
    }, [])
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">{RESET_PASSWORD_INPUTS_FORM.map(renderFormInput)}</div>
            <Button disabled={isLoading} type="submit" className="w-full h-12 bg-black hover:bg-black/90 cursor-pointer text-white font-medium rounded-lg mt-4">
                {isLoading ? <LoaderCircle className="size-7 animate-spin" /> : "Sign In"}
            </Button>
        </form>
    )
}

export default ResetPasswordForm