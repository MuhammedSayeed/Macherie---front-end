import Link from 'next/link'
import React from 'react'


interface IProps {
    cover: string;
    path: string;
    label: string;
}
const StaticSection = ({ cover, label, path }: IProps) => {
    return (
        <section style={{ backgroundImage: `url(${cover})`, backgroundPosition: 'center top' }} className="h-[850px] max-h-[850px] w-full bg-cover flex justify-center items-center">
            <Link href={path} className="rounded-3xl border py-2.5 px-7 text-white bg-black/25 font-medium hover:bg-black/40 transition-colors">
                {label}
            </Link>
        </section>
    )
}

export default StaticSection