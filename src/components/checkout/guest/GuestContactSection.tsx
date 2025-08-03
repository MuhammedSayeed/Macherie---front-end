import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckoutFormData } from "@/types/checkout"
import clsx from "clsx";
import { UseFormReturn } from "react-hook-form"



interface IProps {
  form: UseFormReturn<CheckoutFormData>
}

const GuestContactSection = ({ form }: IProps) => {
  const { register, formState: { errors }} = form;


  

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Contact Information</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2 col-span-2 ">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            {...register("name")}
            placeholder="Enter your full name"
            className={clsx(errors.name ? "border-red-500" : "", "py-5")}
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            {...register("email")}
            placeholder="Enter your full email"
            className={clsx(errors.name ? "border-red-500" : "", "py-5")}
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            {...register("phone")}
            placeholder="Enter your phone number"
            className={clsx(errors.name ? "border-red-500" : "", "py-5")}
          />
          {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
        </div>
      </div>
    </section>
  )
}

export default GuestContactSection