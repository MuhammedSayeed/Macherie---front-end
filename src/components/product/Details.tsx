"use client"
import ProductColors from './Colors'
import ProductActions from './Actions'
import { IProduct } from '@/interfaces/products'
import ProductSizes from './Sizes'
import ProductDescription from './Description'
import MeasurementsDrawer from './measurements/MeasurementsDrawer'
import { useState } from 'react'
import { CartItem } from '@/lib/store/cartStore'

interface IProps {
    details: IProduct
}


const ProductDetails = ({ details }: IProps) => {
    const [selectedSize, setSelectedSize] = useState<string | null>(null)
    const [productToCart, setProductToCart] = useState<CartItem>({
        productId: details.productId,
        variantId: details._id,
        color: details.color,
        image: details.images[0],
        price: details.price,
        quantity: 1,
        size: null,
        title: details.title
    });



    return (
        <div className="lg:col-span-7 space-y-6 ">
            <div className="space-y-1">
                <h1 className="lg:text-xl font-medium">{details.title}</h1>
                <span className="text-lg text-black/80 font-semibold">{details.price} EGP</span>
            </div>
            <ProductColors id={details.productId} colors={details.colors} />
            <ProductSizes selectedSize={selectedSize} setProductToCart={setProductToCart} setSelectedSize={setSelectedSize} sizes={details.sizes} />
            <ProductActions selectedSize={selectedSize} productToCart={productToCart} />
            <ProductDescription description={details.description} />
            <MeasurementsDrawer type={details.type} measurements={details.measurements} />
        </div>
    )
}

export default ProductDetails