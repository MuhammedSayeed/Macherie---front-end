import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckoutFormData } from "@/types/checkout";
import clsx from "clsx";
import { Plus } from "lucide-react";
import { UseFormReturn } from "react-hook-form";



interface IProps {
  form: UseFormReturn<CheckoutFormData>
}

const AuthenticatedShippingSection = ({ form }: IProps) => {

  const { register, formState: { errors } } = form;

  const length = 0;



  if (length == 0) {
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
            {errors.address && <p className="text-sm text-red-500">{errors.address.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="city">City *</Label>
            <Input
              id="city"
              {...register("city")}
              placeholder="Enter city"
              className={clsx(errors.city ? "border-red-500" : "", "py-5")}
            />
            {errors.city && <p className="text-sm text-red-500">{errors.city.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="governorate">Governorate *</Label>
            <Input
              id="governorate"
              {...register("governorate")}
              placeholder="Enter governorate"
              className={clsx(errors.governorate ? "border-red-500" : "", "py-5")}
            />
            {errors.governorate && <p className="text-sm text-red-500">{errors.governorate.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="country">Country *</Label>
            <Input
              id="country"
              {...register("country")}
              placeholder="Enter country"
              className={clsx(errors.country ? "border-red-500" : "", "py-5")}
            />
            {errors.country && <p className="text-sm text-red-500">{errors.country.message}</p>}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="space-y-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Shipping Address</h1>
        <Button type="button" className="cursor-pointer" variant="outline" size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Address
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="border shadow p-4 rounded-md flex flex-col">
            <span className="font-medium">5 st New York</span>
            <span className="text-sm">Ain shams , Cairo , Egypt</span>
        </div>
        <div className="border shadow p-4 rounded-md flex flex-col">
            <span className="font-medium">5 st New York</span>
            <span className="text-sm">Ain shams , Cairo , Egypt</span>
        </div>
      </div>
    </section>
  )
}

export default AuthenticatedShippingSection