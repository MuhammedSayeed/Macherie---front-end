"use client"
import clsx from "clsx"
import SidebarHeader from "./SidebarHeader"
import SidebarLinks from "./SidebarLinks"
import { useSidebarStore } from "@/lib/store/useSidebarStore"
import SubLinks from "./SubLinks"
import SubLinkHeader from "./SubLinkHeader"
import useSidebar from "@/hooks/useSidebar"

const Sidebar = () => {
  const { isOpen, showSubLinks } = useSidebarStore();
  const { handleCloseSidebar } = useSidebar();
  return (
    <div className={clsx("fixed inset-0 w-full h-full z-[13] font-sans transition-opacity duration-300", isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}>
      {/* Overlay */}
      <div onClick={handleCloseSidebar} className={clsx("hidden md:block absolute z-[14] w-full h-full inset-0 bg-black/50 transition-opacity duration-300 ", isOpen ? "opacity-100" : "opacity-0 pointer-events-none")} />
      {/* Sidebar */}
      <div className="h-full p-5">
        <div className={clsx("relative z-[15] w-full h-full md:max-w-[364px] rounded-2xl bg-white overflow-hidden transition-transform duration-300", isOpen ? "translate-x-0" : "-translate-x-full")}>
          {/* Main Sidebar */}
          <aside className={clsx("absolute inset-0 w-full h-full transition-transform duration-300", showSubLinks ? "-translate-x-full" : "translate-x-0")}>
            <SidebarHeader />
            <SidebarLinks />
          </aside>
          {/* SubLinks Sidebar */}
          <aside className={clsx("absolute inset-0 w-full h-full transition-transform duration-300 z-10 flex flex-col", showSubLinks ? "translate-x-0" : "translate-x-full")}>
            <SubLinkHeader />
            <SubLinks />
          </aside>
        </div>
      </div>
    </div>
  )
}

export default Sidebar