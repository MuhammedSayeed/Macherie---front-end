"use client";

import { useEffect } from "react";
import clsx from "clsx";

interface DrawerProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  direction?: "left" | "right";
}

const Drawer = ({ children, isOpen, onClose, direction = "right" }: DrawerProps) => {
  const isRight = direction === "right";

  const drawerTranslation = clsx({
    "translate-x-0": isOpen,
    "translate-x-full": isRight && !isOpen,
    "-translate-x-full": !isRight && !isOpen,
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <div className={clsx("fixed inset-0 z-[17] w-full h-full transition-opacity duration-300 font-sans", isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}>
      {/* Overlay */}
      <div onClick={onClose} className={clsx("absolute inset-0 z-[18] w-full h-full bg-black/50 transition-opacity duration-300", isOpen ? "opacity-100" : "opacity-0 pointer-events-none")} />
      {/* Drawer Content */}
      <div className="h-full p-5">
        <div className={clsx("relative z-[19] h-full w-full bg-white overflow-hidden rounded-2xl transition-transform duration-300 md:max-w-[380px]", drawerTranslation, isRight ? "ml-auto" : "mr-auto")}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
