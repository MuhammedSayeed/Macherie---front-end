"use client"
import { IProduct } from "@/interfaces/products";
import useProducts from "@/hooks/useProducts";
import { useEffect } from "react"
import NotFound from "../ui/NotFound";
import ProductList from "./ProductList";
import { useFiltersStore } from "@/lib/store/filtersStore";
import { useCompactStore } from "@/lib/store/compactStore";

interface IProps {
    initialProducts: IProduct[],
    hasNextPage: boolean,
    category: string,
    style: string
}

const Products = ({ initialProducts, hasNextPage, category, style }: IProps) => {
    const { isCompactView } = useCompactStore();
    const { data, lastItemRef, refetch, isFetching } = useProducts({ category, hasNextPage, initialProducts, style })
    const { shouldRefetch, setShouldRefetch } = useFiltersStore();

    useEffect(() => {
        if (shouldRefetch) {
            refetch()
            setShouldRefetch(false)
        }
    }, [shouldRefetch, refetch, setShouldRefetch])

    const allProducts = data?.pages.flatMap((page) => page.results) || [];
    const hasProducts = allProducts.length > 0
    if (!hasProducts && !isFetching) return <NotFound />

    return <ProductList isCompactView={isCompactView} Products={allProducts} lastItemRef={lastItemRef} />

}

export default Products
