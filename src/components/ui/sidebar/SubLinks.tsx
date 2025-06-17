import useSidebar from '@/hooks/useSidebar';
import { useSidebarStore } from '@/lib/store/useSidebarStore';
import React from 'react'

const SubLinks = () => {
    const { renderSidebarLinks } = useSidebar();
    const { subLinks } = useSidebarStore();

    return (
        <div className="flex flex-col">
            {renderSidebarLinks(subLinks)}
        </div>
    )
}

export default SubLinks