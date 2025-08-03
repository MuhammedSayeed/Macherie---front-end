"use client"

import { useSearchStore } from "@/lib/store/searchStore";


const useSearchButton = () => {
    const { setSearchState } = useSearchStore();
    const handleSetSearchState = (state: boolean) => {
        setSearchState(state);
    }
    return {
        handleSetSearchState
    }
}

export default useSearchButton