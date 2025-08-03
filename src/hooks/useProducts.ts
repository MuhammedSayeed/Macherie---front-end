"use client"
import { IProduct } from "@/interfaces/products";
import useInfinteProducts from "./useInfinteProducts";
import useObserver from "./useObserver";

interface IProps {
    category: string;
    style: string;
    initialProducts: IProduct[];
    hasNextPage: boolean;
}

const useProducts = ({ category, hasNextPage, initialProducts, style }: IProps) => {
    const { data, queryHasNextPage, fetchNextPage, isFetchingNextPage, refetch , isFetching } = useInfinteProducts({ category, style, initialProducts, hasNextPage });
    const { lastItemRef } = useObserver({ queryHasNextPage, isFetchingNextPage, fetchNextPage })


    return {
        data,
        lastItemRef,
        refetch,
        isFetching
    }
}

export default useProducts