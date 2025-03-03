"use client";

import Link from "next/link";
import { Home, User, LogOut, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants/navLinks";
import Button from "@/components/Button";

const BottomBar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 h-[10vh] w-full bg-main shadow-md flex items-center  justify-around px-2 py-1 z-50">
      {navLinks.map(({ href, icon, label }, index) => {
        const isActive = pathname === href;

        return (
          <Link key={index} href={href} className="flex-1 flex flex-col items-center space-y-1 h-full">
            <Button
              icon={icon}
              color={isActive ? "selected" : "primary"}
              rounded="full"
              className="p-2"
            />
            <span className={cn("text-xs font-semibold")}>
              {label}
            </span>
          </Link>
        );
      })}

      {/* Profile & Logout
      <Link href="/profile" className="flex flex-col items-center space-y-1">
        <Button icon={<User />} color={pathname === "/profile" ? "selected" : "primary"} rounded="full" className="p-2" />
        <span className={cn("text-xs font-semibold", pathname === "/profile" && "text-primary")}>
          Profile
        </span>
      </Link>

      <Link href="/logout" className="flex flex-col items-center space-y-1">
        <Button icon={<LogOut />} color="secondary" rounded="full" className="p-2" />
        <span className="text-xs font-semibold text-red-500">Logout</span>
      </Link> */}
    </nav>
  );
};

export default BottomBar;
