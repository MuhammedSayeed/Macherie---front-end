import { EMPTY_CART } from "@/constants/images"
import Image from "next/image"


const EmptyCart = () => {
    return (
        <div className="min-h-[700px] flex justify-center items-center">
            <div className="flex flex-col items-center">
                <Image src={EMPTY_CART} alt="empty_cart" width={320} height={320} />
                <div className="text-center space-y-2">
                    <span className="text-3xl block">Oops!</span>
                    <p className="text-black/60">Your cart is Empty.</p>
                </div>
            </div>
        </div>
    )
}

export default EmptyCart