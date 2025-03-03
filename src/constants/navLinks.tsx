import { Home, User, Settings, Church } from "lucide-react";

export const navLinks = [
  { href: "/dashboard", icon: <Church className="h-6 w-6" />, label: "Dashboard" },
  { href: "/services", icon: <User className="h-6 w-6" />, label: "Services" },
  { href: "/profile", icon: <User className="h-6 w-6" />, label: "Profile" },
];
