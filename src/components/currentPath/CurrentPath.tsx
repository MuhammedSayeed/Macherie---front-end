

interface IProps {
    path: string,
    productsLength: number
}
const CurrentPath = ({ path, productsLength }: IProps) => {
    const displayPath = path.split("-")[0]

    return (
        <div className="w-full flex justify-center">
            <span className="text-center text-2xl uppercase font-medium font-sans">{displayPath} / <span className="text-black/50">{productsLength} {productsLength === 1 ? "items" : "items"}</span></span>
        </div>
    )
}

export default CurrentPath