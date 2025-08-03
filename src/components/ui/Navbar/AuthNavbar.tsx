"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../button"
import { websiteLogoDark } from "@/constants/logo"

const AuthNavbar = () => {
  const pathname = usePathname()
  const isLoginPage = pathname === "/login"

  const navigationButton = isLoginPage
    ? {
        href: "/register",
        label: "Register",
      }
    : {
        href: "/login",
        label: "Login",
      }

  return (
    <nav className="flex items-center justify-between gap-3 px-3 py-5">
      <div className="flex-shrink-0">
        <Link href="/" aria-label="Go to homepage">
          <Image src={websiteLogoDark || "/placeholder.svg"} width={182} height={36} alt="Website logo" priority />
        </Link>
      </div>
      <div className="flex-shrink-0">
        <Link href={navigationButton.href}>
          <Button className="min-w-[80px] cursor-pointer">
            {navigationButton.label}
          </Button>
        </Link>
      </div>
    </nav>
  )
}

export default AuthNavbar
