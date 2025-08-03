import { IColor } from '@/interfaces/products'
import React from 'react'


interface IProps {
    colors : IColor[]
}
const ProductColors = ({colors} : IProps) => {

    const renderColors = colors.map((c)=>(
        <div style={{backgroundColor : `${c.colorHexCode}`}} key={c.colorHexCode} className={`size-3  rounded-full border-2 border-white shadow-[0_0_0_1px_gray]`}></div>
    ))
    return (
        <div className='flex gap-2 items-center'>
            {renderColors}
        </div>
    )
}

export default ProductColors