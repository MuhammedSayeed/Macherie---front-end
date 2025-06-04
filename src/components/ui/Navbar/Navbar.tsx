import React from 'react'
import Logo from '../Logo'
import SideBarButton from '../sidebar/SideBarButton'
import NavItems from './NavItems'

const Navbar = () => {
    return (
        <div className='w-full sticky top-0 flex justify-between items-center p-5 md:p-10 bg-black '>
            <div className="w-full text-white">
                <SideBarButton />
            </div>
            <div className="flex-1 text-white  ">
                <Logo />
            </div>
            <div className="w-full  flex justify-end text-white">
                <NavItems />
            </div>
        </div>
    )
}

export default Navbar