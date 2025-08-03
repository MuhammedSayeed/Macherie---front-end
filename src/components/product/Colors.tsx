
"use client"
import { IColor } from '@/interfaces/products'
import { Button } from '../ui/button'
import Tooltip from '@/components/ui/Tooltip'
import { usePathname, useRouter } from 'next/navigation'

interface IProps {
    colors: IColor[],
    id: string,
}

const ProductColors = ({ colors, id }: IProps) => {
    const router = useRouter();
    const path = usePathname();



    const handleNavigate = (color: string) => {
        const newPath = `/product/${id}/${color}`;
        if (path === newPath) return;
        
        router.push(`/product/${id}/${color}`)
    }

    return (
        <div>
            <div className="flex gap-2 mb-4">
                {colors.map((color) => (
                    <Tooltip key={color.colorHexCode} tooltip={color.colorIdentifier}>
                        <Button onClick={() => { handleNavigate(color.colorIdentifier) }} style={{ backgroundColor: color.colorHexCode }} className="w-12 h-12 rounded-full border-2 cursor-pointer" />
                    </Tooltip>
                ))}
            </div>
        </div>
    )
}

export default ProductColors