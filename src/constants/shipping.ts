import { ShippingFormField } from "@/interfaces/shipping";

export const GUEST_SHIPPING_FORM_FIELDS: ShippingFormField[] = [
    {
        id: "address",
        label: "Address",
        placeholder: "Enter your street address",
        style: "col-span-2",
        name: "shippingAddress.address",
    },
    {
        id: "city",
        label: "City",
        placeholder: "Enter city",
        name: "shippingAddress.city",
    },
    {
        id: "governorate",
        label: "Governorate",
        placeholder: "Enter governorate",
        name: "shippingAddress.governorate",
    },
    {
        id: "country",
        label: "Country",
        placeholder: "Enter country",
        name: "shippingAddress.country",
    }
]