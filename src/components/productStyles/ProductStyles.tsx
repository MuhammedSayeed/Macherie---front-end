"use client"

import useUtils from "@/hooks/useUtils"
import clsx from "clsx"
import useCustomQuery from "@/hooks/useCustomQuery"
import CategoryStyleSkeleton from "@/skeleton/CategoryStyleSkeleton"
import Link from "next/link"
import { useMemo } from "react"
import { IProductStyles } from "@/interfaces/productStyles"



const ProductStyles = () => {
  const { params } = useUtils()

  const { data, isLoading } = useCustomQuery({
    queryKey: ["styles", `${params?.category}`],
    endPoint: `/styles/${params?.category}`,
    enabled: !!params?.category,
  })


  // Memoize skeleton array to prevent recreation on every render
  const renderSkeleton = useMemo(() => Array.from({ length: 5 }).map((_, idx) => <CategoryStyleSkeleton key={idx} />), [])

  // Memoize styles data to prevent unnecessary re-renders
  const stylesData = useMemo(() => data?.results || [], [data?.results])

  // Memoize the style items rendering
  const styleItems = useMemo(() => {
    if (!stylesData.length) return null

    return stylesData.map((s: IProductStyles) => {
      const styleID = typeof params?.style === 'string' && params.style.split('-')[1];
      const isActive = styleID === s._id || params?.style === s.value

      const href = `/products/${params?.category}/${s.value !== "all" ? s.value + "-" + s._id : "all"}`
      return (
        <div key={s._id}>
          <Link href={href} className={clsx("transition-colors  px-4 py-2 rounded-md w-full h-full block text-center", isActive ? "bg-black text-white hover:bg-black/80" : "bg-gray-100 hover:bg-gray-200", )}>
            {s.name}
          </Link>
        </div>
      )
    })
  }, [stylesData, params?.style, params?.category])

  // Memoize the render logic
  const renderContent = useMemo(() => {
    if (isLoading) return renderSkeleton
    if (stylesData.length > 0) return styleItems
    return null;
  }, [isLoading, renderSkeleton, styleItems, stylesData.length, params?.category])


  return <div className="flex justify-center flex-wrap gap-3 md:gap-2">{renderContent}</div>
}

export default ProductStyles
