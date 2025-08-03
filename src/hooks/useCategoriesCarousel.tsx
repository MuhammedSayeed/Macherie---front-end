"use client"

import { CategoriesCarousel } from "@/interfaces/CategoryCarousel"
import useCustomQuery from "./useCustomQuery"
import CategoryCarouselItem from "@/components/CategoriesCarousel/CategoryCarouselItem"
import { Carousel, CarouselContent } from "@/components/ui/carousel"
import CategoryCarouselSkeleton from "@/skeleton/CategoryCarouselItem"

const useCategoriesCarousel = () => {

    const { data , isLoading } = useCustomQuery({
        queryKey: ["categories"],
        endPoint: "/categories",
    }) 

    const renderCarouselSkeleton = Array.from({ length: 4 }).map((_, idx) => <CategoryCarouselSkeleton key={idx} />)

    const renderCarouselItmes = data?.categories?.map((item: CategoriesCarousel) => (
        <CategoryCarouselItem key={item._id} item={item} />
    ))

    const renderCarousel = (isMobile: boolean) => (
        <div className={isMobile ? "block md:hidden" : "hidden md:block"}>
            <Carousel className={isMobile ? "w-full" : "w-full max-w-7xl mx-auto"}>
                <CarouselContent className={isMobile ? "-ml-2" : "-ml-2 md:-ml-4"}>
                    {isLoading ? renderCarouselSkeleton : renderCarouselItmes}
                </CarouselContent>
            </Carousel>
        </div>
    )

    return { renderCarousel }
}

export default useCategoriesCarousel