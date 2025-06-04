import React from 'react'
import { Button } from '../button'
import { Menu } from 'lucide-react'

const SideBarButton = () => {
    return (
        <div className="py-5">
            <Button variant={"outline"} className='bg-transparent py-5 px-10 cursor-pointer rounded-2xl'><Menu /> Menu</Button>
        </div>
    )
}

export default SideBarButton