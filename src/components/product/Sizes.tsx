
"use client"
import {
  Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select"
import useMeasurementsDrawer from "@/hooks/useMeasurementsDrawer"
import { ISizes } from "@/interfaces/products"
import { CartItem } from "@/lib/store/cartStore";

interface IProps {
  sizes: ISizes[],
  setProductToCart: React.Dispatch<React.SetStateAction<CartItem>>;
  setSelectedSize: React.Dispatch<React.SetStateAction<string | null>>;
  selectedSize: string | null;
}

const ProductSizes = ({ sizes, setSelectedSize, setProductToCart, selectedSize }: IProps) => {
  const { handleOpen } = useMeasurementsDrawer();


  const handleSelectSize = (size: string) => {
    setSelectedSize(size);
    setProductToCart((prev) => ({ ...prev, size }));
  }




  return (
    <div className='lg:max-w-[400px] space-y-2'>
      <span onClick={handleOpen} className="text-sm underline cursor-pointer font-medium block">See Measurement</span>
      <Select value={selectedSize ?? ''} onValueChange={handleSelectSize}>
        <SelectTrigger className="w-full !py-5.5 cursor-pointer">
          <SelectValue placeholder="Sizes" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {sizes.map((s) => (
              <SelectItem
                key={s._id}
                value={s.size} // ✅ لازم القيمة تكون خاصة بالعنصر نفسه
                className="!py-3 font-medium cursor-pointer"
              >
                {s.size.toUpperCase()}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default ProductSizes