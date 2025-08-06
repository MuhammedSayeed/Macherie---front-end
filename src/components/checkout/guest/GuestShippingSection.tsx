import FormInputField from "@/components/ui/FormInputField"
import { GUEST_SHIPPING_FORM_FIELDS } from "@/constants/shipping"
import { CheckoutFormData } from "@/types/checkout"
import { UseFormReturn } from "react-hook-form"



interface IProps {
  form: UseFormReturn<CheckoutFormData>
}
const GuestShippingSection = ({ form }: IProps) => {
  const { register, formState: { errors } } = form;

  const renderGuestShippingFormFields = GUEST_SHIPPING_FORM_FIELDS.map((s) => (
    <FormInputField key={s.id} errors={errors}
      register={register} id={s.id} label={s.label}
      name={s.name} placeholder={s.placeholder}
      style={s.style} />
  ))

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Shipping Address</h1>
      <div className="grid grid-cols-2 gap-4">
        {renderGuestShippingFormFields}
      </div>
    </section>
  )
}

export default GuestShippingSection