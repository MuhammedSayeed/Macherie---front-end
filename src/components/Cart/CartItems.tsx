import React from 'react'
import CartItem from './CartItem'

const CartItems = () => {
  return (
    <div className='relative w-full h-full max-h-full '>
      <div className="absolute inset-0 overflow-y-auto p-4 space-y-6">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
  )
}

export default CartItems