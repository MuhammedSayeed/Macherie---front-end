import CurrentPath from "@/components/currentPath/CurrentPath";
import ProductStyles from "@/components/productStyles/ProductStyles";
import CompactViewButton from "@/components/products/CompactViewButton";
import Products from "@/components/products/Products";
import FilterToggleButton from "@/components/productsFilter/FilterToggleButton";
import ErrorMessage from "@/components/ui/ErrorMessage";
import { getProducts } from "@/lib/api/products";
import FilterResetProvider from "@/providers/FilterResetProvider";

interface Props {
    params: {
        category?: string;
        style?: string;
    };
}


const ProductsPage = async ({ params }: Props) => {

    const { category, style } = await params;

    if (!category || !style) return <div className="">Invalid parameters</div>

    const data = await getProducts({ category, style });

    if (data.error) return <ErrorMessage message={data.errorMessage} />

    const hasProducts = data.results.length > 0

    return (
        <FilterResetProvider category={category} style={style}>
            <div>
                <CurrentPath productsLength={data.metaData.totalDocs} path={category} />
                <div className="py-5">
                    <div className="flex flex-col">
                        <ProductStyles />
                        <div className="flex justify-end gap-2 mt-2">
                            <CompactViewButton disabled={!hasProducts} />
                            <FilterToggleButton disabled={!hasProducts} />
                        </div>
                    </div>
                    <Products category={category} style={style} hasNextPage={data.metaData.hasNextPage} initialProducts={data.results} />
                </div>
            </div>
        </FilterResetProvider>

    )
}

export default ProductsPage