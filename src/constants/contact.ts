import { IContact_info, IGUEST_CONTACT_FORM_FIELDS } from "@/interfaces/contact";


export const CONTACT_INFO: IContact_info[] = [
    {
        label: "Name",
        value: "name",
    },
    {
        label: "Email",
        value: "email",
    },
    {
        label: "Phone",
        value: "phone",
    },
];

export const GUEST_CONTACT_FORM_FIELDS: IGUEST_CONTACT_FORM_FIELDS[] = [
    {
        label: "Name",
        name: "name",
        type: "text",
        id: "name",
        placeholder: "Enter your full name",
        style: "col-span-2"
    },
    {
        label: "Email",
        name: "email",
        type: "email",
        id: "email",
        placeholder: "Enter your full email",
    },
    {
        label: "Phone Number",
        name: "phone",
        type: "tel",
        id: "phone",
        placeholder: "Enter your phone number",
    },
]