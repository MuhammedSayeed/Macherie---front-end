"use client"
import { useCompactStore } from '@/lib/store/compactStore'
import { Button } from '../ui/button'
import { Grid2x2, Grid3x2 } from 'lucide-react'

interface IProps {
    disabled: boolean
}

const CompactViewButton = ({ disabled }: IProps) => {
    const { isCompactView, setIsCompactView } = useCompactStore();

    const toggleCompact = () => {
        setIsCompactView(!isCompactView);
    }

    return (
        <Button disabled={disabled} onClick={toggleCompact} variant={"outline"} className='border-black/50 cursor-pointer'>
            {isCompactView ? <Grid2x2 /> : <Grid3x2 />}
        </Button>
    )
}

export default CompactViewButton