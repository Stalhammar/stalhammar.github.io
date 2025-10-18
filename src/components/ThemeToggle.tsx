import { useState } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "theme";

export default function Themetoggle({ isOpen }: { isOpen?: boolean }) {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const dark = saved === "dark";
    return dark;
  });

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="flex flex-row items-center gap-3 group/sidebar"
    >
      {isDark ? (
        <Moon size={36} className="text-white" />
      ) : (
        <Sun size={36} className="text-black" />
      )}
      {/* Show text if sidebar is hovered (desktop) OR open (mobile) */}
      <span
        className={`
          whitespace-nowrap transition-opacity duration-300 text-black text-sm dark:text-white
          ${isOpen ? "opacity-100" : "opacity-0"}
          md:opacity-0 md:group-hover/sidebar:opacity-100
        `}
      >
        {isDark ? "Dark Mode" : "Light Mode"}
      </span>
    </button>
  );
}
