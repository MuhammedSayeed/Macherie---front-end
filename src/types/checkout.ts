import { checkoutFormSchema, contactInfoSchema } from "@/schemas/forms"
import * as yup from "yup"

export type CheckoutFormData = yup.InferType<typeof checkoutFormSchema>
export type EditContactFormData = yup.InferType<typeof contactInfoSchema>

export type PaymentMethod = "cash" | "card"