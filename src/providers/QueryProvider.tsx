"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";


export default function QueryProvider({ children }: { children: ReactNode }) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: true,
            }
        }
    })

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
