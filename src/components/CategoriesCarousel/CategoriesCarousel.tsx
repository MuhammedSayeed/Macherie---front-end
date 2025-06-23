import { carousel_bg, frameHeader } from "@/constants/images"
import { Carousel, CarouselContent } from "../ui/carousel"
import CategoryCarouselItem from "./CategoryCarouselItem"
import { categoriesCarouselItmes } from "@/constants/categoriesCarousel"
import Image from "next/image"

const CategoriesCarousel = () => {
    const renderCarouselItmes = categoriesCarouselItmes.map((item) => (
        <CategoryCarouselItem key={item.label} item={item} />
    ))

    return (
        <div style={{ backgroundImage: `url(${carousel_bg})` }} className="w-full py-12 px-4 bg-center bg-cover">
            <div className=" flex justify-center mb-8">
                <Image src={frameHeader} height={350} width={350} alt='frame' />
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