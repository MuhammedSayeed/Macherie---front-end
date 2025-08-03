"use client"

import clsx from "clsx";
import { useEffect } from "react";


interface IProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
}

const Modal = ({ isOpen, children, onClose, className }: IProps) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) onClose();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);
    return (
        <div onClick={onClose} className={clsx("fixed z-[120] inset-0 h-screen bg-black/50 flex justify-center items-center transition-all duration-300 ease-in-out", isOpen ? "opacity-100 visible" : "opacity-0 invisible")}>
            <div onClick={(e) => e.stopPropagation()} className={clsx("relative w-full mx-4 bg-white shadow-md rounded-lg max-w-lg p-6 text-black", className)}>
                {children}
            </div>
        </div>
    )
}

export default Modal