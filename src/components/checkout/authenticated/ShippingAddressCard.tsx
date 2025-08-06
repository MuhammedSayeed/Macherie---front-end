import { Button } from "@/components/ui/button"
import useShippingAddress from "@/hooks/useShippingAddress"
import { IAddress } from "@/interfaces/address"
import clsx from "clsx"
import { Trash } from "lucide-react"



interface IProps {
    shippingAddress: IAddress,
    handleSelectAddress: (shippingAddress: IAddress) => void,
    selectedAddressId: string | null,
    setSelectedAddressId: React.Dispatch<React.SetStateAction<string | null>>
}
const ShippingAddressCard = ({ shippingAddress, handleSelectAddress, selectedAddressId, setSelectedAddressId }: IProps) => {
    const isActive = shippingAddress._id === selectedAddressId;
    const { deleteShippingAddress, isLoadingDeleteAddress } = useShippingAddress();

    const handleDeleteAddress = async (id: string) => {
        await deleteShippingAddress.mutateAsync(id);
        if (id === selectedAddressId) setSelectedAddressId(null);
    }


    return (
        <div onClick={() => handleSelectAddress(shippingAddress)} className={clsx("border shadow p-4 rounded-md flex items-center transition-colors", isActive ? "bg-green-50 border-green-400" : "bg-white hover:bg-gray-100")}>
            <div className="flex-1 flex flex-col cursor-pointer ">
                <span className="font-medium">{shippingAddress.address}</span>
                <span className="text-sm">{shippingAddress.city} , {shippingAddress.governorate} , {shippingAddress.country}</span>
            </div>
            <Button disabled={isLoadingDeleteAddress} onClick={() => handleDeleteAddress(shippingAddress._id)} size={"icon"} className="flex items-center justify-center bg-red-100 hover:bg-red-200 cursor-pointer rounded-full ">
                <Trash className="size-4.5 text-red-500" />
            </Button>
        </div>
    )
}

export default ShippingAddressCard