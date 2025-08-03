import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'
import Item from './Item'
import clsx from 'clsx'
import { Separator } from '@/components/ui/separator'

const ItemsForMobile = () => {
    const [expanded, setExpanded] = useState(false)


    const handleOnExpand = () => {
        setExpanded((prev) => !prev);
    }
    return (
        <div className='border p-4 bg-gray-100 rounded-md'>
            <div onClick={handleOnExpand} className="flex justify-between  cursor-pointer">
                <span className='font-medium'>Order Summary</span>
                <div className="flex items-center gap-1">
                    <span className='font-medium'>2 Items</span>
                    {expanded ? <ChevronUp /> : <ChevronDown />}
                </div>
            </div>
            <div className={clsx("bg-gray-100 transition-all ", expanded ? "visible opacity-100 max-h-fit mt-4" : "invisible opacity-0 max-h-0")}>
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
        </div>
    )
}

export default ItemsForMobile