"use client";

import { useScreenSizeStore, useScreenSizeListener } from "@/store/useScreenSizeStore";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import BottomBar from "@/components/BottomBar";
import { useState, useEffect } from "react";

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  useScreenSizeListener(); // Initializes and listens for screen size changes
  const isMobile = useScreenSizeStore((state) => state.isMobile);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(true); // Controls modal visibility

  useEffect(() => {
    // Simulate a slight delay until state is available
    if (isMobile !== undefined) {
      setIsLoading(false);
    }
  }, [isMobile]);


  useEffect(() => {
    if (showModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden"); // Cleanup on unmount
  }, [showModal]);

  if (isLoading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-primary" />
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      {!isMobile && <Sidebar />}
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="flex-1 lg:p-6 px-0 pb-5 overflow-auto scrollbar-hide lg:mb-6 mb-[10vh]">{children}</main>
        {isMobile && <BottomBar />}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-999 ">
          <div className="bg-card rounded-lg p-6 shadow-lg max-w-md w-full">
            <h2 className="text-xl font-semibold">Notice: Static Data</h2>
            <p className="mt-2 text-gray-600">
              This app is currently using static data, meaning changes made will not be saved permanently.
              Live data updates and persistence will be implemented in future versions.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-info text-white rounded-md w-full"
              onClick={() => setShowModal(false)}
            >
              Got it, Start Exploring
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
