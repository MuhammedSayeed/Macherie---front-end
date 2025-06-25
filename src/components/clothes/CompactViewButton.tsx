"use client"
import { Button } from '../ui/button'
import { Grid2x2, Grid3x2 } from 'lucide-react'
import { useCompactStore } from '@/lib/store/useCompactStore'

const CompactViewButton = () => {
    const { isCompactView , setIsCompactView } = useCompactStore();

    const toggleCompact = () => {
        setIsCompactView(!isCompactView);
    }

    return (
        <Button onClick={toggleCompact} variant={"outline"} className='border-black/50 cursor-pointer'>
            {isCompactView ? <Grid2x2 /> : <Grid3x2 />}
        </Button>
    )
}

export default CompactViewButton