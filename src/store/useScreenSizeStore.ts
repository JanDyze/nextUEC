"use client";

import { create } from "zustand";
import { useEffect } from "react";

interface ScreenSizeState {
  isMobile: boolean;
  checkScreenSize: () => void;
}

export const useScreenSizeStore = create<ScreenSizeState>((set) => ({
  isMobile: false,
  checkScreenSize: () => {
    set({ isMobile: window.innerWidth <= 1024 });
  },
}));

export const useScreenSizeListener = () => {
  const checkScreenSize = useScreenSizeStore((state) => state.checkScreenSize);

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [checkScreenSize]);
};
