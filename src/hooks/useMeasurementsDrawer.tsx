"use client"

import { useMeasurementsDrawerStore } from "@/lib/store/measurementsDrawerStore";


const useMeasurementsDrawer = () => {
    const { isOpen, setMeasurementsDrawerState } = useMeasurementsDrawerStore();

    const handleClose = () => {
        setMeasurementsDrawerState(false)
    }
    const handleOpen = () => {
        setMeasurementsDrawerState(true)
    }

  return {
    isOpen,
    handleClose,
    handleOpen
  }
}

export default useMeasurementsDrawer