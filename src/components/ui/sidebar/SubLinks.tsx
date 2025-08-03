import { memo } from "react"
import Links from "./Links"
import { useSidebarStore } from "@/lib/store/sidebarStore"

const SubLinks = () => {
  const { subLinks } = useSidebarStore()

  return (
    <div className="flex flex-col">
      <Links links={subLinks} />
    </div>
  )
}

export default memo(SubLinks)
