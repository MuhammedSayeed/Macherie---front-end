import React from 'react'
import CartItem from './CartItem/CartItem';
import useHybridCart from '@/hooks/useHybridCart';

const CartItems = () => {
  const { items, isEmpty } = useHybridCart()

  const renderItems = () => {
    if (isEmpty || !items) return (
      <div className='flex flex-col items-center h-full  justify-center gap-3'>
        <p className='text-gray-400'>Your shopping basket is empty</p>
      </div>
    )
    return items?.map((i) => <CartItem item={i} key={`${i.variantId}-${i.size}`} />)
  }

  return (
    <div className='relative w-full h-full max-h-full'>
      <div className="absolute inset-0 overflow-y-auto p-4 space-y-6">
        {renderItems()}
      </div>
    </div>
  )
}

export default CartItems