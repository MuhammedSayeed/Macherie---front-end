"use client"

import { CartItem } from "@/lib/store/cartStore"
import { memo } from "react"


interface Iprops {
    editMode: boolean
    item: CartItem 
}

const CartItemInfo = ({ item, editMode }: Iprops) => {
    return (
        <div className="space-y-1 text-[14px]">
            <p className='tracking-wider'>{item.title}</p>
            <span className='font-medium'>{item.price} Egp</span>
            {!editMode && (
                <div className="flex gap-4 opacity-55">
                    <span>{item.quantity} item</span>
                    <span>|</span>
                    <span className='uppercase'>{item.size}</span>
                    <span>|</span>
                    <span>{item.color.colorIdentifier}</span>
                </div>
            )}
        </div>
    )
}

export default memo(CartItemInfo)