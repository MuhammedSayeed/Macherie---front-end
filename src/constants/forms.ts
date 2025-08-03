import { ICHECKOUT_INPUTS, IEDIT_CONTACT_INPUTS, ILOGIN_INPUTS, IREGISTER_INPUTS, IRESET_PASSWORD_INPUTS } from "@/interfaces/forms";

export const REGISTER_INPUTS_FORM: IREGISTER_INPUTS[] = [
    {
        name: "name",
        label: "Name",
        type: "text",
        id: "name-register",
    },
    {
        name: "email",
        label: "Email",
        type: "text",
        id: "email-register",
    },
    {
        name: "phone",
        label: "Phone",
        type: "number",
        id: "phone-register",
    }, {
        name: "password",
        label: "Password",
        type: "password",
        id: "password-register",
    }
]
export const LOGIN_INPUTS_FORM: ILOGIN_INPUTS[] = [

    {
        name: "email",
        label: "Email",
        type: "text",
        id: "email-login",
    },
    {
        name: "password",
        label: "Password",
        type: "password",
        id: "password-login",
    }
]
export const RESET_PASSWORD_INPUTS_FORM: IRESET_PASSWORD_INPUTS[] = [

    {
        name: "password",
        label: "Password",
        type: "password",
        id: "password-reset",
    },
    {
        name: "confirmPassword",
        label: "Confirm Password",
        type: "password",
        id: "confirm-password-reset",
    }
]
export const CONTACT_INPUTS: ICHECKOUT_INPUTS[] = [
    {
        name: "name",
        label: "Name",
        type: "text",
        id: "name-checkout",
    },
    {
        name: "email",
        label: "Email",
        type: "text",
        id: "email-checkout",
    },
    {
        name: "phone",
        label: "Phone",
        type: "text",
        id: "phone-checkout",
        style: "col-span-2"
    }
]
export const EDIT_CONTACT_INPUTS: IEDIT_CONTACT_INPUTS[] = [
    {
        name: "name",
        label: "Name",
        type: "text",
        id: "name-edit_contact",
    },
    {
        name: "email",
        label: "Email",
        type: "text",
        id: "email-edit_contact",
    },
    {
        name: "phone",
        label: "Phone",
        type: "text",
        id: "phone-edit_contact",
        style: "col-span-2"
    }
]

export const SHIPPING_INPUTS: ICHECKOUT_INPUTS[] = [
    {
        name: "address",
        label: "Address",
        type: "text",
        id: "address-checkout",
        style: "col-span-2"
    },
    {
        name: "governorate",
        label: "Governorate",
        type: "text",
        id: "governorate-checkout"
    },
    {
        name: "city",
        label: "City",
        type: "text",
        id: "city-checkout"
    }
]