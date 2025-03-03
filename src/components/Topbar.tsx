"use client";

import ThemeToggle from "@/components/ThemeToggle";
import Button from "@/components/Button";
import { Maximize, Minimize } from "lucide-react";
import { useSidebarStore } from "@/store/useSidebarStore";
import { useState, useEffect } from "react";
import { useScreenSizeStore, useScreenSizeListener } from "@/store/useScreenSizeStore";

const Topbar = () => {
  const { isCollapsed } = useSidebarStore();
  const [isFullscreen, setIsFullscreen] = useState(false);

  useScreenSizeListener(); // Initializes and listens for screen size changes
  const isMobile = useScreenSizeStore((state) => state.isMobile);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  return (
    <header className="bg-background lg:p-5 p-2 flex justify-between items-center">
      {/* Animated h2: slides in from the left when expanded */}
      <h2
        className={`text-lg font-bold text-foreground transition-all duration-[300ms] ${isCollapsed ? "opacity-100 translate-x-0 scale-100 w-auto" : "opacity-0 -translate-x-50"
          }`}
      >
        UEC Canubing II
      </h2>

      <div className="flex items-center justify-end gap-4">

        {!isMobile &&
          <Button
            icon={isFullscreen ? <Minimize /> : <Maximize />}
            rounded="full"
            className="h-10 w-10"
            color="info"
            variant="plain"
            onClick={toggleFullscreen}
          />}
        <ThemeToggle />


      </div>
    </header>
  );
};

export default Topbar;
