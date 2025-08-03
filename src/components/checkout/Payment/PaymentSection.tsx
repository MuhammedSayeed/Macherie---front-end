import { Label } from '@/components/ui/label'
import { RadioGroupItem } from '@/components/ui/radio-group'
import { Banknote, CreditCard } from 'lucide-react'
import { UseFormReturn } from "react-hook-form"
import { CheckoutFormData } from '@/types/checkout'
import { RadioGroup } from '@/components/ui/radio-group'
import clsx from 'clsx'

interface IProps {
  form: UseFormReturn<CheckoutFormData>
}

const PaymentSection = ({ form }: IProps) => {
  const { register, formState: { errors } } = form

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Payment Method</h1>

      <div className="space-y-2">
        <RadioGroup className="grid grid-cols-2 gap-4" {...register("payment")}>
          <div className={clsx("flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50", errors.payment && "border-red-500")}>
            <RadioGroupItem value="cash" id="cash" />
            <Label htmlFor="cash" className="flex items-center space-x-1 cursor-pointer flex-1">
              <Banknote className="h-5 w-5 text-green-600" />
              <p className="font-medium">Cash on Delivery</p>
            </Label>
          </div>
          <div className={clsx("flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50", errors.payment && "border-red-500")}>
            <RadioGroupItem value="card" id="card" />
            <Label htmlFor="card" className="flex items-center space-x-1 cursor-pointer flex-1">
              <CreditCard className="h-5 w-5 text-green-600" />
              <p className="font-medium">Credit/Debit Card</p>
            </Label>
          </div>
        </RadioGroup>
        {errors.payment && <p className="text-sm text-red-500">{errors.payment.message}</p>}
      </div>
    </section>
  )
}

export default PaymentSection
