import React from 'react'
import { Button } from '../ui/button'
import { X } from 'lucide-react'
import useCartDrawer from '@/hooks/useCartDrawer'

const CartHeader = () => {
    const { handleOnClose } = useCartDrawer();
    return (
        <div className="w-full grid grid-cols-[1fr_auto] items-center border-b-[6px] border-[#E3E3E3]">
            <span className='text-center font-sans font-medium text-[18px] py-5 border-r-2 border-[#E3E3E3]'>Shopping basket</span>
            <Button onClick={handleOnClose} variant={"outline"} className='border-none shadow-none hover:bg-transparent !px-5 cursor-pointer'>
                <X className="size-6" />
            </Button>
        </div>
    )
}

export default CartHeader

