"use client"
import { useEffect, useState } from 'react'
import ItemsForMobile from './ItemsForMobile'
import ItemsForLargeScreen from './ItemsForLargeScreen'

const OrderSummary = () => {
    const [isMobile, setIsMobile] = useState(false)


    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth <= 768);
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, [])

    if (isMobile) return <ItemsForMobile />

    return <ItemsForLargeScreen />
}






export default OrderSummary