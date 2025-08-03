import Link from "next/link"


interface IProps {
    path: string,
    label: string,
}

const OverlayLayer = ({ path, label }: IProps) => {
    return (
        <Link href={path} className='absolute hover:opacity-0 transition-opacity duration-300 z-2 w-full h-full inset-0 flex justify-center items-center rounded-lg bg-black/30'>
            <span className="text-2xl text-white font-medium font-qurova tracking-widest text-center">{label.toUpperCase()}</span>
        </Link>
    )
}

export default OverlayLayer