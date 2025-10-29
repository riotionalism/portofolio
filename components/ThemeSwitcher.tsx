// Ini file src/components/ThemeSwitcher.tsx

"use client"; // Wajib, karena pake hook dan state

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

export function ThemeSwitcher() {
  // State 'mounted' ini penting buat ngatasin hydration mismatch
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect ini cuma jalan di client, mastiin 'mounted' jadi true
  useEffect(() => {
    setMounted(true);
  }, []);

  // Kalo server/client belum sinkron, jangan render apa-apa
  if (!mounted) {
    return null; 
  }

  // Fungsi buat ganti tema
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-700" // Sesuaikan hover bg
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? (
        <FaSun className="w-5 h-5 text-yellow-400" />
      ) : (
        <FaMoon className="w-5 h-5 text-gray-300" />
      )}
    </button>
  );
}