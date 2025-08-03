import Image from 'next/image'
import React, { memo } from 'react'

interface IProps {
    image: string,
    alt: string
}

const CartImage = ({ image, alt }: IProps) => {
    return (
        <div className="w-[100px] h-[150px] min-w-[100px] min-h-[150px] relative">
            <Image src={image || "/placeholder.svg"} alt={alt} fill className="object-cover rounded-md" />
        </div>
    )
}

export default memo(CartImage)