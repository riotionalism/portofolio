/** @type {import('next').NextConfig} */
const nextConfig = {
  // Line ini penting buat stabilisasi deployment di Netlify/Vercel
  output: 'standalone', 
  
  // FIX: Daftarkan semua domain yang dibutuhkan
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net', // Devicons (Python, Flask, Supabase, dll.)
        pathname: '/gh/devicons/devicon/**', // Wajib untuk CDN
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org', // Untuk Koyeb (Jika masih pakai link Wikimedia)
        pathname: '/wikipedia/commons/thumb/**', 
      },
      {
        protocol: 'https',
        hostname: 'apidog.com', // Untuk ApiDog
        pathname: '/**', // Izinkan semua path
      },
      {
        protocol: 'https',
        hostname: 'www.koyeb.com', // FIX: Tambah host Koyeb utama
        pathname: '/**', // Izinkan semua path Koyeb
      },
    ],
  },
  
};

export default nextConfig;