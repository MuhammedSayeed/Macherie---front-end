"use client"
import Link from "next/link"
import { Button } from "../ui/button"
import { FormInput } from "../ui/inputs/FormInput"
import { useEffect } from "react"
import useForgotPasswordForm from "@/hooks/useForgotPasswordForm"
import { LoaderCircle, MailCheck } from "lucide-react"

const ForgotPasswordForm = () => {
    const { register, errors, handleSubmit, setFocus, onSubmit, isLoading, success } = useForgotPasswordForm();

    const handleSubmitForm = handleSubmit(onSubmit);

    useEffect(() => {
        setFocus("email");
    }, [])


    if (success) {
        return (
            <div className="flex flex-col items-center mt-40">
                <div className="flex-1 px-6" >
                    <div className="max-w-md mx-auto ">
                        <div className=" mb-5 md:text-center">
                            <h1 className="text-2xl font-semibold text-gray-900 leading-tight flex items-center gap-2"><MailCheck className="size-5" />Reset Paassword has been sent. </h1>
                            <p className="text-black/60 text-sm font-mono ">Check your email</p>
                        </div>
                        <Button size={"lg"} className="w-full">
                            <Link href={"/"}>
                                Back to Home
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="flex flex-col">
            <div className="flex-1 px-6 py-8">
                <div className="max-w-md mx-auto">
                    <div className="mb-8 md:text-center">
                        <h1 className="text-2xl font-semibold text-gray-900 leading-tight">Password Recovery</h1>
                        <p className="text-black/60 text-sm font-mono">{`We'll help you get back into your account`}</p>
                    </div>
                    <form onSubmit={handleSubmitForm} className="space-y-6">
                        <div className="space-y-4">
                            <FormInput
                                label="Email"
                                placeholder="Enter your email"
                                type="text"
                                disabled={false}
                                error={errors["email"]?.message as string}
                                id="email-reset-password-form"
                                {...register("email")}
                            />
                        </div>
                        <Button disabled={isLoading} type="submit" className="w-full h-12 bg-black hover:bg-black/90 cursor-pointer text-white font-medium rounded-lg mt-4">
                            {isLoading ? <LoaderCircle className="size-7 animate-spin" /> : "Submit"}
                        </Button>
                    </form>
                    <div className="mt-6 space-y-4 text-center">
                        <Link href="/login" className="text-gray-600 hover:text-gray-900 underline text-sm">
                            Back to login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPasswordForm