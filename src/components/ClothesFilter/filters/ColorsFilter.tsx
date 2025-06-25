import { colorsOptions } from '@/constants/Filter'
import React from 'react'

const ColorsFilter = () => {

    const renderOptions = colorsOptions.map(({ id, label, colorHexCode }) => (
        <div key={id} className="flex flex-col justify-center space-y-1 text-center">
            <span style={{ backgroundColor: colorHexCode }} className="size-14 mx-auto rounded-full border-2 border-white shadow-[0_0_0_1px_gray] cursor-pointer" key={id}></span>
            <span className='text-xs text-black/60'>{label}</span>
        </div>
    ))

    return (
        <div className='border-b-[6px] border-[#E3E3E3]'>
            <div className="px-4 py-6">
                <span className='text-[1.4rem] font-medium'>Colors</span>
                <div className="grid grid-cols-5 gap-4 mt-2">
                    {renderOptions}
                </div>
            </div>
        </div>
    )
}

export default ColorsFilter