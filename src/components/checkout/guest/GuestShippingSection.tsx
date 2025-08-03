import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckoutFormData } from "@/types/checkout"
import clsx from "clsx"
import { UseFormReturn } from "react-hook-form"



interface IProps {
  form: UseFormReturn<CheckoutFormData>
}


const GuestShippingSection = ({ form }: IProps) => {
  const { register, formState: { errors } } = form

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Shipping Address</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2 col-span-2 ">
          <Label htmlFor="address">Address *</Label>
          <Input
            id="address"
            {...register("address")}
            placeholder="Enter your street address"
            className={clsx(errors.name ? "border-red-500" : "", "py-5")}
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="city">City *</Label>
          <Input
            id="city"
            {...register("city")}
            placeholder="Enter city"
            className={clsx(errors.name ? "border-red-500" : "", "py-5")}
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="governorate">Governorate *</Label>
          <Input
            id="governorate"
            {...register("governorate")}
            placeholder="Enter governorate"
            className={clsx(errors.name ? "border-red-500" : "", "py-5")}
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="country">Country *</Label>
          <Input
            id="country"
            {...register("country")}
            placeholder="Enter country"
            className={clsx(errors.name ? "border-red-500" : "", "py-5")}
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
        </div>
      </div>
    </section>
  )
}

export default GuestShippingSection