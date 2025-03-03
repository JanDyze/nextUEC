"use client";

import Link from "next/link";
import { Menu, ChevronLeft, User, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "@/components/Button";
import Image from "next/image";
import { navLinks } from "@/constants/navLinks";
import { usePathname } from "next/navigation";
import { useSidebarStore } from "@/store/useSidebarStore";
import PurposeCard from "@/components/PurposeCard"

const Sidebar = () => {
    const { isCollapsed, toggleSidebar } = useSidebarStore();
    const pathname = usePathname();

    return (
        <aside
            className={cn(
                "flex flex-col items-center justify-between h-screen bg-background text-forseground  p-4 transition-[width] duration-300",
                isCollapsed ? "w-23" : "w-58"
            )}
        >
            {/* Logo */}
            <div className="w-full pl-2">
                <div className="flex items-center">
                    <div className="flex">
                        <Image src="/logo.png" alt="Logo" width={50} height={50} className="min-w-[50px]" />
                    </div>
                    <div
                        className={cn(
                            "ml-2  font-bold transition-opacity flex text-xl whitespace-nowrap duration-[300ms]",
                            isCollapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
                        )}
                    >
                        Canubing II
                    </div>
                </div>
            </div>

            {/* Toggle Button */}
            <div className="h-[25%] w-full flex flex-col items-center justify-center relative transition-transform duration-300">
                {/* Rounded Div (Hidden when Collapsed) */}
                <PurposeCard />

                {/* Button (Remains Unaffected) */}
                <Button
                    color="primary"
                    rounded="full"
                    className={`relative z-10 transition-all duration-300 ${isCollapsed ? "translate-x-0" : "translate-x-30"}`}
                    icon={isCollapsed ? <Menu className="h-6 w-6" /> : <ChevronLeft className="h-6 w-6" />}
                    onClick={toggleSidebar}
                />
            </div>


            {/* Navigation */}
            <nav className="mt-6 flex-1 w-full">
                <ul>
                    {navLinks.map(({ href, icon, label }, index) => {
                        const isActive = pathname === href;

                        return (
                            <li key={index}>
                                <Link
                                    href={href}
                                    className={cn(
                                        "flex items-center p-2 rounded dark:bg-primary/20 hover:bg-primary/20 dark:hover:bg-primary/30",
                                        isActive && "bg-primary/30 dark:bg-primary/40" // Active state background
                                    )}>
                                    <Button
                                        icon={icon}
                                        color={isActive ? "selected" : "primary"} // Active button color
                                        rounded="full"
                                    />
                                    <span
                                        className={cn(
                                            "ml-2 overflow-hidden font-bold transition-opacity",
                                            isCollapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
                                        )}
                                    >
                                        {label}
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <nav className="flex-1 w-full flex items-end">
                <ul>
                    <li>
                        <Link
                            href="/profile"
                            className={cn(
                                "flex items-center p-2 rounded dark:bg-primary/20 hover:bg-primary/20 dark:hover:bg-primary/30",
                                pathname === "/profile" && "bg-primary/30 dark:bg-primary/40"
                            )}
                        >
                            <Button icon={<User />} color={pathname === "/profile" ? "selected" : "primary"} rounded="full" />
                            <span
                                className={cn(
                                    "ml-2 overflow-hidden font-bold transition-opacity",
                                    isCollapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
                                )}
                            >
                                Profile
                            </span>
                        </Link>
                    </li>

                    {/* Logout Link */}
                    <li>
                        <Link
                            href="/profile"
                            className={cn(
                                "flex items-center p-2 rounded dark:bg-primary/20 hover:bg-primary/20 dark:hover:bg-primary/30",
                                pathname === "/profile" && "bg-primary/30 dark:bg-primary/40"
                            )}
                        >
                            <Button icon={<LogOut />} color="secondary" rounded="full" />
                            <span
                                className={cn(
                                    "ml-2 overflow-hidden font-bold transition-opacity",
                                    isCollapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
                                )}
                            >
                                Logout
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside >
    );
};

export default Sidebar;
