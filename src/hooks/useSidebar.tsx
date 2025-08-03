"use client"

import { useCallback, useEffect } from "react"
import type { ISubLink } from "@/interfaces/sidebar"
import useCustomQuery from "./useCustomQuery"
import useUtils from "./useUtils"
import { useSidebarStore } from "@/lib/store/sidebarStore"

const useSidebar = () => {
  const { setShowSubLinks, setSubLinks, setSidebarState, setCurrentSubLink, isOpen } = useSidebarStore()
  const { handleNavigate } = useUtils()

  const { data: sidebarLinks } = useCustomQuery({
    queryKey: ["sidebarLinks"],
    endPoint: "/categories",
  })


  const handleNavigateByLink = useCallback(
    (path: string) => {
      handleNavigate(path)
      setSidebarState(false)
      setShowSubLinks(false)
      setSubLinks([])
      setCurrentSubLink("")
    },
    [handleNavigate, setSidebarState, setShowSubLinks, setSubLinks, setCurrentSubLink],
  )

  const handleShowSubLinks = useCallback(
    (links: ISubLink[], subLinkText: string) => {
      setCurrentSubLink(subLinkText)
      setShowSubLinks(true)
      setSubLinks(links)
    },
    [setCurrentSubLink, setShowSubLinks, setSubLinks],
  )

  const handleOpenSidebar = useCallback(() => {
    setSidebarState(true)
  }, [setSidebarState])

  const handleCloseSidebar = useCallback(() => {
    setSidebarState(false)
    setShowSubLinks(false)
    setSubLinks([])
  }, [setSidebarState, setShowSubLinks, setSubLinks])

  const handleCloseSubLinks = useCallback(() => {
    setShowSubLinks(false)
    setSubLinks([])
    setCurrentSubLink("")
  }, [setShowSubLinks, setSubLinks, setCurrentSubLink])

  // Remove the console.log that was causing excessive logging

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return {
    handleOpenSidebar,
    handleCloseSidebar,
    handleCloseSubLinks,
    sidebarLinks,
    handleShowSubLinks,
    handleNavigateByLink,
  }
}

export default useSidebar
