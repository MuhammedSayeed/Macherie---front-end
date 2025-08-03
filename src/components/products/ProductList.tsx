import { IProduct } from "@/interfaces/products";
import ProductCard from "./ProductCard";
import clsx from "clsx";


interface IProps {
    Products: IProduct[];
    isCompactView: boolean;
    lastItemRef: (node: HTMLDivElement | null) => void;
}
const ProductList = ({ Products, isCompactView, lastItemRef }: IProps) => {
    return (
        <div className={clsx("mx-auto grid min-h-[500px] gap-6 w-full mt-3", isCompactView ? "grid-cols-2 max-w-4xl" : "w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5")}>
            {Products.map((p, index) => {
                const isLast = index === Products.length - 1;
                return (
                    <div key={p._id} ref={isLast ? lastItemRef : undefined}>
                        <ProductCard product={p} />
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList