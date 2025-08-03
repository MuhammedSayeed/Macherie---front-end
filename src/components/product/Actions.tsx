"use client"
import { Button } from '../ui/button'
import useCartDrawer from '@/hooks/useCartDrawer'
import useHybridCart from '@/hooks/useHybridCart'
import { CartItem } from '@/lib/store/cartStore'


interface IProps {
  productToCart: CartItem,
  selectedSize: string | null,
}



const ProductActions = ({ productToCart, selectedSize }: IProps) => {
  const { addToCart } = useHybridCart();
  const { handleOnOpen } = useCartDrawer();



  const handleAddToCart = async () => {
    addToCart(productToCart);
    handleOnOpen();
  }


  return (
    <Button disabled={selectedSize === null} onClick={handleAddToCart} size={"lg"} className='rounded-full min-w-full !py-6 lg:w-[400px] lg:min-w-auto bg-green-500 hover:bg-green-600 cursor-pointer'>
      Add to Cart
    </Button>
  )
}

export default ProductActions