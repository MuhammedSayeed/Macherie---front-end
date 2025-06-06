import { Carousel, CarouselContent } from "../ui/carousel"
import CategoryCarouselItem from "./CategoryCarouselItem"
import { categoriesCarouselItmes } from "@/constants/categoriesCarousel"

const CategoriesCarousel = () => {
    const renderCarouselItmes = categoriesCarouselItmes.map((item) => (
        <CategoryCarouselItem key={item.label} item={item} />
    ))

    return (
        <div className="w-full bg-black py-8 px-4">
            <div className="text-center mb-8">
                <span className="text-white text-2xl md:text-3xl font-light">Explore Our Products</span>
            </div>
            {/* Desktop version */}
            <div className="hidden md:block">
                <Carousel className="w-full max-w-7xl mx-auto">
                    <CarouselContent className="-ml-2 md:-ml-4">{renderCarouselItmes}</CarouselContent>
                </Carousel>
            </div>
            {/* Mobile version */}
            <div className="block md:hidden">
                <Carousel className="w-full">
                    <CarouselContent className="-ml-2">{renderCarouselItmes}</CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}

export default CategoriesCarousel