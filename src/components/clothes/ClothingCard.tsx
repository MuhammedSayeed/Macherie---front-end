import ClothingColors from './ClothingColors'
import AddToCartButton from './AddToCartButton'

const ClothingCard = () => {
    return (
        <div>
            <div className="aspect-[2/3] bg-gray-300">
            </div>
            <div className="flex justify-between items-center mt-2">
                <ClothingColors />
                <AddToCartButton />
            </div>
            <div className="text-sm text-black/80 mt-1 font-sans">
                <span>Strawberry graphic T-shirt</span>
                <div className="font-semibold">700 Egp</div>
            </div>
        </div>
    )
}

export default ClothingCard