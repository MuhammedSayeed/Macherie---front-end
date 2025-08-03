import React from 'react'
import { Button } from '../button'
import { ChevronLeft } from 'lucide-react'
import useSidebar from '@/hooks/useSidebar'
import { useSidebarStore } from '@/lib/store/sidebarStore'

const SubLinkHeader = () => {
    const { currentSubLink } = useSidebarStore();
    const { handleCloseSubLinks } = useSidebar();

    return (
        <div onClick={handleCloseSubLinks} className="flex items-center border-b-[6px] border-[#E3E3E3] py-2.5">
            <Button className="hover:bg-transparent cursor-pointer !px-5" variant={"ghost"}>
                <ChevronLeft className="size-6" />
            </Button>
            <span className='block font-semibold tracking-wider'>{currentSubLink}</span>
        </div>
    )
}

export default SubLinkHeader