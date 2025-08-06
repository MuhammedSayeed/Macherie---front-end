export interface IContact_info {
    label: string,
    value: "name" | "email" | "phone"
}

export interface IGUEST_CONTACT_FORM_FIELDS {
    label: string,
    name: "name" | "email" | "phone",
    type: string,
    id: "name" | "email" | "phone",
    placeholder: string,
    style?: string
}