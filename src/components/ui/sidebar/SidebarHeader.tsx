import { X } from "lucide-react"
import { Button } from "../button"
import { genderClothes } from "@/constants/sidebar"
import useSidebar from "@/hooks/useSidebar";

const SidebarHeader = () => {
    const { handleCloseSidebar } = useSidebar();

    const renderGenresClothes = genderClothes.map((g) => (
        <span key={g.id} className={`w-full text-center font-semibold tracking-wider`}>
            {g.title}
        </span>
    ))

    return (
        <div className="grid grid-cols-[1fr_auto] items-center border-b-[6px] border-[#E3E3E3]">
            <div className="flex justify-center gap-2 border-r-2 border-[#E3E3E3] py-4">
                {renderGenresClothes}
            </div>
            <Button onClick={handleCloseSidebar} className="hover:bg-transparent cursor-pointer !px-5" variant={"ghost"}>
                <X className="size-6" />
            </Button>
        </div>
    )
}

export default SidebarHeader