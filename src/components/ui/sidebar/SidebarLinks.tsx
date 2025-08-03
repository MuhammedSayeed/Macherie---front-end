import useSidebar from "@/hooks/useSidebar"
import { memo } from "react"
import Links from "./Links"

const SidebarLinks = () => {
  const { sidebarLinks } = useSidebar()

  return (
    <div className="flex flex-col">
      <Links links={sidebarLinks?.results || []} />
    </div>
  )
}

export default memo(SidebarLinks)