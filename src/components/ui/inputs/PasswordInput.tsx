import React, { forwardRef } from 'react'
import { Button } from '../button'
import { Eye, EyeOff } from 'lucide-react'
import ErrorMessageInput from '../ErrorMessageInput'
import { Input } from '../input'
import { Label } from '../label'
import clsx from 'clsx'

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string
    label: string
    error?: string
    showPassword: boolean
    onToggleVisibility: () => void
    disabled?: boolean
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
    ({ id, label, error, showPassword, onToggleVisibility, disabled, className, ...props }, ref) => {
        const hasError = Boolean(error)
        const inputType = showPassword ? "text" : "password"
        const toggleLabel = showPassword ? "Hide password" : "Show password"

        return (
            <div className="space-y-2">
                <Label htmlFor={id} className="text-sm font-medium text-gray-700">
                    {label}
                </Label>
                <div className="relative">
                    <Input
                        ref={ref}
                        id={id}
                        type={inputType}
                        disabled={disabled}
                        className={clsx("w-full h-12 px-4 pr-12 bg-gray-100 border-0 rounded-lg text-gray-900 placeholder:text-gray-500", className)}
                        {...props}
                    />
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        disabled={disabled}
                        onClick={onToggleVisibility}
                        aria-label={toggleLabel}
                        className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                    >
                        {showPassword ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />  }
                    </Button>
                </div>
                {hasError && <ErrorMessageInput message={error as string} />}
            </div>
        )
    },
)

PasswordInput.displayName = "PasswordInput"