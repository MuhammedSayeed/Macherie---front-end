"use client"

import { useLoginDrawerStore } from "@/lib/store/useLoginDrawerStore";

const useLoginDrawer = () => {
    const { isOpen, setLoginDrawerState } = useLoginDrawerStore();
    console.log("useLoginDrawer isOpen", isOpen);

  const handelLoginOnOpen = () => setLoginDrawerState(true);
  const handelLoginOnClose = () => setLoginDrawerState(false);

  return {
    isOpen,
    handelLoginOnOpen,
    handelLoginOnClose,
  };
};

export default useLoginDrawer;
