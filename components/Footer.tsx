// Ini adalah file src/components/Footer.tsx (VERSI ICON)

// 1. Kita import ikon yang kita butuhin dari library 'react-icons'
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-8 text-center">
        
        {/* === BAGIAN IKON SOSMED === */}
        <div className="mb-4 flex justify-center space-x-6">
          
          {/* GitHub */}
          <a
            href="https://github.com/riotionalism"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            {/* 2. Teks "GitHub" kita ganti jadi komponen ikon ini */}
            <FaGithub className="text-2xl" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/fytrioamando/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin className="text-2xl" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/rioamnd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaInstagram className="text-2xl" />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/rioamnd21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaFacebook className="text-2xl" />
          </a>

        </div>
        {/* ================================ */}

        {/* Copyright (tetap sama) */}
        <p className="text-sm text-gray-400">
          &copy; {currentYear} Fytrio Amando. All rights reserved.
        </p>
        <p className="mt-1 text-xs text-gray-500">
          Built with love and passion using Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}