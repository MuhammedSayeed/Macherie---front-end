"use client";
import { useContext } from "react";
import GuestCheckoutForm from "./GuestCheckoutForm";
import { AuthContext } from "@/context/auth/AuthContext";
import AuthenticatedCheckoutForm from "./AuthenticatedCheckoutForm";
import CheckoutFormSkeleton from "@/skeleton/CheckoutForm";
import useHybridCart from "@/hooks/useHybridCart";
import OrderSummary from "../OrderSummary/OrderSummary";
import EmptyCart from "@/components/ui/EmptyCart";

const CheckoutForm = () => {
  const { isAuthenticated, isUserDataLoading } = useContext(AuthContext);
  const { isEmpty, isLoading: isCartLoading } = useHybridCart();

  if (isUserDataLoading || isCartLoading) return <CheckoutFormSkeleton />;

  if (isEmpty) return <EmptyCart />

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 md:gap-8 max-w-6xl mx-auto w-full px-3 pt-[9rem] md:pt-[6rem] mb-6 space-y-6">
      <OrderSummary />
      {isAuthenticated ? <AuthenticatedCheckoutForm /> : <GuestCheckoutForm />}
    </div>
  );
};

export default CheckoutForm;
