import { BottomsPreview } from '@/constants/measurments'
import Image from 'next/image'

const BottomsGuide = () => {
    return (
        <div className="p-4 flex flex-col space-y-4 h-full">
            <div className="flex space-y-5 gap-3 justify-center">
                <div className="flex flex-1 flex-col space-y-2">
                    <div className="flex items-center gap-2 font-medium">
                        <span className="p-4 size-5 flex justify-center items-center bg-gray-200 rounded-full">A</span>
                        <span>Waist</span>
                    </div>
                    <p className="text-xs text-black/80">Measure the waist circumference at the narrowest part of the waist</p>
                </div>
                <div className="flex flex-1 flex-col space-y-2">
                    <div className="flex items-center gap-2 font-medium">
                        <span className="p-4 size-5 flex justify-center items-center bg-gray-200 rounded-full">B</span>
                        <span>Low-rise</span>
                    </div>
                    <p className="text-xs text-black/80">Measure the waist circumference at the height of the hip bones</p>
                </div>
            </div>
            <div className="flex justify-center px-2">
                <Image src={BottomsPreview} alt='measurments-preview' height={200} width={200} />
            </div>
        </div>
    )
}

export default BottomsGuide