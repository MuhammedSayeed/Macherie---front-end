import { CarouselItem } from "../ui/carousel"
import Image from "next/image"
import type { CategoriesCarousel } from "@/interfaces/CategoryCarousel"
import OverlayLayer from "./OverlayLayer"

interface IProps {
  item: CategoriesCarousel
}

const CategoryCarouselItem = ({ item }: IProps) => {
  return (
    <CarouselItem className="pl-2 rounded-lg md:pl-4 basis-[280px] hover:basis-[370px] sm:basis-[320px] md:basis-1/2 lg:basis-1/3 xl:basis-1/4 overflow-hidden transition-all duration-500 ">
      <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg group">
        <OverlayLayer label={item.label} path={item.path} />
        <Image alt={item.label} fill className="object-cover rounded-lg transition-transform duration-300" src={item.image || "/placeholder.svg"} />
      </div>
    </CarouselItem>
  )
}

export default CategoryCarouselItem
