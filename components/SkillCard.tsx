// Ini file src/components/SkillCard.tsx (UPDATED UNTUK TEMATIK)

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp, FaCode, FaServer, FaLaptopCode, FaDatabase, FaCloudUploadAlt, FaGitAlt, FaUserTie } from "react-icons/fa";

// Kita bikin mapping ikon placeholder ke komponen react-icons yang asli
const IconMap: { [key: string]: React.ElementType } = {
  FaCode: FaCode,
  FaServer: FaServer,
  FaLaptopCode: FaLaptopCode,
  FaDatabase: FaDatabase,
  FaCloudUploadAlt: FaCloudUploadAlt,
  FaGitAlt: FaGitAlt,
  FaUserTie: FaUserTie, // Ikon default untuk Soft Skills
};

// Data Skill: bisa array of strings (soft skills) atau array of objects (technical skills)
interface SkillData {
  category: string;
  icon?: string; // Icon placeholder (FaCode, etc)
  skills: string[];
}

interface SkillCardProps {
  title: string;
  data: SkillData[] | string[]; // Data bisa array tematik atau array list biasa
  isThematic?: boolean; // Flag untuk nandain ini Tematik (Technical) atau List (Soft)
}

export default function SkillCard({ title, data, isThematic = false }: SkillCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  // Varian animasi buat kontennya
  const contentVariants = {
    collapsed: { height: 0, opacity: 0, marginTop: 0 },
    open: { 
      height: "auto", 
      opacity: 1, 
      marginTop: "1rem",
      transition: { duration: 0.3, ease: [0.65, 0.05, 0.36, 1] as const } 
    }
  };

  // Kita tentukan konten yang akan di-render:
  const renderContent = () => {
    // KALO DATA BENTUKNYA ARRAY BIASA (SOFT SKILLS)
    if (!isThematic) {
      const skillsArray = data as string[]; // Cast ke array string
      return (
        <div className="p-4 flex flex-wrap justify-center gap-3">
          {skillsArray.map((skill, index) => (
            <span key={index} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      );
    } 
    
    // KALO DATA BENTUKNYA TEMATIK (TECHNICAL SKILLS)
    const thematicData = data as SkillData[]; // Cast ke array tematik
    return (
      <div className="p-4 space-y-6">
        {thematicData.map((theme, index) => {
          const IconComponent = IconMap[theme.icon || 'FaCode']; // Ambil ikon
          return (
            <div key={index}>
              {/* Judul Kategori dan Ikon */}
              <div className="flex items-center mb-2">
                {IconComponent && <IconComponent className="w-5 h-5 mr-3 text-teal-500 dark:text-teal-400 flex-shrink-0" />}
                <h4 className="font-semibold text-gray-800 dark:text-white flex-grow">
                  {theme.category}
                </h4>
              </div>
              {/* List Skill Badge */}
              <div className="flex flex-wrap gap-3 pl-8">
                {theme.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="w-full bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-colors duration-300">
      <button
        onClick={toggleOpen}
        className="w-full flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-300 focus:outline-none"
        aria-expanded={isOpen}
        aria-controls={`skill-content-${title.replace(/\s+/g, '-')}`}
      >
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
        {isOpen ? (
          <FaChevronUp className="text-gray-600 dark:text-gray-300" />
        ) : (
          <FaChevronDown className="text-gray-600 dark:text-gray-300" />
        )}
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`skill-content-${title.replace(/\s+/g, '-')}`}
            key="content"
            variants={contentVariants}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            className="overflow-hidden"
          >
            {renderContent()} {/* Panggil fungsi renderContent */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}