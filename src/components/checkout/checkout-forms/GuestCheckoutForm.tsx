import { useForm } from 'react-hook-form'
import GuestContactSection from '../guest/GuestContactSection'
import GuestShippingSection from '../guest/GuestShippingSection'
import { CheckoutFormData } from '@/types/checkout'
import { yupResolver } from '@hookform/resolvers/yup'
import { checkoutFormSchema } from '@/schemas/forms'
import PaymentSection from '../Payment/PaymentSection'
import { Button } from '@/components/ui/button'



const GuestCheckoutForm = () => {
  const form = useForm<CheckoutFormData>({
    resolver: yupResolver(checkoutFormSchema)
  })

  const onSubmit = (data: CheckoutFormData) => {
    console.log(data);
  }


  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 md:max-w-xl">
      <GuestContactSection form={form} />
      <GuestShippingSection form={form} />
      <PaymentSection form={form} />
      <Button  className="w-full bg-green-500 cursor-pointer hover:bg-green-600 rounded-full" size="lg"  >
        Place Order
      </Button>
    </form>
  )
}

export default GuestCheckoutForm