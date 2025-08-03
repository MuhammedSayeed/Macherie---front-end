"use client"

import { Button } from "@/components/ui/button"
import { IRemovedItem } from "@/interfaces/cart"
import { CartItem } from "@/lib/store/cartStore"
import { Pencil, Trash } from "lucide-react"

interface IProps {
    item: CartItem
    editMode: boolean
    isQuantityChanged: boolean
    onToggleEdit: () => void
    onConfirm: () => void
    onCancel: () => void
    onRemove: (removedItem: IRemovedItem) => Promise<void>
}

const ActionButtons = ({ item, editMode, isQuantityChanged, onCancel, onConfirm, onRemove, onToggleEdit }: IProps) => {


    const handleRemoveItem = async () => {
        await onRemove({
            productId: item.productId,
            variantId: item.variantId,
            size: item.size as string,
        })
    }


    if (editMode) {
        return (
            <div className="flex justify-end gap-3">
                <Button onClick={onCancel} size={"sm"} className='cursor-pointer bg-gray-200 text-black/70 hover:bg-gray-300'>Cancel</Button>
                <Button disabled={!isQuantityChanged} onClick={onConfirm} size={"sm"} className='cursor-pointer bg-gray-200 text-black/70 hover:bg-gray-300'>Confirm</Button>
            </div>
        )
    } else {

        return (
            <div className="flex justify-end gap-3">
                <Button onClick={onToggleEdit} size={"icon"} variant={"ghost"} className='cursor-pointer rounded-full p-5 bg-gray-200/60 hover:bg-gray-200'><Pencil className='size-5' /></Button >
                <Button onClick={handleRemoveItem} size={"icon"} variant={"ghost"} className='cursor-pointer rounded-full p-5 bg-gray-200/60 hover:bg-gray-200'><Trash className='size-5' /></Button>
            </div >
        )
    }

}

export default ActionButtons