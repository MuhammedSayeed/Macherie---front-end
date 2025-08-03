import { Button } from "../button"
import { ShoppingCart } from 'lucide-react';
import OpenSearchButton from "@/components/search/OpenSearchButton";
import useCartDrawer from "@/hooks/useCartDrawer";
import UserProfileIcon from "../userProfileIcon";

const NavItems = () => {
    const { handleOnOpen } = useCartDrawer();

    return (
        <div className="flex items-center space-x-3">
            <div className="hidden md:block">
                <OpenSearchButton />
            </div>
            <UserProfileIcon />
            <Button onClick={handleOnOpen} variant={"ghost"} className="hover:bg-transparent text-black  cursor-pointer !p-0 antialiased"><ShoppingCart className="size-6" /></Button>
        </div>
    )
}

export default NavItems