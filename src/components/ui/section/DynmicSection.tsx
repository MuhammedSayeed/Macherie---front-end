
"use client";

import Link from "next/link";
import React, { useEffect, useRef, useCallback } from "react";

interface IProps {
    smallScreenCover: string;
    bigScreenCover: string;
    path: string;
    label: string;
}

const DynamicSection = ({ bigScreenCover, smallScreenCover, path, label }: IProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const updateBackgroundSection = useCallback(() => {
        if (!sectionRef.current) return;

        const imageUrl = window.innerWidth >= 768 ? bigScreenCover : smallScreenCover;

        sectionRef.current.style.backgroundImage = `url(${imageUrl})`;

    }, [bigScreenCover, smallScreenCover]);

    useEffect(() => {
        updateBackgroundSection();

        window.addEventListener("resize", updateBackgroundSection);

        return () => window.removeEventListener("resize", updateBackgroundSection);
    }, [updateBackgroundSection]);

    return (
        <section ref={sectionRef} className="h-[850px] max-h-[850px] w-full bg-cover bg-center flex flex-col justify-center items-center" >
            <Link href={path} className="rounded-3xl border py-2.5 px-7 text-white bg-black/25 font-semibold hover:bg-black/40 transition-colors">
                {label}
            </Link>
        </section>
    );
};

export default DynamicSection;
