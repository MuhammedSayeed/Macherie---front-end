import CartImage from '@/components/Cart/CartItem/CartImage'
import { CartItem } from '@/lib/store/cartStore'
import React from 'react'


interface IProps {
    item: CartItem
}

const Item = ({ item }: IProps) => {
    return (
        <div className="flex gap-3 mb-5">
            <CartImage image={item.image} alt='img' />
            <div className="flex-1 flex w-full">
                <div className="flex flex-1 flex-col space-y-2">
                    <span className='font-medium text-[15px]'>{item.title}</span>
                    <div className="flex gap-2 items-center text-sm opacity-80">
                        <span>QTY:</span>
                        <span>{item.quantity}</span>
                    </div>
                    <div className="flex gap-2 items-center text-sm opacity-80">
                        <span>Color:</span>
                        <span>{item.color.colorIdentifier}</span>
                    </div>
                    <div className="flex gap-2 items-center text-sm opacity-80">
                        <span>Size:</span>
                        <span>{item.size?.toUpperCase()}</span>
                    </div>
                </div>
                <span className='font-normal text-sm'>{item.price} EGP</span>
            </div>
        </div>
    )
}

export default Item