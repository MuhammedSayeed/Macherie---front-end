"use client"
import { ILoginFormData, IRegisterFormData } from "@/interfaces/forms"
import { IUser } from "@/interfaces/user"
import { Dispatch, SetStateAction, createContext } from "react"


interface IAuthContext {
    user: IUser | null,
    isAuthenticated: boolean,
    setUser: Dispatch<SetStateAction<IUser | null>>
    isUserDataLoading: boolean
    signup: ({ name, email, phone, password }: IRegisterFormData) => Promise<boolean>,
    login: ({ email, password }: ILoginFormData) => Promise<boolean>,
    logout: () => void,
    isAuthServiceLoading: boolean
    getToken: () => string | null
}

export const AuthContext = createContext<IAuthContext>({
    isAuthenticated: false,
    user: null,
    setUser: () => { },
    isUserDataLoading: false,
    signup: async () => { return false },
    login: async () => { return false },
    logout: () => { },
    isAuthServiceLoading: false,
    getToken: () => { return null }

})