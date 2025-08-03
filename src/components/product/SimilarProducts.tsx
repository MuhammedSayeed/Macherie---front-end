"use client"

import useCustomQuery from "@/hooks/useCustomQuery"
import SimilarProductsCarousel from "./SimilarProductsCarousel"


interface IProps {
    category: string,
    style: string,
    _id: string
}

const SimilarProducts = ({ category, style, _id }: IProps) => {
    const { data } = useCustomQuery({
        endPoint: `http://localhost:3001/api/v1/products/${category}/${style}?exclude=${_id}`,
        queryKey: [category, style, _id],
        enabled: !!(category && style && _id)
    })


    return (
        <div className="mt-6 font-sans">
            <span className="border-b pb-2 block w-full font-medium text-lg">Similar Products</span>
            <SimilarProductsCarousel products={data?.results} />
        </div>
        
    )
}

export default SimilarProducts