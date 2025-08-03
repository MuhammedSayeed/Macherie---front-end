import { Separator } from "./separator"
import { LogOut, Settings, User } from "lucide-react"
import clsx from "clsx"
import { Button } from "./button"
import { useContext } from "react"
import { AuthContext } from "@/context/auth/AuthContext"
import { useDropdownStore } from "@/lib/store/dropDownStore"
const DropDownMenuUser = () => {
    const { user, logout } = useContext(AuthContext);
    const { isOpen, toggle } = useDropdownStore();


    const handleLogout = () => {
        logout();
        toggle();
    }


    return (
        <div className={clsx("absolute right-0 top-12 w-64 bg-white rounded-xl shadow-lg border border-gray-200 transform transition-all duration-200 ease-out origin-top-right z-50", isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none")}>
            {/* HEADER */}
            <div className="px-4 py-3 border-b border-gray-100">
                <div>
                    <p className="text-sm font-semibold text-gray-900">{user?.name}</p>
                    <p className="text-xs text-gray-500 text-wrap">{user?.email.slice(0, 25)}</p>
                </div>
            </div>
            {/* MENU ITEMS */}
            <div className="py-2">
                <button className="w-full flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150">
                    <User className="w-4 h-4 mr-3 text-gray-400" />
                    Profile
                </button>

                <button className="w-full flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150">
                    <Settings className="w-4 h-4 mr-3 text-gray-400" />
                    Settings
                </button>
            </div>
            <Separator className="my-1" />
            {/* Logout Button */}
            <div className="p-2">
                <Button onClick={handleLogout} size="icon" className="w-full bg-black cursor-pointer">
                    <LogOut className="w-4 h-4" />
                    Logout
                </Button>
            </div>
        </div>
    )
}

export default DropDownMenuUser