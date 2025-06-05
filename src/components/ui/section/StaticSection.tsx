import React from 'react'


interface IProps {
    children: React.ReactNode,
    cover: string
}
const StaticSection = ({ children, cover }: IProps) => {
    return (
        <section style={{ backgroundImage: `url(${cover})` }} className='h-[850px] max-h-[850px] w-full bg-cover bg-right flex justify-center items-center' >
            {children}
        </section >
    )
}

export default StaticSection