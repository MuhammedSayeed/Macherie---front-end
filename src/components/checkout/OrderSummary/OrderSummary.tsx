"use client"
import { useEffect, useState } from 'react'
import ItemsForMobile from './ItemsForMobile'
import ItemsForLargeScreen from './ItemsForLargeScreen'
import useHybridCart from '@/hooks/useHybridCart'

const OrderSummary = () => {
    const [isMobile, setIsMobile] = useState(false)
    const { isEmpty } = useHybridCart();

    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth <= 768);
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, [])

    if (isEmpty) return null;

    if (isMobile) return <ItemsForMobile />

    return <ItemsForLargeScreen />
}






export default OrderSummary