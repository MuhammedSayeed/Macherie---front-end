import clsx from "clsx";


interface IProps {
    isCompactView: boolean;
}
const ProductListSkeleton = ({ isCompactView }: IProps) => {



    return (
        <div className={clsx("mx-auto grid min-h-[500px] gap-6 w-full mt-3", isCompactView ? "grid-cols-2 max-w-4xl" : "w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5")}>
            {
                Array.from({ length: 20 }).map((_, index) => {
                    return (
                        <div key={index} className="animate-pulse">
                            <div className="relative bg-gray-300  aspect-[2/3] cursor-pointer" />
                            <div className="flex justify-between items-center mt-2">
                                <div className='flex gap-2 items-center'>
                                    <div className={`size-3 bg-gray-300 rounded-full border-2 border-white shadow-[0_0_0_1px_gray]`} />
                                    <div className={`size-3 bg-gray-300 rounded-full border-2 border-white shadow-[0_0_0_1px_gray]`} />
                                    <div className={`size-3 bg-gray-300 rounded-full border-2 border-white shadow-[0_0_0_1px_gray]`} />
                                </div>
                            </div>
                            <div className="mt-3 w-full space-y-2">
                                <div className="w-[140px] h-[18px] bg-gray-300"></div>
                                <div className="w-[60px] h-[20px] bg-gray-300"></div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductListSkeleton

// Array.from({ length: 12 }).map((_, index) => {
//     return (
//     )
// }