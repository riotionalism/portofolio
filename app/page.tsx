"use client"; // Jangan lupa 'use client'

import Image from "next/image";
import ProjectCarousel from "@/components/ProjectCarousel";
import { motion } from "framer-motion";
import SkillCard from "@/components/SkillCard"; // <-- Import SkillCard

export default function Home() { // <-- Cukup satu kali di sini

// --- GANTI KODE DARI 'const technicalSkills = [...]' SAMPAI 'buttonVariants = [...]' DENGAN INI ---

  // DEFINISI ARRAY SKILLS & VARIANTS ADA DI SINI
  const technicalSkills = [
    "Python", "JavaScript", "TypeScript", "Flask", "RESTFull API", "HTML", "CSS",
    "Tailwind CSS", "Bootstrap", "Next.js", "ReactJS", "PostgreSQL", "SQLite",
    "Netlify", "Vercel", "Koyeb", "Git"
  ];
  const softSkills = [
    "Leadership", "Project Management", "Adaptability", "Collaboration"
  ];

  // Variasi animasi untuk elemen teks (FIXED)
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    // Ganti "easeOut" dengan array cubic-bezier
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } }, 
  };

  // Variasi animasi untuk daftar profesi (TETAP)
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  // Variasi animasi untuk setiap item profesi (TETAP)
  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Variasi animasi untuk foto (FIXED)
  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    // Ganti "easeOut" dengan array cubic-bezier
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.3 } },
  };

  // Variasi animasi untuk tombol (TETAP)
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10, delay: 1.2 } },
  };

  // 👇 --- BAGIAN RETURN MULAI DARI SINI --- 👇
  return (
    <main>

      {/* ================================== */}
      {/* BAGIAN HERO (DENGAN ANIMASI) */}
      {/* ================================== */}
      <section
        id="hero"
        className="bg-white dark:bg-gray-900 container mx-auto flex min-h-screen flex-col items-center justify-center p-8 md:flex-row md:items-center md:justify-center md:gap-12 lg:gap-16 transition-colors duration-300"
      >
        <div className="flex flex-col space-y-4 text-center md:text-left">
          <motion.p variants={textVariants} initial="hidden" animate="visible" className="text-xl text-gray-700 dark:text-gray-300 md:text-2xl transition-colors duration-300">Hi, I'm</motion.p>
          <motion.h2 variants={textVariants} initial="hidden" animate="visible" className="text-4xl font-bold md:text-6xl text-gray-900 dark:text-white transition-colors duration-300">Fytrio Amando</motion.h2>
          <motion.ul variants={listVariants} initial="hidden" animate="visible" className="text-xl text-gray-700 dark:text-gray-300 md:text-2xl transition-colors duration-300 list-none">
            <motion.li variants={listItemVariants}>Islamic Education Teacher</motion.li>
            <motion.li variants={listItemVariants}>Software Engineer Enthusiast</motion.li>
          </motion.ul>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="max-w-md text-gray-500 dark:text-gray-400 transition-colors duration-300 italic">"Kesuksesan adalah kebermanfaatan banyak"</motion.p>
          <motion.div variants={buttonVariants} initial="hidden" animate="visible" className="pt-4">
            <a href="#projects" className="rounded-lg bg-gray-800 px-6 py-3 text-white shadow-lg hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 transition-colors duration-300">My Projects</a>
          </motion.div>
        </div>
        <motion.div variants={imageVariants} initial="hidden" animate="visible" whileHover={{ scale: 1.05 }} className="mt-10 md:mt-0">
          <Image src="/profile.png" alt="Foto Profil Fytrio Amando" width={256} height={256} className="rounded-full shadow-lg"/>
        </motion.div>
      </section>

      {/* ================================== */}
      {/* BAGIAN ABOUT ME (UPDATED SKILLS SECTION) */}
      {/* ================================== */}
      <section id="about" className="bg-gray-100 dark:bg-gray-800 py-16 transition-colors duration-300">
        <div className="container mx-auto px-8 max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl text-gray-900 dark:text-white">About Me</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 text-justify transition-colors duration-300">
            Leveraging experience as an Educator and an Organization Chairman, I excel at merging technical and essential soft skills, successfully honing my expertise in project management, problem-solving, and effective collaboration. Currently, I have a strong passion for the world of software engineering, demonstrated by my self-initiated journey to take courses from RevoU and learn programming languages like Python, JavaScript, and TypeScript as well as modern frameworks such as Flask for backend and Next.js for frontend, with the ultimate goal of building robust and impactful scalable solutions. I am confident that my unique blend of leadership, project management experience, and technical skills makes me an ideal candidate, as I bring a solution-oriented perspective and dedication to achieving measurable results.
          </p>

          {/* --- BAGIAN SKILLS --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <SkillCard title="Technical Skills" skills={technicalSkills} />
            <SkillCard title="Soft Skills" skills={softSkills} />
          </div>
          {/* --------------------- */}

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Certifications</h3>
          <div className="space-y-4 max-w-2xl mx-auto">
            {/* Sertifikat 1 */}
            <div className="cert-card">
              <p className="font-semibold text-gray-800 dark:text-white">
                <a href="https://certificates.revou.tech/?id=FSSE-2025-07-16746009108&name=Fytrio%20Amando" target="_blank" rel="noopener noreferrer">
                  Certificate of Achievement, RevoU Course
                </a>
              </p>
              <span className="text-sm text-gray-500 dark:text-gray-400">Jul 2025</span>
            </div>
            {/* Sertifikat 2 */}
            <div className="cert-card">
              <p className="font-semibold text-gray-800 dark:text-white">
                <a href="https://drive.google.com/file/d/1KUF10UR3u8w06aMQaROtD_hz2fl48MJP/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  Certificate of Best Graduate of the Study Program
                </a>
              </p>
              <span className="text-sm text-gray-500 dark:text-gray-400">Aug 2023</span>
            </div>
          </div>
        </div>
      </section>

{/* ================================== */}
      {/* ================================== */}
      {/* BAGIAN EXPERIENCES (CAROUSEL - WARNA DISESUAIKAN) */}
      {/* ================================== */}
      <section id="experiences" className="bg-white dark:bg-gray-900 py-16 transition-colors duration-300 overflow-hidden">
        <div className="container mx-auto px-0 md:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl text-gray-900 dark:text-white">
            Experiences
          </h2>

          <ProjectCarousel>
            
            {/* Kartu 1: Working Experiences */}
            {/* Warna kartu sedikit lebih terang */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg h-full flex flex-col"> 
              {/* Judul Kartu */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center md:text-left"> 
                Working Experiences
              </h3>
              {/* Header Posisi */}
              <div className="flex flex-col md:flex-row justify-between items-start mb-2"> 
                <div>
                  {/* Nama Posisi (Lebih Gelap) */}
                  <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100"> 
                    Islamic Education Teacher
                  </h4>
                  {/* Nama Tempat (Sedikit Lebih Terang) */}
                  <p className="text-md text-gray-600 dark:text-gray-400"> 
                    Al Kautsar Primary School Bandar Lampung
                  </p>
                </div>
                {/* Tanggal (Warna Abu2 standar) */}
                <span className="text-sm text-gray-500 dark:text-gray-400 text-left md:text-right flex-shrink-0 mt-2 md:mt-0 md:ml-4"> 
                  Jul 2024 – Ongoing
                </span>
              </div>
              {/* Daftar Poin (Warna diatur di globals.css) */}
              <ul className="experiences-list mt-4 space-y-2"> 
                <li>
                   Led the library accreditation project, collaborating with the team to collect and organize all necessary data, successfully obtaining an 'A' accreditation that enhanced the school's credibility and the foundation's reputation
                </li>
                <li>
                  Managed the school's online enrollment system, overseeing the registration website and new student database, which made the enrollment process much faster and easier for parents and significantly reduced the administrative team's workload.
                </li>
                <li>
                  Responsible for developing engaging and effective learning materials and curricula by first analyzing student needs and then designing customized materials, which made the learning process more dynamic and enabled students to master the material more quickly.
                </li>
                <li>
                  Mentored and developed the unique potential of each student outside of academics, helping them become champions in various competitions like speech, poetry, and taekwondo at both regional and national levels.
                </li>
              </ul>
            </div>

            {/* Kartu 2: Organization Experiences */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg h-full flex flex-col"> 
               <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center md:text-left"> 
                Organization Experiences
              </h3>
              <div className="flex flex-col md:flex-row justify-between items-start mb-2"> 
                <div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100"> 
                    Chairman, BPL HMI Ciputat
                  </h4>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 text-left md:text-right flex-shrink-0 mt-2 md:mt-0 md:ml-4"> 
                  Feb 2023 - Feb 2024
                </span>
              </div>
              <ul className="experiences-list mt-4 space-y-2"> 
                <li>
                  Formulated training program strategy and vision, which increased program effectiveness and relevance by aligning initiatives with the organization's strategic vision.
                </li>
                <li>
                  Led and managed the BPL team, ensuring the successful execution of all activities and significantly increasing team productivity.
                </li>
                <li>
                  Managed inter-organizational relations, successfully expanding the partnership network and securing crucial external support for major events.
                </li>
                <li>
                  Implemented a data-driven evaluation system, which improved the overall quality and impact of training programs through measurable enhancements.
                </li>
              </ul>
            </div>

          </ProjectCarousel>

        </div>
      </section>

{/* ================================== */}
      {/* BAGIAN PENDIDIKAN (DENGAN LOGO YANG BENAR) */}
      {/* ================================== */}
      <section id="education" className="bg-gray-100 dark:bg-gray-800 py-16 transition-colors duration-300">
        <div className="container mx-auto px-8">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl text-gray-900 dark:text-white transition-colors duration-300">
            Education Background
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">

            {/* KARTU PENDIDIKAN 1: RevoU */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transition-colors duration-300">
              {/* Header Kartu dengan Logo */}
              <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                <div className="flex items-center mb-2 md:mb-0">
                  {/* Logo RevoU */}
                  <Image
                    src="/revou.png" // <-- NAMA FILE UDAH BENER
                    alt="Logo RevoU"
                    width={40}
                    height={40}
                    className="mr-4 flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      RevoU
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                      Full-stack Software Engineering
                    </p>
                  </div>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 text-left md:text-right flex-shrink-0 mt-2 md:mt-0 md:ml-4">
                  Okt 2024 – Mei 2025
                </span>
              </div>
              {/* Konten Detail */}
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                During a full-stack software engineering program, I learned several programming languages, such as Python and JavaScript. I also delved into the Next.js front-end framework and Python back-end frameworks, including Flask. In addition, I studied Database Management with SQL and the Git Version Control System for collaboration. I also learned deployment using Koyeb for the backend and Vercel and Netlify for the frontend. This experience culminated in building a fully functional e-commerce website, where I applied all the acquired skills to create a scalable application from start to finish.
              </p>
              <a
                href="#" // <-- GANTI LINK KARYARASA DI SINI
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gray-800 dark:text-white hover:underline"
              >
                Final Project: Karyarasa
              </a>
            </div>

            {/* KARTU PENDIDIKAN 2: UIN Jakarta */}
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transition-colors duration-300">
               {/* Header Kartu dengan Logo */}
              <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                 <div className="flex items-center mb-2 md:mb-0">
                   {/* Logo UIN Jakarta */}
                   <Image
                     src="/uinjkt.jpg" // <-- NAMA FILE UDAH BENER
                     alt="Logo UIN Jakarta"
                     width={40}
                     height={40}
                     className="mr-4 flex-shrink-0 object-contain" // Tambah object-contain biar nggak gepeng
                   />
                   <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      UIN Syarif Hidayatullah Jakarta
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                      Bachelor Degree in Islamic Religious Education
                    </p>
                  </div>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 text-left md:text-right flex-shrink-0 mt-2 md:mt-0 md:ml-4">
                  Jul 2018 – Jul 2023
                </span>
              </div>
               {/* Konten Detail */}
              <p className="text-gray-600 dark:text-gray-300 font-medium">
                GPA: 3.91 / 4.00
              </p>
              <p className="text-gray-600 dark:text-gray-300 italic mt-2">
                Thesis: "Nilai-nilai Moderasi Beragama dalam Konsep Pemikiran Pembaruan Pendidikan Islam Mohammad Natsir."
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================================== */}
      {/* BAGIAN PROYEK (KARTU LENGKAP & UKURAN KONSISTEN) */}
      {/* ================================== */}
      <section id="proyek" className="bg-white dark:bg-gray-900 py-16 transition-colors duration-300 overflow-hidden">
        <div className="container mx-auto px-0 md:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl text-gray-900 dark:text-white transition-colors duration-300">
            My Projects
          </h2>
          
          <ProjectCarousel>
            
            {/* Kartu Proyek 1 - KaryaRasa BackEnd */}
            <div className="h-full flex flex-col"> 
              <div className="overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-800 shadow-lg transition-colors duration-300 flex flex-col flex-grow">
                <Image
                  src="/supabase-schema.png"
                  alt="Schema Database KaryaRasa"
                  width={500}
                  height={281}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    KaryaRasa BackEnd - RevoU Course
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300 text-justify flex-grow mb-4">
                    KaryaRasa is a team project to build a robust Python/Flask backend API for a local e-commerce application, aimed at digitally connecting artisans with customers to facilitate the sale of handicrafts. As a core contributor in this RevoU final project, I was fully responsible for the development and testing of API endpoints that documented and verified with API Dog, and assisted in managing the PostgreSQL database to ensure data integrity and support core features such as JWT User Authentication, Product CRUD, and Per-user Cart Management. Beyond the backend focus, I also helped the frontend team with TypeScript/Next.js in creating chart visualizations and managed the deployment on the Koyeb platform to ensure stable application uptime.
                  </p>
                  <div className="mt-auto flex flex-wrap gap-3">
                    <a
                      href="https://dying-helli-ridwanam9-4b98d171.koyeb.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded bg-teal-600 px-4 py-2 text-white text-sm font-medium hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 transition-colors duration-300"
                    >
                      Live Deployment
                    </a>
                    <a
                      href="https://github.com/ridwanam9/KaryaRasa_backend"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded bg-gray-800 px-4 py-2 text-white text-sm font-medium hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500 transition-colors duration-300"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Kartu Proyek 2 - RevoBank API */}
            <div className="h-full flex flex-col"> 
              <div className="overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-800 shadow-lg transition-colors duration-300 flex flex-col flex-grow">
                <Image
                  src="/supabase-schema.png" // Menggunakan gambar yang sama
                  alt="Schema Database RevoBank"
                  width={500}
                  height={281}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    RevoBank API - RevoU Course
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300 text-justify flex-grow mb-4">
                    RevoBank API is a RESTful core banking API developed as a RevoU assignment using Python and Flask, implementing critical features such as User Management, Account Management, and Transaction Management including deposits, withdrawals, and transfers. I was fully responsible for building the solid code and architectural foundation for this API, including designing the supabase schema—specifically the Users and Accounts tables—and implementing SQLAlchemy for PostgreSQL and SQLite integration. Furthermore, my key roles included preparing comprehensive API documentation, and I gained valuable experience troubleshooting technical deployment issues on the Koyeb platform, which was crucial for ensuring the API's uptime and stability.
                  </p>
                  <div className="mt-auto flex flex-wrap gap-3">
                    <a
                      href="https://complete-kalli-riotionalism-e9317c17.koyeb.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded bg-teal-600 px-4 py-2 text-white text-sm font-medium hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 transition-colors duration-300"
                    >
                      Live Deployment
                    </a>
                    <a
                      href="https://github.com/riotionalism/RevoBank-API"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded bg-gray-800 px-4 py-2 text-white text-sm font-medium hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500 transition-colors duration-300"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Kartu Proyek 3 - Nizamia International School */}
            <div className="h-full flex flex-col"> 
              <div className="overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-800 shadow-lg transition-colors duration-300 flex flex-col flex-grow">
                <Image
                  src="/nizamia.png" // Menggunakan gambar yang baru
                  alt="Nizamia International School Website"
                  width={500}
                  height={281}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Nizamia International School - RevoU Course
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300 text-justify flex-grow mb-4">
                    Nizamia International School Website is a fully responsive, semantic HTML5 project featuring the school's details, programs, and admissions form, deployed via Netlify and GitHub. The modern aesthetic, driven by sophisticated CSS, uses a cohesive purple and sand color palette with gradients and subtle animations to ensure a dynamic and professional user experience, while the custom deployment process integrates DNS management through Niagahoster for continuous hosting.
                  </p>
                  <div className="mt-auto flex flex-wrap gap-3">
                    <a
                      href="https://kamar-belajaryo.site/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded bg-teal-600 px-4 py-2 text-white text-sm font-medium hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 transition-colors duration-300"
                    >
                      Live Deployment
                    </a>
                    <a
                      href="https://github.com/revou-fsse-oct24/milestone-1-riotionalism"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded bg-gray-800 px-4 py-2 text-white text-sm font-medium hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500 transition-colors duration-300"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </ProjectCarousel>
          
        </div>
      </section>

      {/* ================================== */}
      {/* BAGIAN KONTAK */}
      {/* ================================== */}
      <section id="contact" className="bg-gray-100 dark:bg-gray-800 py-16 transition-colors duration-300">
         <div className="container mx-auto px-8 text-center">
           <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl text-gray-900 dark:text-white transition-colors duration-300">Contact Me</h2>
           <p className="mx-auto max-w-lg text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300">Click Button Bellow!</p> 
           <br></br>
           <div className="mt-8">
             <a href="mailto:fytrioamando@gmail.com" className="rounded-lg bg-gray-800 px-8 py-4 text-xl text-white shadow-lg hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 transition-colors duration-300">Kirim Email</a>
           </div>
         </div>
       </section>
       

    </main>
  );
}