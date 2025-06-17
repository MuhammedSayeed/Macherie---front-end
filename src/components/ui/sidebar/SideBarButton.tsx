import React from 'react'
import { Button } from '../button'
import { Menu } from 'lucide-react'
import { useSearchStore } from '@/lib/store/useSearchStore';
import clsx from 'clsx';
import useSidebar from '@/hooks/useSidebar';

const SideBarButton = () => {
    const { isOpen: isSearchOpen } = useSearchStore();
    const {handleOpenSidebar} = useSidebar();
    
    return (
        <div>
            <Button onClick={handleOpenSidebar} variant={"outline"} className={clsx("border-none !p-0 bg-transparent cursor-pointer rounded-xl md:flex hover:bg-transparent ", isSearchOpen ? "text-black" : "text-white", !isSearchOpen && "hover:text-white/70")}>
                <Menu className="size-6" /> <span className='hidden md:block' >Menu</span >
            </Button>
        </div>
    )
}

export default SideBarButton