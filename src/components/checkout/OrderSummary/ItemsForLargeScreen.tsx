
import useHybridCart from '@/hooks/useHybridCart'
import Item from './Item'
import { Separator } from '@/components/ui/separator'

const ItemsForLargeScreen = () => {
    const { items, totalPrice } = useHybridCart();

    const renderItems = items.map((i, idx) => (
        <Item key={idx} item={i} />
    ))

    return (
        <div className='border rounded-md p-4 h-fit bg-gray-50 grid grid-rows-[auto_auto_1fr_auto_auto]'>
            <div className="flex justify-between mb-5">
                <span className='font-medium'>Order Summary</span>
                <span className='font-medium'>{items.length} Items</span>
            </div>
            <Separator className='mb-5' />
            <div className="flex flex-col space-y-2 relative max-h-[340px] overflow-y-auto hide-scrollbar">
                {renderItems}
            </div>
            <Separator className='mb-5' />
            <div className="flex justify-between items-center font-medium">
                <span>Subtotal</span>
                <span>{totalPrice} EGP</span>
            </div>
        </div>
    )
}

export default ItemsForLargeScreen