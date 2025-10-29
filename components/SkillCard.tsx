"use client"; // Butuh 'use client' karena ada state & interaksi

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import buat animasi
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import ikon panah

// Props: title (string) dan skills (array of string)
interface SkillCardProps {
  title: string;
  skills: string[];
}

export default function SkillCard({ title, skills }: SkillCardProps) {
  // State buat ngatur buka/tutup
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi buat toggle
  const toggleOpen = () => setIsOpen(!isOpen);

  // Varian animasi buat kontennya (muncul/hilang)
  const contentVariants = {
    collapsed: { height: 0, opacity: 0, marginTop: 0 },
    open: { 
      height: "auto", 
      opacity: 1, 
      marginTop: "1rem", // Kasih jarak pas kebuka
      transition: { duration: 0.3, ease: "easeInOut" } 
    }
  };

  return (
    // Kartu utama
    <div className="w-full bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-colors duration-300">
      {/* Header Kartu (Bisa diklik) */}
      <button
        onClick={toggleOpen}
        className="w-full flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-300 focus:outline-none"
        aria-expanded={isOpen} // Buat aksesibilitas
        aria-controls={`skill-content-${title.replace(/\s+/g, '-')}`} // ID unik
      >
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
        {/* Ikon panah (ganti sesuai state isOpen) */}
        {isOpen ? (
          <FaChevronUp className="text-gray-600 dark:text-gray-300" />
        ) : (
          <FaChevronDown className="text-gray-600 dark:text-gray-300" />
        )}
      </button>

      {/* Konten Skill (Pake AnimatePresence & motion.div) */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`skill-content-${title.replace(/\s+/g, '-')}`} // ID buat aria-controls
            key="content"
            variants={contentVariants}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            className="overflow-hidden" // Penting biar animasi height jalan
          >
            {/* Ini div buat ngasih padding dalem */}
            <div className="p-4 flex flex-wrap justify-center gap-3">
              {/* Kita map array skills jadi badge */}
              {skills.map((skill, index) => (
                <span key={index} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}