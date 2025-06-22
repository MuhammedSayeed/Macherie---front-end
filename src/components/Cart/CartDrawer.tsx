"use client"
import Drawer from '../ui/drawer/Drawer'
import CartHeader from './CartHeader'
import CartTotalPrice from './CartTotalPrice'
import CartItems from './CartItems'
import useCartDrawer from '@/hooks/useCartDrawer'

const CartDrawer = () => {
    const { isOpen, handleOnClose } = useCartDrawer();
    return (
        <Drawer isOpen={isOpen} onClose={handleOnClose} >
            <div className="w-full h-full grid grid-rows-[auto_1fr_auto]">
                <CartHeader />
                <CartItems />
                <CartTotalPrice />
            </div>
        </Drawer>
    )
}

export default CartDrawer

