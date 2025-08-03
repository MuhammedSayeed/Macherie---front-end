import * as yup from "yup";


const nameValidation = yup.string()
    .min(2, "Name must be at least 2 characters long")
    .max(32, "Name must be at most 32 characters long")

const emailValidation = yup.string()
    .email("Invalid email format");

const passwordValidation = yup
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(32, "Password must be at most 32 characters long")
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one lowercase letter, one uppercase letter, and one digit."
    )

const phoneValidation = yup
    .string()
    .matches(/^01\d{9}$/, "Enter a valid phone number");

const addressValidation = yup
    .string()
    .min(10, "Address must be at least 10 characters long")
    .max(128, "Address must be at most 128 characters long");

const cityValidation = yup
    .string()
    .min(2, "City must be at least 2 characters long")
    .max(128, "City must be at most 128 characters long");

const governorateValidation = yup
    .string()
    .min(2, "Governorate must be at least 2 characters long")
    .max(128, "Governorate must be at most 128 characters long");

const registerSchema = yup.object({
    name: nameValidation.required("Name is required"),
    email: emailValidation.required("Email is required"),
    phone: phoneValidation.required("Phone number is required"),
    password: passwordValidation.required("Password is required")
})

const loginSchema = yup.object({
    email: emailValidation.required("Email is required"),
    password: passwordValidation.required("Password is required")
})

const forgotPasswordSchema = yup.object({
    email: emailValidation.required("Email is required"),
})

const resetPasswordSchema = yup.object({
    password: passwordValidation.required("Password is required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required("Please confirm your password"),
});

const checkoutFormSchema = yup.object({
    name: nameValidation.required("Name is required"),
    email: emailValidation.required("Email is required"),
    phone: phoneValidation.required("Phone number is required"),
    address: addressValidation.required("Address is required"),
    city: cityValidation.required("City is required"),
    governorate: governorateValidation.required("Governorate is required"),
    country: yup.string().required("Country is required"),
    payment: yup
        .string()
        .oneOf(["cash", "card"], "Please select a payment method")
        .required("Payment method is required")
})

const contactInfoSchema = yup.object({
    name: nameValidation.required("Name is required"),
    phone: phoneValidation.required("Phone number is required"),
})



export {
    registerSchema,
    loginSchema,
    forgotPasswordSchema,
    resetPasswordSchema,
    checkoutFormSchema,
    contactInfoSchema
}