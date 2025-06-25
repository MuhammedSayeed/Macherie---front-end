import { Button } from '@/components/ui/button'
import { ByOrderOptions } from '@/constants/Filter'
import React from 'react'

const OrderByFilter = () => {


    const renderOptions = ByOrderOptions.map(({ id, label }) => (
        <Button size={"sm"} className='bg-gray-200/80 text-black hover:bg-gray-300/70 cursor-pointer font-normal' key={id}>{label}</Button>
    ))
    return (
        <div className='border-b-[6px] border-[#E3E3E3]'>
            <div className="px-4 py-6">
                <span className='text-[1.4rem] font-medium'>Order By</span>
                <div className="grid grid-cols-2 gap-2 mt-2">
                    {renderOptions}
                </div>
            </div>
        </div>
    )
}

export default OrderByFilter