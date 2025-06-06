"use client"
import Link from 'next/link'
import React, { useEffect, useRef } from "react";



interface IProps {
    smallScreenCover: string,
    bigScreenCover: string,
    path: string,
    label: string,
    children? : React.ReactNode
}

const DynmicSection = ({ bigScreenCover, smallScreenCover, path, label , children}: IProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateBackroundScetion = () => {
            if (!sectionRef.current) return;
            if (window.innerWidth >= 768) sectionRef.current.style.backgroundImage = `url(${bigScreenCover})`;
            else sectionRef.current.style.backgroundImage = `url(${smallScreenCover})`;
        }
        // Set the initial background image
        updateBackroundScetion();
        // Update background image on window resize
        window.addEventListener("resize", updateBackroundScetion);

        // Clean up
        return () => {
            window.removeEventListener("resize", updateBackroundScetion);
        }

    }, [bigScreenCover, smallScreenCover])

    return (
        <section ref={sectionRef} className='h-[850px] max-h-[850px] w-full bg-cover bg-center flex justify-center items-center'>
            {children}
            <Link href={path} className='rounded-3xl border py-2.5 px-7 text-white bg-black/25 font-semibold hover:bg-black/40 transition-colors'>{label}</Link>
        </section>
    )
}

export default DynmicSection