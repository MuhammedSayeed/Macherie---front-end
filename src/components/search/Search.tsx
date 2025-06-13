"use client"
import { useSearchStore } from "@/lib/store/useSearchStore"

const Search = () => {
    const { isOpen } = useSearchStore();
    return (
        <div className={`fixed inset-0 z-[9] bg-white transform transition-discrete duration-400 origin-top ${isOpen ? "h-full" : "h-0"}`}>

        </div>
    )
}

export default Search