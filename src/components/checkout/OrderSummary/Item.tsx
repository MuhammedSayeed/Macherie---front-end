import CartImage from '@/components/Cart/CartItem/CartImage'
import React from 'react'

const Item = () => {
    return (
        <div className="flex gap-3 mb-5">
            <CartImage image='https://static.pullandbear.net/assets/public/f566/27c0/9e6f4c79a6db/6adc00272907/03248576425-A7M/03248576425-A7M.jpg?ts=1742816644947&w=644&f=auto' alt='img' />
            <div className="flex-1 flex w-full">
                <div className="flex flex-1 flex-col space-y-2">
                    <span className='font-medium text-[15px]'>CANVAS WEAVE COTTON</span>
                    <span className='text-xs text-black/50'>Short sleeve sweatshirt with a round neck.</span>
                    <div className="flex gap-2 items-center text-sm font-medium">
                        <span>QTY:</span>
                        <span>2</span>
                    </div>
                    <div className="flex gap-2 items-center text-sm font-medium">
                        <span>Color:</span>
                        <span>Blue</span>
                    </div>
                    <div className="flex gap-2 items-center text-sm font-medium">
                        <span>Size:</span>
                        <span>Xl</span>
                    </div>
                </div>
                <span className='font-normal text-sm'>2000EGP</span>
            </div>
        </div>
    )
}

export default Item