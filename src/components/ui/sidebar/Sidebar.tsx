"use client"
import clsx from "clsx"
import SidebarHeader from "./SidebarHeader"
import SidebarLinks from "./SidebarLinks"
import { useSidebarStore } from "@/lib/store/useSidebarStore"
import SubLinks from "./SubLinks"
import SubLinkHeader from "./SubLinkHeader"
import useSidebar from "@/hooks/useSidebar"
import Drawer from "../drawer/Drawer"

const Sidebar = () => {
  const { isOpen, showSubLinks } = useSidebarStore();
  const { handleCloseSidebar } = useSidebar();

  return (
    <Drawer direction="left" isOpen={isOpen} onClose={handleCloseSidebar}>
      {/* Main Sidebar */}
      <aside className={clsx("absolute  inset-0 w-full h-full transition-transform duration-300", showSubLinks ? "-translate-x-full" : "translate-x-0")}>
        <SidebarHeader />
        <SidebarLinks />
      </aside>
      {/* SubLinks Sidebar */}
      <aside className={clsx("absolute  inset-0 w-full h-full transition-transform duration-300 z-10 flex flex-col", showSubLinks ? "translate-x-0" : "translate-x-full")}>
        <SubLinkHeader />
        <SubLinks />
      </aside>
    </Drawer>

  )
}

export default Sidebar