import { Button } from "../button"
import { UserRound } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import OpenSearchButton from "@/components/search/OpenSearchButton";
import useCartDrawer from "@/hooks/useCartDrawer";
const NavItems = () => {
    const { handleOnOpen } = useCartDrawer();
    return (
        <div className="flex items-center space-x-3">
            <div className="hidden md:block">
                <OpenSearchButton />
            </div>
            <Button variant={"ghost"} className="hover:bg-transparent text-black cursor-pointer !p-0"><UserRound className="size-6" /></Button>
            <Button onClick={handleOnOpen} variant={"ghost"} className="hover:bg-transparent text-black  cursor-pointer !p-0"><ShoppingCart className="size-6" /></Button>
        </div>
    )
}

export default NavItems