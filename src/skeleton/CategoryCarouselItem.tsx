import React from 'react'

const CategoryCarouselSkeleton = () => {
    return (
        <div className="pl-2 min-w-[345px] rounded-lg md:pl-4 basis-[280px] sm:basis-[320px] md:basis-1/2 lg:basis-1/3 xl:basis-1/4 overflow-hidden">
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg bg-black/10 animate-pulse"/>
        </div>
    )
}

export default CategoryCarouselSkeleton 