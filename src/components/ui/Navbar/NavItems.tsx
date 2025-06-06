import SearchButton from "@/components/search/SearchButton";
import { Button } from "../button"
import { UserRound } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
const NavItems = () => {
    return (
        <div className="flex items-center space-x-4">
            <div className="hidden sm:block">
                <SearchButton />
            </div>
            <Button variant={"ghost"} className="hover:bg-transparent hover:text-white/70 cursor-pointer !p-0"><UserRound className="size-6" /></Button>
            <Button variant={"ghost"} className="hover:bg-transparent hover:text-white/70 cursor-pointer !p-0"><ShoppingCart className="size-6" /></Button>
        </div>
    )
}

export default NavItems