"use client";

import { useState } from "react"; // Import useState
import { ThemeSwitcher } from "./ThemeSwitcher";
import { FaBars, FaTimes } from "react-icons/fa"; // Import ikon hamburger & close

export default function Header() {
  // 1. Bikin state buat ngatur buka/tutup menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 2. Fungsi buat toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 dark:bg-gray-950 text-white p-4 sticky top-0 z-50 shadow-lg transition-colors duration-300">
      {/* Kita pake z-50 biar di atas segalanya */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Nama (tetap sama) */}
        <h1 className="text-xl font-bold">
          <a href="#hero" onClick={() => setIsMenuOpen(false)}> {/* Tutup menu pas logo diklik */}
            PORTOFOLIO
          </a>
        </h1>

        {/* --- KONTENER NAVIGASI (INI YANG BERUBAH TOTAL) --- */}
        <div className="flex items-center">
          {/* 3. Tombol Hamburger (Hanya muncul di HP/layar kecil) */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" /> // Ikon close (X)
            ) : (
              <FaBars className="w-6 h-6" /> // Ikon hamburger (garis tiga)
            )}
          </button>

          {/* 4. Menu Navigasi (Desktop & Mobile Dropdown) */}
          <nav
            // Kondisi buat nampilin/nyembunyiin dropdown di HP
            className={`
              absolute top-full left-0 w-full bg-gray-800 dark:bg-gray-950 md:bg-transparent dark:md:bg-transparent 
              md:static md:w-auto md:top-auto md:left-auto 
              transition-all duration-300 ease-in-out z-40 
              ${isMenuOpen ? 'block shadow-lg md:shadow-none' : 'hidden md:flex'} 
              md:items-center md:space-x-4
            `}
          >
            {/* Bungkus <ul> dan ThemeSwitcher */}
            <div className="flex flex-col md:flex-row items-center md:space-x-4 p-4 md:p-0">
              {/* Daftar Link (di HP jadi vertikal) */}
              <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 w-full md:w-auto text-center md:text-left">
                <li>
                  <a href="#hero" className="block py-2 md:py-0 hover:text-gray-300" onClick={toggleMenu}> {/* Tutup menu pas link diklik */}
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="block py-2 md:py-0 hover:text-gray-300" onClick={toggleMenu}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#experiences" className="block py-2 md:py-0 hover:text-gray-300" onClick={toggleMenu}>
                    Experiences
                  </a>  
                </li>
                <li>
                  <a href="#education" className="block py-2 md:py-0 hover:text-gray-300" onClick={toggleMenu}>
                    Educations
                  </a>
                </li>
                <li>
                  <a href="#projects" className="block py-2 md:py-0 hover:text-gray-300" onClick={toggleMenu}>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="block py-2 md:py-0 hover:text-gray-300" onClick={toggleMenu}>
                    Contact
                  </a>
                </li>
              </ul>

              {/* Tombol Theme Switcher (di HP jadi di bawah link) */}
              <div className="mt-4 md:mt-0">
                <ThemeSwitcher />
              </div>
            </div>
          </nav>
        </div>
        {/* --- AKHIR KONTENER NAVIGASI --- */}
      </div>
    </header>
  );
}