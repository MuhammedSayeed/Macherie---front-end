import React from 'react'
import { Button } from '../ui/button'

const CartTotalPrice = () => {
    return (
        <div className='w-full border-t-[6px] border-[#E3E3E3] space-y-3 font-sans p-6'>
            <div className="flex items-center justify-between">
                <span className="font-semibold text-xl">Total <span className="text-[12px] text-gray-400">Including VAT</span></span>
                <span className="font-semibold text-xl">EGP {5000}</span>
            </div>
            <Button size={"lg"} className="w-full py-7 rounded-full font-semibold border bg-[#60D17D] hover:bg-[#3fa55a] cursor-pointer text-white text-[16px]">Procrss order</Button>
        </div>
    )
}

export default CartTotalPrice