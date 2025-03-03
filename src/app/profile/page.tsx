"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ChevronDown, ChevronUp, ArrowLeft } from "lucide-react";
import Button from "@/components/Button";
import Timeline from "./components/Timeline";
import Image from "next/image";


function ProfilePage() {
    const [openSections, setOpenSections] = useState<string[]>(["basic-info", "attendance",]);
    const [openProfileSections, setOpenProfileSections] = useState<string[]>(["tags", "activity"]);

    const toggleSection = (section: string) => {
        setOpenSections((prev) =>
            prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
        );
    };

    const toggleProfileSection = (section: string) => {
        setOpenProfileSections((prev) =>
            prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
        );
    };

    const sections = [
        {
            id: "basic-info",
            title: "Basic Information",
            content: (
                <>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div><div className="font-bold opacity-50">Nickname:</div> Dyze</div>
                        <div><div className="font-bold opacity-50">Address:</div> Lumangbayan, Calapan City</div>
                        <div><div className="font-bold opacity-50">Birthday:</div> September 09, 2002</div>
                        <div><div className="font-bold opacity-50">Gender:</div> Male</div>
                        <div><div className="font-bold opacity-50">Phone:</div> 0992-410-3295</div>
                        <div><div className="font-bold opacity-50">Facebook:</div> Jan Dyze Malaluan</div>
                    </div>
                    {/* <div className="mt-3 flex gap-2 justify-start">
                        <Button text="Edit" className="w-auto"
                            icon={<Pencil className="h-4 w-4" />} />
                        <Button text="Contact" className="w-auto"
                            icon={<Phone className="h-4 w-4" />} />
                    </div> */}
                </>
            ),
        },
        {
            id: "attendance",
            title: "Attendance",
            content: (
                <div className="p-1">
                    <div className="text-lg font-bold">
                        Sunday Service
                    </div>
                    <div className="flex gap-2 overflow-auto scrollbar-hide">
                        <div className="p-1 border-1 rounded-md">
                            <div className="font-medium mb-1 w-full text-center">
                                March
                            </div>
                            <div className="flex gap-1">
                                <div className="rounded-sm bg-success h-10 w-7 relative flex items-center justify-center">
                                    <div className="absolute">
                                        02
                                    </div>
                                </div>
                                <div className="rounded-sm bg-success h-10 w-7 relative flex items-center justify-center">
                                    <div className="absolute">
                                        09
                                    </div>
                                </div>  <div className="rounded-sm bg-danger h-10 w-7 relative flex items-center justify-center">
                                    <div className="absolute">
                                        16
                                    </div>
                                </div>  <div className="rounded-sm bg-danger h-10 w-7 relative flex items-center justify-center">
                                    <div className="absolute">
                                        23
                                    </div>
                                </div>
                                <div className="rounded-sm bg-success h-10 w-7 relative flex items-center justify-center">
                                    <div className="absolute">
                                        30
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-1 border-1 rounded-md">
                            <div className="font-medium mb-1 w-full text-center">
                                April
                            </div>
                            <div className="flex gap-1">
                                <div className="rounded-sm bg-success h-10 w-7 relative flex items-center justify-center">
                                    <div className="absolute">
                                        02
                                    </div>
                                </div>
                                <div className="rounded-sm bg-success h-10 w-7 relative flex items-center justify-center">
                                    <div className="absolute">
                                        09
                                    </div>
                                </div>  <div className="rounded-sm bg-danger h-10 w-7 relative flex items-center justify-center">
                                    <div className="absolute">
                                        16
                                    </div>
                                </div>  <div className="rounded-sm bg-danger h-10 w-7 relative flex items-center justify-center">
                                    <div className="absolute">
                                        23
                                    </div>
                                </div>
                                <div className="rounded-sm bg-success h-10 w-7 relative flex items-center justify-center">
                                    <div className="absolute">
                                        30
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-1 border-1 rounded-md">
                            <div className="font-medium mb-1 w-full text-center">
                                April
                            </div>
                            <div className="flex gap-1">
                                <div className="rounded-sm bg-success h-10 w-7 relative flex items-center justify-center">
                                    <div className="absolute">
                                        02
                                    </div>
                                </div>
                                <div className="rounded-sm bg-success h-10 w-7 relative flex items-center justify-center">
                                    <div className="absolute">
                                        09
                                    </div>
                                </div>  <div className="rounded-sm bg-danger h-10 w-7 relative flex items-center justify-center">
                                    <div className="absolute">
                                        16
                                    </div>
                                </div>  <div className="rounded-sm bg-danger h-10 w-7 relative flex items-center justify-center">
                                    <div className="absolute">
                                        23
                                    </div>
                                </div>
                                <div className="rounded-sm bg-success h-10 w-7 relative flex items-center justify-center">
                                    <div className="absolute">
                                        30
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-1 border-1 rounded-md">
                            <div className="font-medium mb-1 w-full text-center">
                                April
                            </div>
                            <div className="flex gap-1">
                                <div className="rounded-sm bg-success h-10 w-7 relative flex items-center justify-center">
                                    <div className="absolute">
                                        02
                                    </div>
                                </div>
                                <div className="rounded-sm bg-success h-10 w-7 relative flex items-center justify-center">
                                    <div className="absolute">
                                        09
                                    </div>
                                </div>  <div className="rounded-sm bg-danger h-10 w-7 relative flex items-center justify-center">
                                    <div className="absolute">
                                        16
                                    </div>
                                </div>  <div className="rounded-sm bg-danger h-10 w-7 relative flex items-center justify-center">
                                    <div className="absolute">
                                        23
                                    </div>
                                </div>
                                <div className="rounded-sm bg-success h-10 w-7 relative flex items-center justify-center">
                                    <div className="absolute">
                                        30
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-1 border-1 rounded-md">
                            <div className="font-medium mb-1 w-full text-center">
                                April
                            </div>
                            <div className="flex gap-1">
                                <div className="rounded-sm bg-success h-10 w-7 relative flex items-center justify-center">
                                    <div className="absolute">
                                        02
                                    </div>
                                </div>
                                <div className="rounded-sm bg-success h-10 w-7 relative flex items-center justify-center">
                                    <div className="absolute">
                                        09
                                    </div>
                                </div>  <div className="rounded-sm bg-danger h-10 w-7 relative flex items-center justify-center">
                                    <div className="absolute">
                                        16
                                    </div>
                                </div>  <div className="rounded-sm bg-danger h-10 w-7 relative flex items-center justify-center">
                                    <div className="absolute">
                                        23
                                    </div>
                                </div>
                                <div className="rounded-sm bg-success h-10 w-7 relative flex items-center justify-center">
                                    <div className="absolute">
                                        30
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>),
        },
        {
            id: "prayers",
            title: "Praises and Prayers",
            content: (
                    <Timeline />),
        },
        {
            id: "testimony",
            title: "Testimony",
            content: (
                <div>
                    This person has not expressed his testimony yet.
                    This person has not expressed his testimony yet.
                    This person has not expressed his testimony yet.
                    This person has not expressed his testimony yet.
                    This person has not expressed his testimony yet.
                    This person has not expressed his testimony yet.
                    This person has not expressed his testimony yet.
                    This person has not expressed his testimony yet.
                    This person has not expressed his testimony yet.
                    This person has not expressed his testimony yet.
                    This person has not expressed his testimony yet.
                    This person has not expressed his testimony yet.
                    This person has not expressed his testimony yet.
                    This person has not expressed his testimony yet.
                    This person has not expressed his testimony yet.
                    This person has not expressed his testimony yet.
                    This person has not expressed his testimony yet.
                    This person has not expressed his testimony yet.
                    This person has not expressed his testimony yet.
                    This person has not expressed his testimony yet.
                    This person has not expressed his testimony yet.
                    This person has not expressed his testimony yet.
                    This person has not expressed his testimony yet.
                    This person has not expressed his testimony yet.
                    This person has not expressed his testimony yet.
                    This person has not expressed his testimony yet.
                    This person has not expressed his testimony yet.
                    This person has not expressed his testimony yet.
                    This person has not expressed his testimony yet.
                </div>),
        },

    ];

    return (
        <div className="h-full w-full p-4">
            <div className="w-full flex gap-2 py-2">
                <ArrowLeft/>Back
            </div>
            <div className="grid grid-cols-12 gap-2 h-full">
                {/* Profile Card */}
                <div className="lg:col-span-4 col-span-full ">
                    <div className="bg-card rounded-xl h-full lg:p-5 p-2 flex flex-col items-center ">
                        <div className="mt-7 border-sky-500 border-4 rounded-full overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                                alt="Profile Image"
                                width={500}
                                height={500}
                                className="object-cover rounded-full h-30 w-30"
                            />
                        </div>
                        <div className="text-center">
                            <h2 className="text-2xl text-info font-bold">Jan Dyze Malaluan</h2>
                            <p className="italic">Simple description</p>
                        </div>

                        {/* Tags */}
                        <div className="w-full mt-4 bg-card rounded-lg">
                            <div
                                className="w-full flex justify-between items-center text-xl font-bold p-2"
                                onClick={() => toggleProfileSection("tags")}
                            >
                                <div className="flex gap-2 items-center">
                                    Tags <Button className="h-[25px]" color="info" rounded="full" variant="outlined" icon={<Plus className="w-4 h-4" />} />
                                </div>
                                {openProfileSections.includes("tags") ? <ChevronUp /> : <ChevronDown />}
                            </div>
                            <AnimatePresence>
                                {openProfileSections.includes("tags") && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden px-2 pb-2"
                                    >
                                        {/* <div className="flex gap-2 items-center">
                                            <Button className="h-[25px]" color="info" rounded="full" variant="outlined" icon={<Plus className="w-4 h-4" />} />
                                        </div> */}
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {["Tech Team", "Hiyas Coach", "Worship Team", "Preacher"].map((tag) => (
                                                <span key={tag} className="px-3 py-1 text-sm rounded-full bg-card-inner text-foreground">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Activity Section (Accordion) */}
                        <div className="w-full mt-4 bg-card rounded-lg ">
                            <button
                                className="w-full flex justify-between items-center text-xl font-bold p-2 "
                                onClick={() => toggleProfileSection("activity")}
                            >
                                Activity
                                {openProfileSections.includes("activity") ? <ChevronUp /> : <ChevronDown />}
                            </button>
                            <AnimatePresence>
                                {openProfileSections.includes("activity") && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden px-2"
                                    >
                                        <div className="overflow-auto h-[27vh] p-2 scrollbar-hide">
                                            <Timeline />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Accordion Content */}
                <div className="lg:col-span-8 col-span-full space-y-2 lg:overflow-auto scrollbar-hide">
                    {sections.map(({ id, title, content }) => (
                        <div key={id} className="bg-card rounded-xl">
                            <button onClick={() => toggleSection(id)} className="w-full px-4 py-3 text-xl font-bold flex justify-between">
                                {title}
                                {openSections.includes(id) ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                            </button>

                            <AnimatePresence>
                                {openSections.includes(id) && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className=" px-4 pb-2 overflow-hidden"
                                    >
                                        {content}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
