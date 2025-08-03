import CartDrawer from "@/components/Cart/CartDrawer"
import Footer from "@/components/ui/Footer/Footer"
import Navbar from "@/components/ui/Navbar/Navbar"
import Sidebar from "@/components/ui/sidebar/Sidebar"
import type React from "react"
import { Toaster } from "react-hot-toast"

export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Toaster />
            <Navbar />
            <Sidebar />
            <CartDrawer />
            <main>{children}</main>
            <Footer />
        </>
    )
}
