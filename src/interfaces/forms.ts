/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface IBaseInput<NameType extends string, LabelType extends string> {
    name: NameType;
    label: LabelType;
    type: "text" | "password" | "number";
    id: string;
}


// REGISTER INPUTS
export interface IREGISTER_INPUTS extends IBaseInput<"name" | "email" | "phone" | "password", "Name" | "Email" | "Phone" | "Password"> { }

// LOGIN INPUTS
export interface ILOGIN_INPUTS extends IBaseInput<"email" | "password", "Email" | "Password"> { }

// RESET PASSWORD INPUTS
export interface IRESET_PASSWORD_INPUTS extends IBaseInput<"password" | "confirmPassword", "Password" | "Confirm Password"> { }

// CHECKOUT INPUTS
export interface ICHECKOUT_INPUTS extends IBaseInput<"name" | "email" | "phone" | "address" | "city" | "governorate", "Name" | "Email" | "Phone" | "Address" | "City" | "Governorate"> {
    style?: string
}
export interface IEDIT_CONTACT_INPUTS extends IBaseInput<"name" | "email" | "phone", "Name" | "Email" | "Phone"> {
    style?: string
}
export interface IRegisterFormData {
    name: string;
    email: string;
    phone: string;
    password: string;
}

export interface ILoginFormData {
    email: string;
    password: string;
}
export interface IResetPasswordFormData {
    password: string;
}