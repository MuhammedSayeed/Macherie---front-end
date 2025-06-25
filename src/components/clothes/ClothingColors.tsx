import React from 'react'

const ClothingColors = () => {
    return (
        <div className='flex gap-2 items-center'>
            <div className="size-3 bg-red-500 rounded-full border-2 border-white shadow-[0_0_0_1px_gray] cursor-pointer"></div>
            <div className="size-3 bg-blue-500 rounded-full border-2 border-white shadow-[0_0_0_1px_gray] cursor-pointer"></div>
            <div className="size-3 bg-green-500 rounded-full border-2 border-white shadow-[0_0_0_1px_gray] cursor-pointer"></div>
        </div>
    )
}

export default ClothingColors