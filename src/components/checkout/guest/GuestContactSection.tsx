import FormInputField from "@/components/ui/FormInputField";
import { GUEST_CONTACT_FORM_FIELDS } from "@/constants/contact";
import { CheckoutFormData } from "@/types/checkout"
import { UseFormReturn } from "react-hook-form"



interface IProps {
  form: UseFormReturn<CheckoutFormData>
}

const GuestContactSection = ({ form }: IProps) => {
  const { register, formState: { errors } } = form;


  const renderGuestContactFormFields = GUEST_CONTACT_FORM_FIELDS.map((c) => (
    <FormInputField errors={errors} register={register}
      key={c.id}
      label={c.label}
      name={c.name}
      placeholder={c.placeholder}
      id={c.id}
      style={c.style}
    />
  ))


  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Contact Information</h1>
      <div className="grid grid-cols-2 gap-4">
        {renderGuestContactFormFields}
      </div>
    </section>
  )
}

export default GuestContactSection