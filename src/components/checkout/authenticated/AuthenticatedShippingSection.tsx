import ErrorMessageInput from "@/components/ui/ErrorMessageInput";
import { Button } from "@/components/ui/button";
import useAddShippingAddressModal from "@/hooks/useAddShippingAddressModal";
import useShippingAddress from "@/hooks/useShippingAddress";
import { IAddress } from "@/interfaces/address";
import { CheckoutFormData } from "@/types/checkout";
import clsx from "clsx";
import { Plus } from "lucide-react";
import { useState } from "react";
import { UseFormReturn } from "react-hook-form";
import ShippingAddressCard from "./ShippingAddressCard";
import ManualShippingAddressForm from "./ManualShippingAddressForm";

interface IProps {
  form: UseFormReturn<CheckoutFormData>,
  onSaveAddress: () => void
}

const AuthenticatedShippingSection = ({ form, onSaveAddress }: IProps) => {
  const { formState: { errors }, setValue } = form;
  const { addresses } = useShippingAddress();
  const { handleOpenModal } = useAddShippingAddressModal();
  const [selectedAddressId, setSelectedAddressId] = useState<string | null>(null);

  const handleSelectAddress = (address: IAddress) => {
    setValue("shippingAddress", address);
    setSelectedAddressId(address._id);
    onSaveAddress();
  }

  if (addresses?.length === 0) return <ManualShippingAddressForm form={form} />

  const renderAddresses = addresses?.map((a) => (
    <ShippingAddressCard key={a._id} handleSelectAddress={handleSelectAddress} selectedAddressId={selectedAddressId} setSelectedAddressId={setSelectedAddressId} shippingAddress={a} />
  ))

  return (
    <section className="space-y-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Shipping Address</h1>
        <Button onClick={handleOpenModal} type="button" className={clsx("cursor-pointer", addresses?.length === 2 ? "hidden" : "flex")} variant="outline" size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Address
        </Button>
      </div>
      <div className="space-y-2">
        <div className="grid grid-cols-2 gap-4">
          {renderAddresses}
        </div>
        <div className="block">
          {errors["shippingAddress"] && <ErrorMessageInput message="You select an address" />}
        </div>
      </div>
    </section>
  )
}

export default AuthenticatedShippingSection