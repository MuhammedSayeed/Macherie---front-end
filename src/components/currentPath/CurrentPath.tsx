

interface IProps {
    path: string
}
const CurrentPath = ({ path }: IProps) => {
    return (
        <div className="w-full flex justify-center">
            <span className="text-center text-2xl uppercase font-medium font-sans">{path} / <span className="text-black/50">12 items</span></span>
        </div>
    )
}

export default CurrentPath