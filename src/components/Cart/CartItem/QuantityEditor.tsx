"use client"

import { Button } from "@/components/ui/button"
import { Minus, Plus } from "lucide-react"

interface IProps {
    quantity: number,
    canDecrease: boolean,
    canIncrease: boolean,
    onIncrease: () => void,
    onDecrease: () => void,
    editModel: boolean,
}

const QuantityEditor = ({ canDecrease, canIncrease, onDecrease, onIncrease, quantity, editModel }: IProps) => {

    if (!editModel) return null;
    return (
        <div className="flex items-center gap-3">
            <Button disabled={!canDecrease} className="cursor-pointer bg-gray-200 text-black/70 hover:bg-gray-300 size-7" onClick={onDecrease} size="sm">
                <Minus className="size-3" />
            </Button>
            <span className="font-medium text-black/70 text-sm min-w-[20px] text-center">{quantity}</span>
            <Button disabled={!canIncrease} className="cursor-pointer bg-gray-200 text-black/70 hover:bg-gray-300 size-7" onClick={onIncrease} size="sm">
                <Plus className="size-3" />
            </Button>
        </div>
    )
}

export default QuantityEditor