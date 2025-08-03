"use client"

import axiosInstance from "@/config/axios";
import { IErrorResponse } from "@/interfaces/error";
import { IUser } from "@/interfaces/user";
import { AxiosError } from "axios";
import { useState } from "react"
import Cookies from 'js-cookie';
import { ILoginFormData, IRegisterFormData } from "@/interfaces/forms";


interface SignupReturn {
    success: boolean,
    userData: IUser | null,
    token: string | null,
    error: string | null
}

const useAuth = () => {
    const [isLoading, setIsLoading] = useState(false);

    const Signup = async ({ name, email, phone, password }: IRegisterFormData): Promise<SignupReturn> => {
        setIsLoading(true);
        try {
            const { data } = await axiosInstance.post("/users/signup", {
                name,
                email,
                phone,
                password
            });
            return {
                success: true,
                userData: data.results.user,
                token: data.results.token,
                error: null
            }

        } catch (error: unknown) {
            const errorObj = error as AxiosError<IErrorResponse>;
            return {
                success: false,
                userData: null,
                token: null,
                error: errorObj.response?.data.message || "Something went wrong"
            }
        } finally {
            setIsLoading(false);
        }
    }

    const login = async ({ email, password }: ILoginFormData) => {
        setIsLoading(true);
        try {
            const { data } = await axiosInstance.post("/users/login", {
                email,
                password
            });
            return {
                success: true,
                userData: data.results.user,
                token: data.results.token,
                error: null
            }
        } catch (error) {
            const errorObj = error as AxiosError<IErrorResponse>;
            return {
                success: false,
                userData: null,
                token: null,
                error: errorObj.response?.data.message || "Something went wrong"
            }
        } finally {
            setIsLoading(false);
        }

    }

    const logout = async () => {
        Cookies.remove("token");
    }

    const forgotPassword = async (email: string) => {
        setIsLoading(true);
        try {
            const { data, status } = await axiosInstance.post("/users/forgot-password", {
                email
            });
            return {
                success: true,
                message: data.message,
                status,
                error: null
            }
        } catch (error) {
            const errorObj = error as AxiosError<IErrorResponse>;
            return {
                success: false,
                message: null,
                status: errorObj.response?.status || 500,
                error: errorObj.response?.data.message || "Something went wrong"
            }
        } finally {
            setIsLoading(false);
        }
    }

    const resetPassword = async (token: string, password: string) => {
        setIsLoading(true);
        try {
            const { status } = await axiosInstance.post("/users/reset-password", {
                token,
                password
            });
            return {
                success: true,
                status,
                error: null
            }
        } catch (error) {
            const errorObj = error as AxiosError<IErrorResponse>;
            return {
                success: false,
                status: errorObj.response?.status || 500,
                error: errorObj.response?.data.message || "Something went wrong"
            }
        } finally {
            setIsLoading(false);
        }
    }

    return { Signup, isLoading, logout, login, forgotPassword, resetPassword }
}

export default useAuth