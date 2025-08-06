"use client"
import Cookies from 'js-cookie';
import { useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import { IUser } from "@/interfaces/user"
import axiosInstance from "@/config/axios"
import useAuth from "@/hooks/useAuth"
import { AxiosError } from "axios"
import { IErrorResponse } from "@/interfaces/error"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { ILoginFormData, IRegisterFormData } from '@/interfaces/forms';
import { useCartStore } from '@/lib/store/cartStore';

interface IAuthProviderProps {
    children: React.ReactNode
}


export const AuthProvider = ({ children }: IAuthProviderProps) => {
    const { Signup: authSignupService, isLoading: isAuthServiceLoading, logout: authLogoutService, login: authLoginService } = useAuth();
    const [user, setUser] = useState<IUser | null>(null);
    const [isUserDataLoading, setIsUserDataLoading] = useState(false);
    const localCart = useCartStore()
    const isAuthenticated = user !== null;
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            const token = Cookies.get("token");
            if (token) getAuthenticatedUser(token);
        }
        checkAuth();
    }, [])

    const getAuthenticatedUser = async (token: string) => {
        setIsUserDataLoading(true);
        try {
            const { data } = await axiosInstance.get('/users/me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUser(data.results);
        } catch (error) {
            const err = error as AxiosError<IErrorResponse>;
            console.log(err.response?.data.message);
        } finally {
            setIsUserDataLoading(false);
        }
    }

    const syncCartToServer = async (token: string) => {
        if (localCart.items.length === 0) return;
        try {
            const { data } = await axiosInstance.post("/cart/sync", {
                cartItems: localCart.items,
                totalPrice: localCart.totalPrice
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            if (data.success) localCart.clearCart();
        } catch (error) {
            console.error("Failed to sync cart:", error)
            toast.error("Failed to sync cart")
        }
    }

    const signup = async ({ name, email, phone, password }: IRegisterFormData): Promise<boolean> => {
        const results = await authSignupService({ name, email, phone, password });
        if (results.success && results.userData && results.token) {
            setUser(results.userData);
            Cookies.set("token", results.token);
            await syncCartToServer(results.token);
            router.push("/");
            return true;
        }
        toast.error(results.error);
        return false
    }

    const login = async ({ email, password }: ILoginFormData): Promise<boolean> => {
        const results = await authLoginService({ email, password });
        if (results.success && results.userData && results.token) {
            setUser(results.userData);
            Cookies.set("token", results.token);
            await syncCartToServer(results.token);
            router.push("/");
            return true;
        }
        toast.error(results.error);
        return false;
    }

    const logout = () => {
        authLogoutService();
        setUser(null);
        window.location.href = "/";
    }

    const getToken = () => {
        const token = Cookies.get("token");
        if (token) return token;
        return null;
    }

    return (
        <AuthContext.Provider value={{ user, setUser, isAuthenticated, isUserDataLoading, signup, login, logout, isAuthServiceLoading, getToken }}>
            {children}
        </AuthContext.Provider>
    )

}

