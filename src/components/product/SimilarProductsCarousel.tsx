import { IProduct } from "@/interfaces/products"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import ProductCard from "../products/ProductCard";

interface IProps {
    products: IProduct[]
}
const SimilarProductsCarousel = ({ products }: IProps) => {

    return (
        <Carousel opts={{ align: "start" }} className="pt-4">
            <CarouselContent className="px-1">
                {products?.map((product) => (
                    <CarouselItem key={product._id} className="basis-[250px]">
                        <ProductCard product={product} />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}

export default SimilarProductsCarousel