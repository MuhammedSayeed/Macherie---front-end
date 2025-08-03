"use client"

import { UserRound } from "lucide-react"
import { Button } from "./button"
import { useContext } from "react"
import { AuthContext } from "@/context/auth/AuthContext"
import DropDownMenuUser from "./DropDownMenuUser"
import { useClickOutside } from "@/hooks/useClickOutside"
import { useAuthOptionsModalStore } from "@/lib/store/authOptionsModalStore"
import { useDropdownStore } from "@/lib/store/dropDownStore"


const UserProfileIcon = () => {

    const { setAuthOptionsModalState } = useAuthOptionsModalStore();
    const { user } = useContext(AuthContext);
    const { setIsOpen, toggle } = useDropdownStore();
    const dropdownRef = useClickOutside<HTMLDivElement>(() => {
        setIsOpen(false)
    })

    const handleOnClick = () => {
        if (!user) {
            setAuthOptionsModalState(true);
            return;
        }
        toggle();
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <Button onClick={handleOnClick} variant={"ghost"} className="hover:bg-transparent text-black cursor-pointer !p-0"><UserRound className="size-6 antialiased" /></Button>
            <DropDownMenuUser />
        </div>
    )
}

export default UserProfileIcon