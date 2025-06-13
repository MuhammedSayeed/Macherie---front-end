import React from 'react'
import { Button } from '../button'
import { Menu } from 'lucide-react'
import { useSearchStore } from '@/lib/store/useSearchStore';
import clsx from 'clsx';

const SideBarButton = () => {
    const { isOpen } = useSearchStore();

    return (
        <div>
            <Button variant={"outline"} className={clsx("border-none !p-0 bg-transparent cursor-pointer rounded-xl md:flex hover:bg-transparent ", isOpen ? "text-black" : "text-white", !isOpen && "hover:text-white/70")}>
                <Menu className="size-6" /> <span className='hidden md:block' >Menu</span >
            </Button>
        </div>
    )
}

export default SideBarButton