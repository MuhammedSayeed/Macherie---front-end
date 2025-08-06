import FormInputField from "@/components/ui/FormInputField"
import { MANUAL_SHIPPINGADDRESS_INPUTS } from "@/constants/forms"
import { CheckoutFormData } from "@/types/checkout"
import { UseFormReturn } from "react-hook-form"



interface IProps {
    form: UseFormReturn<CheckoutFormData>,
}
const ManualShippingAddressForm = ({ form }: IProps) => {
    const { register, formState: { errors } } = form;

    const RENDER_INPUTS = MANUAL_SHIPPINGADDRESS_INPUTS.map((i) => (
        <FormInputField
            errors={errors} register={register}
            id={i.id} label={i.label} name={i.name}
            placeholder={i.placeholder} style={i.style}
            key={i.id}
        />
    ));

    return (
        <section className="space-y-4">
            <h1 className="text-2xl font-bold">Shipping Address</h1>
            <div className="grid grid-cols-2 gap-4">
                {RENDER_INPUTS}
            </div>
        </section>
    )
}

export default ManualShippingAddressForm;

