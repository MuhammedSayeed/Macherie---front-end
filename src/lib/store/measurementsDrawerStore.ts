import { create } from 'zustand'


interface MeasurementsDrawerStore {
    isOpen: boolean
    setMeasurementsDrawerState: (state: boolean) => void
}

export const useMeasurementsDrawerStore = create<MeasurementsDrawerStore>((set) => ({
    isOpen: false,
    setMeasurementsDrawerState: (state: boolean) => set(() => ({ isOpen: state })),
}))