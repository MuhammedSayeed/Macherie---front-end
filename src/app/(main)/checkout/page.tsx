import OrderSummary from "@/components/checkout/OrderSummary/OrderSummary"
import CheckoutForm from "@/components/checkout/checkout-forms/CheckoutForm"

const CheckoutPage = () => {
    return (
        <div className="relative grid grid-cols-1 md:grid-cols-2 md:gap-8 max-w-6xl mx-auto w-full px-3 pt-[9rem] md:pt-[6rem] mb-6 space-y-6">
            <OrderSummary />
            <CheckoutForm />
        </div>
    )
}

export default CheckoutPage