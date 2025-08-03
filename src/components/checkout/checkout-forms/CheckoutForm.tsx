"use client"

import { useContext } from "react";
import GuestCheckoutForm from "./GuestCheckoutForm";
import { AuthContext } from "@/context/auth/AuthContext";
import AuthenticatedCheckoutForm from "./AuthenticatedCheckoutForm";

const CheckoutForm = () => {

  const { isAuthenticated } = useContext(AuthContext);



  return (
    <div>
      {isAuthenticated ? <AuthenticatedCheckoutForm /> : <GuestCheckoutForm />}
    </div>
  )
}

export default CheckoutForm