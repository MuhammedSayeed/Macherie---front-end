import React from 'react'
import Logo from '../Logo'
import SideBarButton from '../sidebar/SideBarButton'
import NavItems from './NavItems'
import SearchButton from '@/components/search/SearchButton'

const Navbar = () => {
    return (

        <div className='w-full absolute inset-0 top-0 left-0 right-0 h-fit z-[50] grid grid-cols-[1fr_2fr_1fr] grid-rows-2 items-center gap-y-2 px-3 py-5 text-white'>
            <div className="w-full">
                <SideBarButton />
            </div>
            <div className=" flex justify-center">
                <Logo />
            </div>
            <div className="w-full flex justify-end" >
                <NavItems />
            </div>
            <div className="sm:hidden w-full col-span-3">
                <SearchButton />
            </div>
        </div>
    )
}

export default Navbar