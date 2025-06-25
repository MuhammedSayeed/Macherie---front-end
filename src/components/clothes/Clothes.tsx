"use client"
import clsx from "clsx"
import ClothingCard from "./ClothingCard"
import { useCompactStore } from "@/lib/store/useCompactStore";


const Clothes = () => {
    const { isCompactView } = useCompactStore();


    return (
        <div className={clsx("mx-auto grid  gap-6 w-full mt-3", isCompactView ? "grid-cols-2 max-w-4xl" : "w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5")}>
            {Array(10).fill(0).map((_, i) => (
                <ClothingCard key={i} />
            ))}
        </div>
    )
}

export default Clothes
