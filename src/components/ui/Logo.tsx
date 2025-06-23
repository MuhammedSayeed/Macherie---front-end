"use client"
import { websiteLogoDark } from '@/constants/logo'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {

    return (
        <Link href={"/"} className={`font-qurova tracking-widest text-3xl `}>
            <Image priority src={websiteLogoDark} width={182} height={36} alt='website-logo' />
        </Link>
    )
}

export default Logo