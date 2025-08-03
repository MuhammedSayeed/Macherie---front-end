import React, { useEffect, useState } from 'react'
import Drawer from '../../ui/drawer/Drawer'
import { ICharts, Imeasurement } from '@/interfaces/products'
import DrawerHeader from '../../ui/drawer/Header'
import { Button } from '../../ui/button'
import clsx from 'clsx'

import useMeasurementsDrawer from '@/hooks/useMeasurementsDrawer'
import MeasurementsPreview from './MeasurementsPreview'


interface IProps {
    measurements: Imeasurement[],
    type: "tops" | "bottoms"
}
const MeasurementsDrawer = ({ measurements, type }: IProps) => {
    const { isOpen, handleClose } = useMeasurementsDrawer();
    const [activeSize, setActiveSize] = useState<string | null>(null);
    const [activeCharts, setActiveCharts] = useState<ICharts | null>(null);


    const handleSelectSize = (size: string, charts: ICharts) => {
        setActiveSize(size)
        setActiveCharts(charts)
    }

    const renderSizes = measurements.map((m) => {
        const isActive = m.size === activeSize
        return (
            <Button onClick={() => handleSelectSize(m.size, m.charts)} key={m.size} className={clsx('cursor-pointer uppercase px-5', isActive ? "bg-black text-white hover:bg-black/80" : "bg-gray-200 text-black hover:bg-gray-300")}>{m.size}</Button>
        )
    })

    const renderCharts = () => {
        if (!activeCharts) return null;

        return (
            <div className="grid w-full font-medium text-center text-sm">
                {Object.entries(activeCharts).map(([key, value], index) => {

                    const isLast = index === Object.keys(activeCharts).length - 1;

                    return (
                        <div key={key} className={clsx("flex col-span-2 text-center", !isLast && "border-b")}>
                            <span className="flex-1 px-4 py-6 flex justify-center items-center">{key}</span>
                            <span className="flex-1 px-4 py-6 flex justify-center items-center">{value}</span>
                        </div>
                    )
                })}
            </div>
        );
    };


    useEffect(() => {
        handleSelectSize(measurements[0].size, measurements[0].charts)
    }, [])


    return (
        <Drawer isOpen={isOpen} onClose={handleClose}>
            <DrawerHeader header='Measurements' onClose={handleClose} />
            <div className="flex items-center justify-center gap-3 px-4 py-6 border-b">
                {renderSizes}
            </div>
            <div className="w-full uppercase text-sm border-b-[6px] border-[#E3E3E3]">
                <div className="flex py-4 border-b font-medium text-center text-black/70" >
                    <span className="flex-1 flex justify-center items-center">Area</span>
                    <span className="flex-1 flex justify-center items-center">CM</span>
                </div>
                {renderCharts()}
            </div>
            <div className="overflow-y-auto">
                <div className="p-4 border-b">
                    <span className='text-lg font-medium'>How do I take my measurements?</span>
                </div>
                <MeasurementsPreview type={type} />
            </div>
        </Drawer>
    )
}

export default MeasurementsDrawer