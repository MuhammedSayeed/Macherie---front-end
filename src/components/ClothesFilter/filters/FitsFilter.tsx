import { Button } from "@/components/ui/button"

const FitsFilter = () => {


    return (
        <div>
            <div className="px-4 py-6 ">
                <span className='text-[1.4rem] font-medium'>Fits</span>
                <div className="grid grid-cols-5 gap-4 mt-2">
                    <Button size={"sm"} className='bg-gray-200/80 text-black hover:bg-gray-300/70 cursor-pointer font-normal'>Muscle</Button>
                    <Button size={"sm"} className='bg-gray-200/80 text-black hover:bg-gray-300/70 cursor-pointer font-normal'>Oversize</Button>
                </div>
            </div>
        </div>
    )
}

export default FitsFilter