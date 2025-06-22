"use client"

import { useSearchStore } from "@/lib/store/useSearchStore";

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