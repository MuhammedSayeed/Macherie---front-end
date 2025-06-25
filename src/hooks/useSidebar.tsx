"use client"
import { useCallback, useEffect } from "react";
import { ISidebarLink } from "@/interfaces/sidebar"
import { useSidebarStore } from "@/lib/store/useSidebarStore"
import clsx from "clsx"
import { ChevronRight } from "lucide-react"
import useUtils from "./useUtils";

const useSidebar = () => {
    const { setShowSubLinks, setSubLinks, setSidebarState, setCurrentSubLink , isOpen } = useSidebarStore();
    const { handleNavigate } = useUtils();

    const handleNavigateByLink = (path : string)=>{
        handleNavigate(path);
        setSidebarState(false);
        setShowSubLinks(false);
        setSubLinks([]);
        setCurrentSubLink("")
    }

    const renderSidebarLinks = (links: ISidebarLink[]) => {
        return links.map((l, index) => {
            const isLast = index === links.length - 1;
            const isSubLink = l.subLinks ? () => handleShowSubLinks(l.subLinks as ISidebarLink[], l.text) : ()=> handleNavigateByLink(`/clothing/${l.value}/all`);
            return (
                <div onClick={isSubLink} key={l.id} className={clsx("flex w-full items-center justify-between px-5 py-6 cursor-pointer text-black/80 hover:text-black hover:bg-black/5 transition-colors", !isLast && "border-b border-black/10")}>
                    <span className='block text-xl font-medium '>{l.text}</span>
                    {l.subLinks && <span><ChevronRight /></span>}
                </div>
            )
        })
    }
    const handleShowSubLinks = useCallback((links: ISidebarLink[], subLinkText: string) => {
        setCurrentSubLink(subLinkText);
        setShowSubLinks(true);
        setSubLinks(links);
    }, []);

    const handleOpenSidebar = useCallback(() => {
        setSidebarState(true);
    }, []);

    const handleCloseSidebar = useCallback(() => {
        setSidebarState(false);
        setShowSubLinks(false);
        setSubLinks([]);
    }, []);


    const handleCloseSubLinks = useCallback(() => {
        setShowSubLinks(false);
        setSubLinks([]);
        setCurrentSubLink("")
    }, []);

    useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
      }, [isOpen])


    return {
        renderSidebarLinks,
        handleOpenSidebar,
        handleCloseSidebar,
        handleCloseSubLinks
    }
}

export default useSidebar