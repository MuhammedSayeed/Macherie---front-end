"use client"
import useNavbar from '@/hooks/useNavbar'
import Logo from '../Logo'
import SideBarButton from '../sidebar/SideBarButton'
import NavItems from './NavItems'
import Search from '@/components/search/Search'
import clsx from 'clsx'
import CloseSearchButton from '@/components/search/CloseSearchButton'
import OpenSearchButton from '@/components/search/OpenSearchButton'
import AuthOptionsModal from '@/components/AuthOptionsModal'


const Navbar = () => {
    const { scrolled } = useNavbar();

    return (
        <div className={clsx(`w-full fixed top-0 left-0 right-0 h-fit z-[11] px-3 py-5 text-white`, (scrolled) && "bg-gradient-to-b from-white/90 to-transparent")}>
            <div className="relative z-[10] grid grid-cols-[1fr_2fr_1fr] grid-rows-2 md:grid-rows-1 items-center gap-y-4 ">
                <div className="w-full flex items-center space-x-3">
                    <SideBarButton />
                    <CloseSearchButton />
                </div>
                <div className=" flex justify-center">
                    <Logo />
                </div>
                <div className="w-full flex justify-end" >
                    <NavItems />
                </div>
                <div className="md:hidden  w-full col-span-3">
                    <OpenSearchButton />
                </div>
            </div>
            <Search />
            <AuthOptionsModal />
        </div>
    )
}

export default Navbar