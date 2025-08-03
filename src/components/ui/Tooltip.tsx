"use client"
import clsx from "clsx"
import { useState } from "react"


interface IProps {
    children: React.ReactNode,
    tooltip: string,
    className?: string,
    delay?: number
}
const Tooltip = ({ children, tooltip, className, delay = 200 }: IProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        const id = setTimeout(() => {
            setIsVisible(true)
        }, delay)
        setTimeoutId(id)
    }
    const handleMouseLeave = () => {
        if (timeoutId) {
            clearTimeout(timeoutId)
            setTimeoutId(null)
        }
        setIsVisible(false)
    }


    return (
        <div  className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {children}
            {
                isVisible && (
                    <div role="tooltip" className={clsx("absolute left-1/2 -translate-x-1/2 z-[4] bg-white border border-black/10 drop-shadow-lg py-1.5 px-4 text-sm rounded-md -bottom-9 transition-all duration-200 font-sans font-medium", className)}>
                        {tooltip}
                    </div>
                )
            }
        </div>
    )
}

export default Tooltip