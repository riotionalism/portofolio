// Ini file src/app/layout.tsx (VERSI TERAKHIR YANG BENAR)

import type { Metadata } from "next";
import "./globals.css";

// Import Komponen
import Header from "@/components/Header";
import Footer from "@/components/Footer"; // <-- PASTIKAN IMPORT INI ADA
import { ThemeProvider } from "@/components/ThemeProvider";

// --- FONT MASIH DIMATIIN (BIAR AMAN) ---
// import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono';
// const geistSans = { variable: "" };
// const geistMono = { variable: "" };
// ----------------------------------------

export const metadata: Metadata = {
  title: "Portofolio Fytrio Amando",
  description: "Dibuat dengan Next.js dan Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning> 
      <body className="antialiased"> 
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}