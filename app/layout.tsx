// Ini file src/app/layout.tsx (VERSI FINAL & FIXED FONT)

import type { Metadata } from "next";
// Kita import Poppins dari next/font/google
import { Poppins } from "next/font/google";
import "./globals.css";

// Import Komponen
import Header from "@/components/Header";
import Footer from "@/components/Footer"; 
import { ThemeProvider } from "@/components/ThemeProvider";

// Definisikan Font Poppins
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap", // Penting untuk performance
  variable: "--font-poppins", // Nama variabel font di CSS
  // Kita ambil semua berat font biar bisa dipake di Tailwind (font-bold, font-light, dll)
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], 
});

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
    // Pasang variabel font di tag <html>
    <html lang="en" suppressHydrationWarning className={`${poppins.variable}`}> 
      <body 
        // FIX: Tambahkan font-sans untuk mengaktifkan font Poppins secara global
        // Juga tambahkan global dark mode fix
        className="antialiased 
                   bg-white text-gray-900 
                   dark:bg-gray-900 dark:text-white 
                   font-sans"
      > 
        <ThemeProvider>
          <Header />
          {children}
          <Footer />  
        </ThemeProvider>
      </body>
    </html>
  );
}