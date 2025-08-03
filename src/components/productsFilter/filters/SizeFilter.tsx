import { Button } from '@/components/ui/button'
import { sizesOptions } from '@/constants/Filter'
import { useFiltersStore } from '@/lib/store/filtersStore'
import clsx from 'clsx'
import React from 'react'

const SizeFilter = () => {
    const { getQueryString , toggleSize, sizes } = useFiltersStore();

    console.log(getQueryString());

    const handleOnClick = (size: string) => {
        toggleSize(size);
    }


    const renderOptions = sizesOptions.map(({ id, label, value }) => {
        const isSelected = sizes.includes(value);
        return (
            <Button onClick={() => handleOnClick(value)} size={"sm"} className={clsx('bg-gray-200/80 text-black hover:bg-gray-300/70 cursor-pointer font-normal', isSelected && 'bg-black text-white hover:bg-black/90')} key={id}>{label}</Button>

        )
    })
    return (
        <div className='border-b-[6px] border-[#E3E3E3]'>
            <div className="px-4 py-6">
                <span className='text-[1.4rem] font-medium'>Size</span>
                <div className="grid grid-cols-5 gap-2 mt-2">
                    {renderOptions}
                </div>
            </div>
        </div>
    )
}

export default SizeFilter