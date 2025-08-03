import type React from "react"
import { forwardRef } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ErrorMessageInput from "../ErrorMessageInput"
import clsx from "clsx"

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string
    label: string
    error?: string,
    disabled?: boolean,
}
export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({ id, label, error, disabled, className, ...props }, ref) => {
    const hasError = Boolean(error);

    return (
        <div className="space-y-2">
            <Label htmlFor={id} className="text-sm font-medium text-gray-700">
                {label}
            </Label>
            <Input
                ref={ref}
                id={id}
                type="text"
                disabled={disabled}
                className={clsx("w-full h-12 px-4 bg-gray-100 border-0 rounded-lg text-gray-900 placeholder:text-gray-500", className)}
                {...props}
            />
            {hasError && <ErrorMessageInput message={error as string} />}
        </div>
    )

})

FormInput.displayName = "FormInput"