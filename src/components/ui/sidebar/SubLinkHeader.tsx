import React from 'react'
import { Button } from '../button'
import { ChevronLeft } from 'lucide-react'
import { useSidebarStore } from '@/lib/store/useSidebarStore'
import useSidebar from '@/hooks/useSidebar'

const SubLinkHeader = () => {
    const { currentSubLink } = useSidebarStore();
    const { handleCloseSubLinks } = useSidebar();

    return (
        <div onClick={handleCloseSubLinks} className="flex items-center shadow-lg border-black/20 py-2.5">
            <Button className="hover:bg-transparent cursor-pointer !px-5" variant={"ghost"}>
                <ChevronLeft className="size-6" />
            </Button>
            <span className='block font-semibold tracking-wider'>{currentSubLink}</span>
        </div>
    )
}

export default SubLinkHeader