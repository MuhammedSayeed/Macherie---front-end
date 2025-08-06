"use client"
import AuthenticatedContactSection from '../authenticated/AuthenticatedContactSection'
import AuthenticatedShippingSection from '../authenticated/AuthenticatedShippingSection'
import PaymentSection from '../Payment/PaymentSection'
import EditContactInfoModal from '../authenticated/EditContactInfoModal'
import { Button } from '@/components/ui/button'
import AddShippingAddressModal from '../authenticated/AddShippingAddressModal'
import useAuthenticatedCheckoutForm from '@/hooks/useAuthenticatedCheckoutForm'

const AuthenticatedCheckoutForm = () => {
  const { form, onSumbit, handleSaveAddress, isLoading } = useAuthenticatedCheckoutForm();

  return (
    <>
      <EditContactInfoModal form={form} />
      <AddShippingAddressModal />
      <form onSubmit={form.handleSubmit(onSumbit)} className="space-y-8 md:max-w-xl">
        <AuthenticatedContactSection form={form} />
        <AuthenticatedShippingSection form={form} onSaveAddress={handleSaveAddress} />
        <PaymentSection form={form} />
        <Button disabled={isLoading} className="w-full bg-green-500 cursor-pointer hover:bg-green-600 rounded-full" size="lg"  >
          Place Order
        </Button>
      </form>
    </>
  )
}

export default AuthenticatedCheckoutForm