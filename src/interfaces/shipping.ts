import { CheckoutFormData } from "@/types/checkout";
import { FieldPath } from "react-hook-form";

export interface ShippingFormField {
    id: string;
    label: string;
    placeholder: string;
    style?: string;
    name: FieldPath<CheckoutFormData>;
}
