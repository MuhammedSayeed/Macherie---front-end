

interface IProps {
    description: string
}
const ProductDescription = ({description} : IProps) => {
    return (
        <div className="w-full lg:max-w-[400px]">
            <span className='block w-full text-sm font-medium border-b pb-2'>
                Description
            </span>
            <span className='text-sm pt-2 block'>
                {description}
            </span>
        </div>
    )
}

export default ProductDescription