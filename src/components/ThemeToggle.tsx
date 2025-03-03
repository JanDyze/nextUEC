"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(savedTheme as "light" | "dark");
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  if (theme === null) return null; // Prevents hydration error

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="cursor-pointer relative w-14 h-8 flex items-center bg-card rounded-full p-1 transition-all duration-300"
      aria-label="Toggle Dark Mode"
    >
      <div
        className={`absolute flex items-center justify-center w-6 h-6 rounded-full bg-primary transition-all duration-300 ${
          theme === "light" ? "left-1" : "left-7"
        }`}
      >
        {theme === "light" ? <Sun size={16} /> : <Moon size={16} />}
      </div>
    </button>
  );
};

export default ThemeToggle;
