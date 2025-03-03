"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ServiceCard from "./components/ServiceCard";
import Button from "@/components/Button";
import { CalendarPlus, Archive } from "lucide-react";
import { useScreenSizeStore } from "@/store/useScreenSizeStore"; // Importing the screen size store

const ServicesPage = () => {
    const [allowMultiple, setAllowMultiple] = useState(false);
    const [openSections, setOpenSections] = useState<string[]>(["Today"]);
    const isMobile = useScreenSizeStore((state) => state.isMobile); // Using store value

    const toggleSection = (section: string) => {
        setOpenSections((prev) =>
            allowMultiple
                ? prev.includes(section)
                    ? prev.filter((s) => s !== section) // Close if already open
                    : [...prev, section] // Open new section
                : prev.includes(section)
                    ? [] // If clicked again, close all
                    : [section] // Open only this section
        );
    };

    const servicesByDay = {
        "Today": [<ServiceCard key="1" />, <ServiceCard key="2" />, <ServiceCard key="3" />],
        "This Month": [<ServiceCard key="4" />, <ServiceCard key="5" />],
        "Upcoming": [<ServiceCard key="6" />, <ServiceCard key="7" />],
    };

    return (
        <div className="flex flex-col h-full">
            <div className="flex p-2 gap-2 items-center justify-between">
                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search events..."
                    className="px-3 py-2 w-full max-w-sm rounded-full border border-gray-300 focus:ring-2 focus:ring-success focus:outline-none"
                />

                {/* Add Event Button */}
                <Button
                    text={isMobile ? "Add" : "Add an Event"}
                    rounded="full"
                    className="w-auto"
                    color="success"
                    icon={<CalendarPlus className="w-4 h-4" />}
                />
            </div>

            <div className="p-2 space-y-2 grid grid-cols-12 gap-2 h-full">
                <div className="lg:col-span-8 col-span-full space-y-2 overflow-auto scrollbar-hide">
                    {Object.entries(servicesByDay).map(([day, services]) => (
                        <div key={day} className="bg-card-inner rounded-xl">
                            {/* Accordion Header */}
                            <button
                                onClick={() => toggleSection(day)}
                                className="w-full text-left px-4 py-2 text-xl font-bold bg-card rounded-xl flex justify-between"
                            >
                                {day} <span>{openSections.includes(day) ? "▲" : "▼"}</span>
                            </button>

                            {/* Animated Collapsible Content */}
                            <AnimatePresence>
                                {openSections.includes(day) && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-2">
                                            {services}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* Filter Section */}
                <div className="w-full col-span-4 h-full hidden lg:block">
                    <div className="bg-card rounded-xl w-full h-full p-2 flex flex-col">
                        <div className="font-bold text-xl">Filter</div>
                        <div className="bg-card-inner rounded-lg p-2 mt-2 flex justify-between items-center gap-2">
                            <div>Allow Multiple Open</div>
                            <div>
                                <input
                                    type="checkbox"
                                    id="multiOpenToggle"
                                    checked={allowMultiple}
                                    onChange={() => setAllowMultiple(!allowMultiple)}
                                    className="hidden"
                                />
                                <label
                                    htmlFor="multiOpenToggle"
                                    className="relative w-12 h-6 bg-card rounded-full flex items-center cursor-pointer transition-all duration-300"
                                >
                                    <div
                                        className={`absolute w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300
                ${allowMultiple ? "translate-x-6 dark:bg-emerald-400" : "translate-x-1 dark:bg-red-400"}`}
                                    ></div>
                                </label>
                            </div>
                        </div>
                        <div className="flex-grow"></div>

                        <div className="bg-card-inner rounded-lg p-2 mt-2 flex justify-between items-center gap-2 ">
                            <Button text="Open Archives" className="w-full h-[30px]" color="info" icon={<Archive className="w-4 h-4" />} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
