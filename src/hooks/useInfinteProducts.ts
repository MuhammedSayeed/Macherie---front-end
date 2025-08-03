import { IProduct } from "@/interfaces/products";
import { useFiltersStore } from "@/lib/store/filtersStore";
import { useInfiniteQuery } from "@tanstack/react-query";

interface IProps {
    category: string
    style: string
    initialProducts: IProduct[],
    hasNextPage: boolean
}

const useInfinteProducts = ({ category, hasNextPage, initialProducts, style }: IProps) => {
    const { getQueryString } = useFiltersStore()
    const filterQuery = getQueryString()

    const { data, fetchNextPage, hasNextPage: queryHasNextPage, isFetchingNextPage, refetch , isFetching } = useInfiniteQuery({
        queryKey: ["products", category, style, filterQuery],
        initialPageParam: filterQuery ? 1 : 2,
        initialData: filterQuery ? undefined : {
            pages: [
                {
                    results: initialProducts,
                    metaData: { hasNextPage }
                }
            ],
            pageParams: [1]
        },
        queryFn: async ({ pageParam = 1 }) => {
            const baseUrl = `http://localhost:3001/api/v1/products/${category}/${style}`
            const url = filterQuery ? `${baseUrl}?page=${pageParam}&${filterQuery}` : `${baseUrl}?page=${pageParam}`
            const res = await fetch(url)
            const data = await res.json()
            return data;
        },
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.metaData?.hasNextPage) {
                return pages.length + 1;
            }
            return undefined;
        }
    })

    return { data, fetchNextPage, queryHasNextPage, isFetchingNextPage , refetch , isFetching }
}

export default useInfinteProducts