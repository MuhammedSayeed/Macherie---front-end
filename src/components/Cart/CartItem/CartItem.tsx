import React from 'react'
import useCartItem from '@/hooks/useCartItem'
import CartImage from './CartImage'
import CartItemInfo from './CartItemInfo'
import QuantityEditor from './QuantityEditor'
import ActionButtons from './ActionButtons'
import useHybridCart from '@/hooks/useHybridCart'
import { CartItem } from '@/lib/store/cartStore'



interface ICartItem {
    item: CartItem
}

const CartItem = ({ item }: ICartItem) => {
    const cartItemProps = useCartItem({ item });
    const { removeFromCart } = useHybridCart();

    return (
        <div className='flex gap-3'>
            <CartImage image={item.image} alt={item.title} />
            <div className="w-full flex flex-col justify-between">
                <CartItemInfo editMode={cartItemProps.editMode} item={item} />
                <QuantityEditor
                    editModel={cartItemProps.editMode}
                    canDecrease={cartItemProps.canDecrease}
                    canIncrease={cartItemProps.canIncrease}
                    onDecrease={cartItemProps.decreaseQuantity}
                    onIncrease={cartItemProps.increaseQuantity}
                    quantity={cartItemProps.quantity} />
                <ActionButtons
                    editMode={cartItemProps.editMode}
                    isQuantityChanged={cartItemProps.isQuantityChanged}
                    onCancel={cartItemProps.handleCancelEdit}
                    onConfirm={cartItemProps.handleConfirmEdit}
                    onRemove={removeFromCart}
                    onToggleEdit={cartItemProps.toggleEditMode}
                    item={item}
                />
            </div>
        </div>
    )
}

export default CartItem