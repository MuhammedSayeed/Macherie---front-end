import Link from "next/link"


interface IProps {
    path: string,
    label: string,
}

const GradiantLayer = ({ path, label }: IProps) => {
    return (
        <Link href={path} className='absolute opacity-0 hover:opacity-100 transition-opacity duration-500 z-2 w-full h-full inset-0 flex justify-center items-center rounded-lg bg-[linear-gradient(0deg,rgba(0,0,0,1)_9%,rgba(0,0,0,0)_100%,rgba(237,221,83,0)_100%)]'>
            <span className="text-2xl text-white/90 font-medium font-qurova tracking-widest">{label}</span>
        </Link>
    )
}

export default GradiantLayer