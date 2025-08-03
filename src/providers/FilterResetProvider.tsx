"use client"

import { useFiltersStore } from "@/lib/store/filtersStore"
import { useEffect } from "react"

interface IProps {
    children: React.ReactNode
    category: string
    style: string
}
const FilterResetProvider = ({ category, children, style }: IProps) => {
    const { reset } = useFiltersStore();
    useEffect(() => {
        reset();
    }, [category, style, reset])
    
    return (
        <>{children}</>
    )
}

export default FilterResetProvider