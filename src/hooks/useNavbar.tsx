"use client"

import { useCallback, useEffect, useState } from "react";

const useNavbar = () => {
    const [scrolled, setScrolled] = useState(false);
    
    const handleScroll = useCallback(() => {
        setScrolled(window.scrollY > 50);
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll])

  return {
    scrolled
  }
}

export default useNavbar