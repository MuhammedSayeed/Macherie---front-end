"use client"
import { InfiniteData, InfiniteQueryObserverResult } from "@tanstack/react-query";
import { useCallback, useRef } from "react";

interface IProps {
    queryHasNextPage: boolean
    isFetchingNextPage: boolean
    fetchNextPage: () => Promise<InfiniteQueryObserverResult<InfiniteData<unknown>, Error>>;
}
const useObserver = ({ queryHasNextPage, isFetchingNextPage , fetchNextPage  }: IProps) => {
    const observer = useRef<IntersectionObserver | null>(null);

    const lastItemRef = useCallback((node: HTMLDivElement | null) => {
        if (!queryHasNextPage || isFetchingNextPage) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                fetchNextPage();
            }
        });

        if (node) observer.current.observe(node);
    }, [fetchNextPage, queryHasNextPage, isFetchingNextPage])
    return { lastItemRef }
}

export default useObserver