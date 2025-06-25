"use client"
import { useSearchStore } from "@/lib/store/useSearchStore"
import { useEffect } from "react";

const Search = () => {
    const { isOpen } = useSearchStore();


    useEffect(()=>{
        if (isOpen){
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "auto";
        }
    },[isOpen])

    
    return (
        <div className={`fixed inset-0 z-[9] bg-white transform transition-discrete duration-400 origin-top ${isOpen ? "h-full" : "h-0"}`}>
        </div>
    )
}

export default Search