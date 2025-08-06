import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'
import Item from './Item'
import clsx from 'clsx'
import { Separator } from '@/components/ui/separator'
import useHybridCart from '@/hooks/useHybridCart'

const ItemsForMobile = () => {
    const [expanded, setExpanded] = useState(false);
    const { items, totalPrice } = useHybridCart();

    const handleOnExpand = () => {
        if (!expanded && items.length === 0) return;
        setExpanded((prev) => !prev);
    }

    const renderItems = items.map((i, idx) => (
        <Item item={i} key={idx} />
    ))

    return (
        <div className='border p-4 bg-gray-100 rounded-md'>
            <div onClick={handleOnExpand} className="flex justify-between  cursor-pointer">
                <span className='font-medium'>Order Summary</span>
                <div className="flex items-center gap-1">
                    <span className='font-medium'>{items.length} Items</span>
                    {expanded ? <ChevronUp /> : <ChevronDown />}
                </div>
            </div>
            <div className={clsx("bg-gray-100 transition-all ", expanded ? "visible opacity-100 max-h-fit mt-4" : "invisible opacity-0 max-h-0")}>
                <Separator className='mb-5' />
                <div className="flex flex-col space-y-2 relative max-h-[340px] overflow-y-auto hide-scrollbar">
                    {renderItems}
                </div>
                <Separator className='mb-5' />
                <div className="flex justify-between items-center font-medium">
                    <span>Subtotal</span>
                    <span>{totalPrice} EGP</span>
                </div>
            </div>
        </div>
    )
}

export default ItemsForMobile