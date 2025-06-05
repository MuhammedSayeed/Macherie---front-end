import React from 'react'
import { Button } from '../button'
import { Menu } from 'lucide-react'

const SideBarButton = () => {
    return (
        <div>
            <Button variant={"outline"} className='border-none !p-0 bg-transparent cursor-pointer  rounded-xl  md:flex hover:bg-transparent hover:text-white/70'>
                <Menu className="size-6" /> <span className='hidden md:block' >Menu</span >
            </Button>
        </div>
    )
}

export default SideBarButton