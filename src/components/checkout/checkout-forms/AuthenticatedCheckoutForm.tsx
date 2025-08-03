"use client"
import { useForm } from 'react-hook-form'
import AuthenticatedContactSection from '../authenticated/AuthenticatedContactSection'
import AuthenticatedShippingSection from '../authenticated/AuthenticatedShippingSection'
import { CheckoutFormData } from '@/types/checkout'
import { yupResolver } from '@hookform/resolvers/yup'
import { checkoutFormSchema } from '@/schemas/forms'
import { useContext } from 'react'
import { AuthContext } from '@/context/auth/AuthContext'
import PaymentSection from '../Payment/PaymentSection'
import EditContactInfoModal from '../authenticated/EditContactInfoModal'
import { Button } from '@/components/ui/button'

const AuthenticatedCheckoutForm = () => {
  const { user } = useContext(AuthContext);
  const form = useForm<CheckoutFormData>({
    resolver: yupResolver(checkoutFormSchema),
    defaultValues: {
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
      address: "",
      city: "",
      governorate: "",
      country: "",
      payment: "cash"
    }
  })

  const onSumbit = (data: CheckoutFormData) => {
    console.log(data);

  }

  return (
    <>
      <EditContactInfoModal form={form} />
      <form onSubmit={form.handleSubmit(onSumbit)} className="space-y-8 md:max-w-xl">
        <AuthenticatedContactSection form={form} />
        <AuthenticatedShippingSection form={form} />
        <PaymentSection form={form} />
        <Button className="w-full bg-green-500 cursor-pointer hover:bg-green-600 rounded-full" size="lg"  >
          Place Order
        </Button>
      </form>
    </>
  )
}

export default AuthenticatedCheckoutForm