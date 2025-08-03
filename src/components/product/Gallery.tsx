"use client"
import clsx from "clsx"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

interface IProps {
    images: string[]
    alt: string
}

const ProductGallery = ({ images, alt }: IProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isHovering, setIsHovering] = useState(false)
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)
    const mainImageRef = useRef<HTMLDivElement>(null)

    const handleSelectImage = (index: number) => {
        setCurrentImageIndex(index)
    }

    const handleScroll = (e: WheelEvent) => {
        if (!isHovering) return
        e.preventDefault()

        // Clear existing timeout
        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current)
        }

        // Debounce scroll events
        scrollTimeoutRef.current = setTimeout(() => {
            if (e.deltaY > 0) {
                // Scroll down - next image
                setCurrentImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : prev))
            } else {
                // Scroll up - previous image
                setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : prev))
            }
        }, 50)
    }

    const progressPercentage = ((currentImageIndex + 1) / images.length) * 100

    useEffect(() => {
        const mainImgArea = mainImageRef.current
        if (!mainImageRef) return

        mainImgArea?.addEventListener("wheel", handleScroll, { passive: false })

        return () => {
            mainImgArea?.removeEventListener("wheel", handleScroll)
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current)
            }
        }
    }, [images.length, isHovering])

    return (
        <div className="flex flex-col lg:flex-row lg:col-span-5 w-full " style={{ gap: "8px" }}>
            {/* Thumbnail images */}
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-3 flex-shrink-0 ">
                {images.map((image, index) => {
                    const isActive = currentImageIndex === index
                    return (
                        <div onClick={() => handleSelectImage(index)} key={index} className={clsx("flex-shrink-0 cursor-pointer w-fit border-2 rounded-md overflow-hidden transition-all duration-300 hover:border-green-200", isActive ? "border-green-200" : "border-black-10",)}>
                            <Image src={image || "/placeholder.svg"} width={55} height={90} className="object-cover rounded" alt={alt} />
                        </div>
                    )
                })}
            </div>
            {/* Main image */}
            <div className="flex-1 lg:flex-1 min-w-0 w-full lg:w-auto lg:ml-2" ref={mainImageRef} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} >
                <div className="relative bg-gray-200 rounded-lg aspect-[4/6] overflow-hidden w-full h-full">
                    <Image src={images[currentImageIndex] || "/placeholder.svg"} alt={alt} fill className="object-cover" priority />
                </div>
            </div>
            {/* Progress bar */}
            <div className="w-0.5 bg-gray-200 relative flex-shrink-0 lg:ml-3">
                <div className="absolute top-0 w-full bg-black/40 rounded-full transition-all duration-300 ease-out" style={{ height: `${progressPercentage}%` }} />
            </div>
        </div>
    )
}

export default ProductGallery
