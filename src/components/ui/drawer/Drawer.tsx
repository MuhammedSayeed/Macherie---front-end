"use client"
import { useEffect } from "react"
import clsx from "clsx";
interface IProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}
const Drawer = ({ children, isOpen, onClose }: IProps) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen])

  return (
    <div className={clsx("w-full h-full fixed inset-0 z-[17] transition-opacity duration-300 font-sans", isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}>
      {/* Overlay */}
      <div onClick={onClose} className={clsx("bg-black/50 w-full h-full absolute inset-0 z-[18] transition-opacity duration-300", isOpen ? "opacity-100" : "opacity-0 pointer-events-none")}></div>
      {/* Drawer */}
      <div className="h-full p-5">
        <div className={clsx("relative z-[19] bg-white rounded-2xl w-full h-full md:max-w-[380px] ml-auto transition-transform duration-300", isOpen ? "translate-x-0" : "translate-x-full")}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Drawer