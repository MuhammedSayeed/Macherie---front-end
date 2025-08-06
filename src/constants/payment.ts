import { Banknote, CreditCard } from "lucide-react";

export const PAYMENT_OPTIONS = [
    {
        id: "cash",
        label: "Cash on Delivery",
        Icon: Banknote,
        value: "cash",
    },
    {
        id: "card",
        label: "Credit/Debit Card",
        Icon: CreditCard,
        value: "card",
    },
]