import useHybridCart from '@/hooks/useHybridCart';
import React from 'react'
import CartActions from './CartActions';

const CartTotalPrice = () => {
    const { totalPrice } = useHybridCart();

    return (
        <div className='w-full border-t-[6px] border-[#E3E3E3] space-y-3 font-sans p-6'>
            <div className="flex items-center justify-between">
                <span className="font-semibold text-xl">Total <span className="text-[12px] text-gray-400">Including VAT</span></span>
                <span className="font-semibold text-xl">EGP {totalPrice}</span>
            </div>
            <CartActions />
        </div>
    )
}

export default CartTotalPrice