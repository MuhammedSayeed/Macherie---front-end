"use client"

import { useRouter } from "next/navigation";
import { Button } from "../ui/button"
import useHybridCart from "@/hooks/useHybridCart";
import useCartDrawer from "@/hooks/useCartDrawer";

const CartActions = () => {
    const { isEmpty, clearCart } = useHybridCart();
    const { handleOnClose } = useCartDrawer();
    const router = useRouter();


    const handleOnclick = () => {
        router.push("/checkout");
        handleOnClose();
    }
    return (
        <div className="flex gap-3">
            <Button disabled={isEmpty} onClick={clearCart} size={"sm"} className="flex-1 py-5 rounded-full font-semibold border bg-gray-200 hover:bg-gray-300 cursor-pointer text-black/70 text-[16px]">Clear</Button>
            <Button disabled={isEmpty} onClick={handleOnclick} size={"sm"} className="flex-1 py-5 rounded-full font-semibold border bg-[#60D17D] hover:bg-[#3fa55a] cursor-pointer text-white text-[16px]">Checkout</Button>
        </div>
    )
}

export default CartActions