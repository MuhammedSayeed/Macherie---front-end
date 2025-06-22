import React from 'react'
import { Button } from '../ui/button'
import { Pencil, Trash } from 'lucide-react'

const CartItem = () => {
    return (
        <div className='flex gap-3 font-sans '>
            <div className="w-[100px] h-[150px] min-w-[100px] min-h-[150px] bg-gray-300"></div>
            <div className="w-full flex flex-col justify-between">
                <div className="space-y-1 text-[14px]">
                    <p className='tracking-wider'>One Piece short sleeve sweatshirt</p>
                    <span className='font-medium'>600 Egp</span>
                    <div className="flex gap-4 opacity-55">
                        <span>1 item</span>
                        <span>|</span>
                        <span>XS</span>
                        <span>|</span>
                        <span>BLACK</span>
                    </div>
                </div>
                <div className="flex justify-end gap-3">
                    <Button size={"icon"} variant={"ghost"} className='cursor-pointer rounded-full p-5 bg-gray-200/60 hover:bg-gray-200'><Pencil className='size-5' /></Button>
                    <Button size={"icon"} variant={"ghost"} className='cursor-pointer rounded-full p-5 bg-gray-200/60 hover:bg-gray-200'><Trash className='size-5' /></Button>
                </div>
            </div>
        </div>
    )
}

export default CartItem