import { Button } from '@/components/ui/button'
import { OrderPriceOptions } from '@/constants/Filter'
import { useFiltersStore } from '@/lib/store/filtersStore';
import clsx from 'clsx';

const OrderByPrice = () => {
    const { sort, setSort } = useFiltersStore();

    const handleOnClick = (sort: string) => {
        setSort(sort);
    }


    const renderOptions = OrderPriceOptions.map(({ id, label, value }) => {
        const isSelected = sort === value;
        return (
            <Button onClick={() => handleOnClick(value)} size={"sm"} className={clsx('bg-gray-200/80 text-black hover:bg-gray-300/70 cursor-pointer font-normal', isSelected && 'bg-black text-white hover:bg-black/90')} key={id}>{label}</Button>
        )
    })
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

export default OrderByPrice