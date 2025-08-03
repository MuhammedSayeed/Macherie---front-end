import React from 'react'
import Item from './Item'
import { Separator } from '@/components/ui/separator'

const ItemsForLargeScreen = () => {
    return (
        <div className='border rounded-md p-4 h-fit bg-gray-50'>
            <div className="flex justify-between mb-5">
                <span className='font-medium'>Order Summary</span>
                <span className='font-medium'>2 Items</span>
            </div>
            <Separator className='mb-5' />
            <div className="flex flex-col space-y-2">
                <Item />
                <Item />
            </div>
            <Separator className='mb-5' />
            <div className="flex justify-between items-center font-medium">
                <span>Subtotal</span>
                <span>2000EGP</span>
            </div>
        </div>
    )
}

export default ItemsForLargeScreen