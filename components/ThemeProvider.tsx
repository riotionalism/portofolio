// Ini file src/components/ThemeProvider.tsx

// 'use client' wajib ada karena ini pake Context
"use client"; 

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    // attribute="class" ini yang bakal nambahin class "dark" ke tag <html>
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
}