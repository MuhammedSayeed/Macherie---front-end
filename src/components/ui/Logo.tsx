"use client"
import { useSearchStore } from '@/lib/store/useSearchStore'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    const { isOpen } = useSearchStore();
    return (
        <Link href={"/"} className={`font-qurova tracking-widest text-3xl ${isOpen ? "text-black" : "text-white"} `}>MACHÈRIE</Link>
    )
}

export default Logo