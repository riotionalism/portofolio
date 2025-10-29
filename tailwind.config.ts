import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // INI YANG KITA BUTUHKAN SEKARANG
  darkMode: "class", 

  theme: {
    extend: {
      // Settingan font dari yg error dulu, sekarang udah bener
      // Nggak akan error, biarin aja di sini
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
} satisfies Config