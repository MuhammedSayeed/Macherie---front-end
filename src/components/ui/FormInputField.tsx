import clsx from "clsx"
import { Input } from "./input"
import { Label } from "./label"
import { type FieldErrors, type UseFormRegister, type FieldPath } from "react-hook-form"
import { CheckoutFormData } from "@/types/checkout"
import ErrorMessageInput from "./ErrorMessageInput"
import { get } from "lodash" // تأكد من تثبيت lodash

interface IProps {
    id: string
    label: string
    placeholder: string
    style?: string
    register: UseFormRegister<CheckoutFormData>
    errors: FieldErrors<CheckoutFormData>
    name: FieldPath<CheckoutFormData>
}

const FormInputField = (props: IProps) => {
    const { id, label, name, placeholder, style, register, errors } = props;

    const fieldError = get(errors, name);

    return (
        <div className={clsx("space-y-2", style)}>
            <Label htmlFor={id}>{label} *</Label>
            <Input id={id} {...register(name)} placeholder={placeholder} className={clsx(fieldError && "border-red-500", "py-5")} />
            <ErrorMessageInput message={fieldError?.message as string} />
        </div>
    )
}

export default FormInputField