"use client"
import { useEffect, useState } from "react"
import { LoaderCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { REGISTER_INPUTS_FORM } from "@/constants/forms"
import useRegisterForm from "@/hooks/useRegisterForm"
import { PasswordInput } from "../ui/inputs/PasswordInput"
import { FormInput } from "../ui/inputs/FormInput"
import { IREGISTER_INPUTS } from "@/interfaces/forms"


const RegisterForm = () => {
    const { register, handleSubmit, onSubmit, isLoading, errors, setFocus } = useRegisterForm();
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev)
    }
    const renderFormInput = (input: IREGISTER_INPUTS) => {
        const commonProps = {
            id: input.id,
            label: input.label,
            error: errors[input.name]?.message as string,
            disabled: isLoading,
        }
        if (input.type === "password") return <PasswordInput key={input.id} {...commonProps} {...register(input.name)} showPassword={showPassword} onToggleVisibility={togglePasswordVisibility} placeholder={`Create a ${input.label.toLowerCase()}`} />

        return <FormInput key={input.id} {...commonProps} {...register(input.name)} placeholder={`Enter a ${input.label.toLowerCase()}`} />
    }

    useEffect(() => {
        setFocus("name")
    }, [])

    return (
        <div className="flex flex-col">
            <div className="flex-1 px-6 py-8">
                <div className="max-w-md mx-auto">
                    <div className="mb-8 md:text-center">
                        <h1 className="text-2xl font-semibold text-gray-900  leading-tight">Create your account</h1>
                        <p className="text-black/60 text-sm font-mono">For Better Experience</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                        <div className="space-y-4">{REGISTER_INPUTS_FORM.map(renderFormInput)}</div>
                        {/* Register Button */}
                        <Button disabled={isLoading} type="submit" className="w-full h-12 bg-black hover:bg-black/90 cursor-pointer text-white font-medium rounded-lg mt-4">
                            {isLoading ? <LoaderCircle className="size-7 animate-spin" /> : "Create Account"}
                        </Button>
                    </form>
                    <div className="mt-6 text-center">
                        <div className="text-sm text-gray-600">
                            Already have an account?{" "}
                            <Link href="/login" className="text-gray-900 underline hover:text-gray-700">
                                Sign in here
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm