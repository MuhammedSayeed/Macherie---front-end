import React from 'react'
import { Button } from '../button'
import { Menu } from 'lucide-react'
import clsx from 'clsx';
import useSidebar from '@/hooks/useSidebar';

const SideBarButton = () => {
    const { handleOpenSidebar } = useSidebar();
    return (
        <div>
            <Button onClick={handleOpenSidebar} variant={"outline"} className={clsx("border-none !p-0 bg-transparent cursor-pointer rounded-xl md:flex hover:bg-transparent text-black  shadow-none")}>
                <Menu className="size-6" /> <span className='hidden md:block' >Menu</span >
            </Button>
        </div>
    )
}

export default SideBarButton