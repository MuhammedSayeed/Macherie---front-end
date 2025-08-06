import { IADD_NEW_SHIPPING_ADDRESS, ICHECKOUT_INPUTS, IEDIT_CONTACT_INPUTS, ILOGIN_INPUTS, IMANUAL_SHIPPINGADDRESS_INPUTS, IREGISTER_INPUTS, IRESET_PASSWORD_INPUTS } from "@/interfaces/forms";

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
export const ADD_NEW_SHIPPING_ADDRESS_INPUTS: IADD_NEW_SHIPPING_ADDRESS[] = [
    {
        name: "address",
        label: "Address",
        type: "text",
        id: "address-add_new_shipping_address",
        style: "col-span-2",
        placeholder: "Enter your street address"
    },
    {
        name: "city",
        label: "City",
        type: "text",
        id: "city-add_new_shipping_address",
        placeholder: "Enter city"
    },
    {
        name: "governorate",
        label: "Governorate",
        type: "text",
        id: "governorate-add_new_shipping_address",
        placeholder: "Enter governorate"
    },
    {
        name: "country",
        label: "Country",
        type: "text",
        id: "country-add_new_shipping_address",
        style: "col-span-2",
        placeholder: "Enter country"
    }

]


export const MANUAL_SHIPPINGADDRESS_INPUTS : IMANUAL_SHIPPINGADDRESS_INPUTS[] = [
    {
        name : "shippingAddress.address",
        label : "Address",
        type : "text",
        id : "shippingAddress.address",
        style : "col-span-2",
        placeholder : "Enter your street address"
    },
    {
        name : "shippingAddress.city",
        label : "City",
        type : "text",
        id : "shippingAddress.city",
        placeholder : "Enter city"
    },
    {
        name : "shippingAddress.governorate",
        label : "Governorate",
        type : "text",
        id : "shippingAddress.governorate",
        placeholder : "Enter governorate"
    },
    {
        name : "shippingAddress.country",
        label : "Country",
        type : "text",
        id : "shippingAddress.country",
        style : "col-span-2",
        placeholder : "Enter country"
    }
]