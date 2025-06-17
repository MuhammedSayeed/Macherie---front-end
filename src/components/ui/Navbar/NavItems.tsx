import { Button } from "../button"
import { UserRound } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { useSearchStore } from "@/lib/store/useSearchStore";
import OpenSearchButton from "@/components/search/OpenSearchButton";
const NavItems = () => {
    const { isOpen } = useSearchStore();
    return (
        <div className="flex items-center space-x-3">
            <div className="hidden md:block">
                <OpenSearchButton />
            </div>
            <Button variant={"ghost"} className={`hover:bg-transparent ${isOpen ? "text-black " : "hover:text-white/70 "} cursor-pointer !p-0`}><UserRound className="size-6" /></Button>
            <Button variant={"ghost"} className={`hover:bg-transparent ${isOpen ? "text-black " : "hover:text-white/70 "} cursor-pointer !p-0`}><ShoppingCart className="size-6" /></Button>
        </div>
    )
}

export default NavItems