// Ini file tailwind.config.ts (FINAL UNTUK POINS FONT)

import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class", 
  
  theme: {
    extend: {
      // --- FONT POINS BARU DITAMBAHKAN DI SINI ---
      fontFamily: {
        // Tailwind akan menggunakan --font-poppins (yang kita definisikan di layout.tsx)
        sans: ["var(--font-poppins)"],
      },
      // --------------------------------------
    },
  },
  plugins: [],
} satisfies Config