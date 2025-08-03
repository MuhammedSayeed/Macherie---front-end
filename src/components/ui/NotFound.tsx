import { NOT_FOUND } from '@/constants/images'
import Image from 'next/image'
import React from 'react'

const NotFound = () => {
    return (
        <div className="min-h-[500px] w-full flex-col items-center pt-20 justify-center text-center font-sans">
            <div className="flex justify-center">
                <Image src={NOT_FOUND} alt="not_found" width={320} height={320} />
            </div>
            <span className="text-2xl">Oops!</span>
            <p className="text-black/60">No items have been found that match the selected criteria. Try again!</p>
        </div>
    )
}

export default NotFound