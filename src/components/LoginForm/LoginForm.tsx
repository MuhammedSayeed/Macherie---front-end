"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import useLoginForm from "@/hooks/useLoginForm"
import { ILOGIN_INPUTS } from "@/interfaces/forms"
import { FormInput } from "../ui/inputs/FormInput"
import { PasswordInput } from "../ui/inputs/PasswordInput"
import { LOGIN_INPUTS_FORM } from "@/constants/forms"
import { LoaderCircle } from "lucide-react"

const LoginForm = () => {
  const { errors, isLoading, register, handleSubmit, onSubmit, setFocus } = useLoginForm();
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  const renderFormInput = (input: ILOGIN_INPUTS) => {
    const commonProps = {
      id: input.id,
      label: input.label,
      error: errors[input.name]?.message as string,
      disabled: isLoading,
    }
    if (input.type === "password") return <PasswordInput key={input.id} {...commonProps} {...register(input.name)} showPassword={showPassword} onToggleVisibility={togglePasswordVisibility} placeholder={`Enter your ${input.label.toLowerCase()}`} />

    return <FormInput key={input.id} {...commonProps} {...register(input.name)} placeholder={`Enter your ${input.label.toLowerCase()}`} />

  }


  useEffect(() => {
    setFocus("email")
  }, [])
  return (
    <div className="flex flex-col">
      <div className="flex-1 px-6 py-8">
        <div className="max-w-md mx-auto">
          <div className="mb-8 md:text-center">
            <h1 className="text-2xl font-semibold text-gray-900 leading-tight">Welcome back</h1>
            <p className="text-black/60 text-sm font-mono">Sign in to your account</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">{LOGIN_INPUTS_FORM.map(renderFormInput)}</div>
            <Button disabled={isLoading} type="submit" className="w-full h-12 bg-black hover:bg-black/90 cursor-pointer text-white font-medium rounded-lg mt-4">
              {isLoading ? <LoaderCircle className="size-7 animate-spin" /> : "Sign In"}
            </Button>
          </form>
          <div className="mt-6 space-y-4 text-center">
            <Link href="/forgot-password" className="block text-sm text-gray-600 hover:text-gray-900 underline">
              Forgot your password?
            </Link>

            <div className="text-sm text-gray-600">
              {`Don't have an account?`}{" "}
              <Link href="/register" className="text-gray-900 underline hover:text-gray-700">
                Create account here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
