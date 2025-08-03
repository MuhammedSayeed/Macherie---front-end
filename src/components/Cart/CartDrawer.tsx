"use client"
import Drawer from '../ui/drawer/Drawer'
import CartTotalPrice from './CartTotalPrice'
import CartItems from './CartItems'
import useCartDrawer from '@/hooks/useCartDrawer'
import DrawerHeader from '../ui/drawer/Header'

const CartDrawer = () => {
    const { isOpen, handleOnClose } = useCartDrawer();
    return (
        <Drawer isOpen={isOpen} onClose={handleOnClose} >
            <div className="w-full h-full grid grid-rows-[auto_1fr_auto]">
                <DrawerHeader onClose={handleOnClose} header='Shopping basket' />
                <CartItems />
                <CartTotalPrice />
            </div>
        </Drawer>
    )
}

export default CartDrawer

