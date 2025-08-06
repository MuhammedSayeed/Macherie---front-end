"use client"
import { type UseFormReturn, Controller } from "react-hook-form"
import type { CheckoutFormData } from "@/types/checkout"
import { RadioGroup } from "@/components/ui/radio-group"
import ErrorMessageInput from "@/components/ui/ErrorMessageInput"
import PaymentCardOption from "./PaymentCardOption"
import { PAYMENT_OPTIONS } from "@/constants/payment"

interface IProps {
  form: UseFormReturn<CheckoutFormData>
}

const PaymentSection = ({ form }: IProps) => {
  const { control, formState: { errors } } = form;


  const renderPaymentOptions = PAYMENT_OPTIONS.map((option) => (
    <PaymentCardOption key={option.id} option={option} />
  ))

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Payment Method</h1>
      <div className="space-y-2">
        <Controller name="payment" control={control} render={({ field }) => (
          <RadioGroup className="grid grid-cols-2 gap-4" onValueChange={field.onChange} value={field.value}>
            {renderPaymentOptions}
          </RadioGroup>
        )}
        />
        <ErrorMessageInput message={errors?.payment?.message as string} />
      </div>
    </section>
  )
}

export default PaymentSection
