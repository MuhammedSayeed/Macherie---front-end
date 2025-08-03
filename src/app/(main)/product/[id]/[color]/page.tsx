import ProductDetails from "@/components/product/Details";
import ProductGallery from "@/components/product/Gallery"
import SimilarProducts from "@/components/product/SimilarProducts";


interface Props {
    params: {
        id: string;
        color: string
    };
}

const fetchProduct = async (id: string, color: string) => {
    try {
        const res = await fetch(`http://localhost:3001/api/v1/products/variant/${id}/${color}`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        return data.results || []
    } catch (error) {
        console.error(`Failed to fetch`, error);
        return [];
    }
}


const ProductPage = async ({ params }: Props) => {
    const productParams = await params;

    const data = await fetchProduct(productParams.id as string, params.color as string);
    
    return (
        <div className="w-full lg:max-w-7xl mx-auto p-4">
            <div className="grid grid-cols-1 gap-7 lg:grid-cols-12 w-full ">
                <ProductGallery images={data?.images} alt={data?.title} />
                <div className="lg:col-span-7 space-y-6">
                    <ProductDetails details={data} />
                </div>
            </div>
            <SimilarProducts _id={data?._id} category={data?.category} style={data?.style} />
        </div>
    )
}

export default ProductPage

