import { sidebarLinks } from '@/constants/sidebar'
import useSidebar from '@/hooks/useSidebar';

const SidebarLinks = () => {
    const { renderSidebarLinks } = useSidebar();

    return (
        <div className="flex flex-col">
            {renderSidebarLinks(sidebarLinks)}
        </div>
    )
}

export default SidebarLinks