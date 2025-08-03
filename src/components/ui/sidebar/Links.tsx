import { LinkType } from '@/components/types/sidebar'
import useSidebar from '@/hooks/useSidebar'
import { ISubLink } from '@/interfaces/sidebar'
import clsx from 'clsx'
import { ChevronRight } from 'lucide-react'
import React, { memo, useMemo } from 'react'

const Links = ({ links }: { links: LinkType[] }) => {
    const { handleShowSubLinks, handleNavigateByLink } = useSidebar();


    const renderLinks = useMemo(() => {
        if (!links || links.length === 0) {
            return null;
        }
        return links?.map((l, index) => {
            const isLast = index === links.length - 1;
            const hasSubCategories = 'subCategories' in l && l.subCategories.length > 0;
            const handleClick = hasSubCategories ? () => handleShowSubLinks(l.subCategories as ISubLink[], l.name) : () => handleNavigateByLink(`/products/${l.value}-${l._id}/all`)
            const itemClass = clsx(
                "flex w-full items-center justify-between px-5 py-6 cursor-pointer text-black/80 hover:text-black hover:bg-black/5 transition-colors",
                !isLast && "border-b border-black/10"
            );
            return (
                <div key={l._id} onClick={handleClick} className={itemClass}>
                    <span className='block text-xl font-medium '>{l.name}</span>
                    {hasSubCategories && <span><ChevronRight /></span>}
                </div>
            )
        })
    }, [links, handleNavigateByLink, handleShowSubLinks])

    return (
        <>{renderLinks}</>
    )
}

export default memo(Links)