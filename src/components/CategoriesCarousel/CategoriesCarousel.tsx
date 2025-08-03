import { carousel_bg, frameHeader } from "@/constants/images"
import Image from "next/image"
import CategoryCarouselSkeleton from "@/skeleton/CategoryCarouselItem"
import CategoryCarouselItem from "./CategoryCarouselItem"
import { Carousel, CarouselContent } from "../ui/carousel"
import { ICategoriesCarousel } from "@/interfaces/CategoryCarousel"

const getCategories = async () => {
    const res = await fetch("http://localhost:3001/api/v1/categories/clothing", {
      cache: "no-store",
    });
    const data = await res.json();
    return data.results || [];
  };

export default async function CategoriesCarousel(){
    const categories = await getCategories();

    // Renders
    const renderCarouselSkeleton = Array.from({ length: 4 }).map((_, idx) => <CategoryCarouselSkeleton key={idx} />)
    const renderCarouselItmes = categories?.map((item: ICategoriesCarousel) => (
        <CategoryCarouselItem key={item._id} item={item} />
    ))
    const renderCarousel = (isMobile: boolean) => (
        <div className={isMobile ? "block md:hidden" : "hidden md:block"}>
            <Carousel className={isMobile ? "w-full" : "w-full max-w-7xl mx-auto"}>
                <CarouselContent className={isMobile ? "-ml-2" : "-ml-2 md:-ml-4"}>
                    {false ? renderCarouselSkeleton : renderCarouselItmes}
                </CarouselContent>
            </Carousel>
        </div>
    )

    return (
        <div style={{ backgroundImage: `url(${carousel_bg})` }} className="w-full py-12 px-4 bg-center bg-cover">
            <div className=" flex justify-center mb-8">
                <Image src={frameHeader} height={350} width={350} alt='frame' />
            </div>
            {renderCarousel(false)} {/* Desktop */}
            {renderCarousel(true)}  {/* Mobile */}
        </div>
    )
}
