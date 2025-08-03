import ProductColors from './ProductColors'
import Image from 'next/image'
import { IProduct } from '@/interfaces/products'
import { useState } from 'react'
import Link from 'next/link'


interface Props {
    product: IProduct
}
const ProductCard = ({ product }: Props) => {
    const [hovered, setHovered] = useState(false);

    return (
        <Link href={`/product/${product.productId}/${product.color.colorIdentifier}`}>
            <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="relative rounded-md overflow-hidden aspect-[2/3] cursor-pointer">
                <Image src={hovered ? product.images[1] : product.images[0]} alt={product.title} fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="mt-2">
                <ProductColors colors={product.colors} />
            </div>
            <div className="text-black/80 mt-1 text-xs">
                <span className='font-medium'>{product.title}</span>
                <div className="font-semibold">{product.price} Egp</div>
            </div>
        </Link>
    )
}

export default ProductCard