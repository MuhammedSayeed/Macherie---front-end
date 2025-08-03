"use client"

import { Button } from "../ui/button"
import useHybridCart from "@/hooks/useHybridCart";

const CartActions = () => {
    const { isEmpty, clearCart } = useHybridCart();
    return (
        <div className="flex gap-3">
            <Button disabled={isEmpty} onClick={clearCart} size={"sm"} className="flex-1 py-5 rounded-full font-semibold border bg-gray-200 hover:bg-gray-300 cursor-pointer text-black/70 text-[16px]">Clear</Button>
            <Button disabled={isEmpty} size={"sm"} className="flex-1 py-5 rounded-full font-semibold border bg-[#60D17D] hover:bg-[#3fa55a] cursor-pointer text-white text-[16px]">Procrss order</Button>
        </div>
    )
}

export default CartActions