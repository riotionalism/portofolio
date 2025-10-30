"use client";

import Image from "next/image";
import ProjectCarousel from "@/components/ProjectCarousel";
import { motion, AnimatePresence, useMotionValue, useSpring, MotionConfig } from "framer-motion"; // Import motion hooks baru
import SkillCard from "@/components/SkillCard";
import { useState, useEffect, useRef } from "react"; 

// --- CUSTOM HOOK UNTUK TYPING EFFECT ---
const useTypingEffect = (texts: string[], typingSpeed = 100, deletingSpeed = 50, delay = 1500) => {
    const [displayedText, setDisplayedText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const fullText = texts[textIndex];
        let timeout: NodeJS.Timeout;

        if (isDeleting) {
            timeout = setTimeout(() => {
                setDisplayedText(fullText.substring(0, displayedText.length - 1));
            }, deletingSpeed);
        } else {
            timeout = setTimeout(() => {
                setDisplayedText(fullText.substring(0, displayedText.length + 1));
            }, typingSpeed);
        }

        if (!isDeleting && displayedText === fullText) {
            timeout = setTimeout(() => setIsDeleting(true), delay);
        } else if (isDeleting && displayedText === "") {
            setIsDeleting(false);
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, delay]);

    return displayedText;
};

// --- KOMPONEN HOBI MELAYANG ---
const HobbyItem = ({ hobby }: { hobby: string }) => {
  // Koordinat mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Ref untuk elemen hobi
  const ref = useRef<HTMLDivElement>(null);
  
  // Spring physics untuk gerakan halus
  const springConfig = { stiffness: 400, damping: 20, mass: 1 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    // Hitung posisi relatif kursor di dalam kontainer About
    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    // Update MotionValue
    mouseX.set(x / 5); // Bagi 5 untuk membuat pergerakan lebih halus
    mouseY.set(y / 5);
  };
  
  const handleMouseLeave = () => {
    // Kembalikan ke posisi tengah (0) saat kursor pergi
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
        rotateX: springY, // Tambah efek rotasi 3D ringan
        rotateY: springX,
        scale: 1.05,
        cursor: 'default',
        transformStyle: 'preserve-3d',
      }}
      className="hobby-card transform-gpu"
    >
        {hobby}
    </motion.div>
  );
};
// ------------------------------------

export default function Home() {

  const jobTitles = ["Islamic Education Teacher", "Software Engineer Enthusiast"];
  const currentTitle = useTypingEffect(jobTitles); 
  const technicalSkills = [
    { category: "Programming Languages", icon: "FaCode", skills: ["Python", "JavaScript", "TypeScript"], },
    { category: "Backend Development", icon: "FaServer", skills: ["Flask", "RESTFull API"], },
    { category: "Frontend Development", icon: "FaLaptopCode", skills: ["HTML", "CSS", "Tailwind CSS", "Bootstrap", "Next.js", "ReactJS"], },
    { category: "Database Management", icon: "FaDatabase", skills: ["PostgreSQL", "SQLite"], },
    { category: "DevOps & Infrastructure", icon: "FaCloudUploadAlt", skills: ["Netlify", "Vercel", "Koyeb"], },
    { category: "Version Control System", icon: "FaGitAlt", skills: ["Git"], },
  ];
  const softSkills = ["Leadership", "Project Management", "Adaptability", "Collaboration"];

  // Variasi animasi untuk elemen teks
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] as const } }, 
  };
  const rotatingTextVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const } },
    exit: { opacity: 0, y: -10, position: "absolute", transition: { duration: 0.3 } },
  };
  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] as const, delay: 0.3 } },
  };
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 10, delay: 1.2 } },
  };
  
  // Data Hobi
  const hobbies = [
    "Reading Books", "Cooking", "Playing Music", 
    "Sketching", "Daydreaming", "Gaming", 
    "Writing Poetry", "Listening to Podcasts"
  ];

  const slideFromLeft = {
  hidden: { opacity: 0, x: -100 }, // Muncul dari kiri
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.2 } }, // Tambah delay
};

const slideFromRight = {
  hidden: { opacity: 0, x: 100 }, // Muncul dari kanan
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.4 } }, // Delay lebih lama
};


  return (
    <main>

      {/* ================================== */}
      {/* BAGIAN HERO (FIXED) */}
      {/* ================================== */}
      <section id="hero" className="bg-white dark:bg-gray-900 container mx-auto flex min-h-screen flex-col items-center justify-center p-8 md:flex-row md:items-center md:justify-center md:gap-12 lg:gap-16 transition-colors duration-300">
        <div className="flex flex-col space-y-4 text-center md:text-left">
          <motion.p variants={textVariants} initial="hidden" animate="visible" className="text-xl text-gray-700 dark:text-gray-300 md:text-2xl transition-colors duration-300">Hi, I'm</motion.p>
          <motion.h2 variants={textVariants} initial="hidden" animate="visible" className="text-4xl font-bold md:text-6xl text-gray-900 dark:text-white transition-colors duration-300">Fytrio Amando</motion.h2>
          
          <div className="text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white transition-colors duration-300 min-h-[3rem] relative"> 
            <motion.span className="text-glow font-normal text-teal-600 dark:text-teal-400"> {/* Ganti font-extrabold jadi font-normal, tambah warna aksen */}
                {currentTitle}
                <motion.span animate={{ opacity: [0, 1, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8, times: [0, 0.5, 0.5, 1] }} className="inline-block w-[2px] h-full bg-gray-600 dark:bg-white ml-1 align-top"/>
            </motion.span>
          </div>
          
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="max-w-md text-gray-500 dark:text-gray-400 transition-colors duration-300 italic">"rencana nya quotes, tapi kita tandain dulu ini ya, rencana mau tambah animasi"</motion.p>
          <motion.div variants={buttonVariants} initial="hidden" animate="visible" className="pt-4">
            <a href="#proyek" className="rounded-lg bg-gray-800 px-6 py-3 text-white shadow-lg hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 transition-colors duration-300">My Projects</a>
          </motion.div>
        </div>
        <motion.div variants={imageVariants} initial="hidden" animate="visible" whileHover={{ scale: 1.05 }} className="mt-10 md:mt-0">
          <Image src="/profile.png" alt="Foto Profil Fytrio Amando" width={256} height={256} className="rounded-full shadow-lg"/>
        </motion.div>
      </section>

      {/* ================================== */}
      {/* BAGIAN ABOUT ME */}
      {/* ================================== */}
      <motion.section 
        id="about" 
        // 1. Ganti variants ke slide-in
        initial={{ opacity: 0, x: 50 }} 
        whileInView={{ opacity: 1, x: 0 }} // Meluncur dari kanan saat terlihat
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const, delay: 0.3 }} // delay
        viewport={{ once: true, amount: 0.2 }} // Penting: Hanya animasikan sekali saat masuk
        className="bg-gray-100 dark:bg-gray-800 py-16 transition-colors duration-300"
      >
        <div className="container mx-auto px-8"> 
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl text-gray-900 dark:text-white">
            About Me
          </h2>

          {/* LAYOUT UTAMA: Dua Kolom Besar (60% Kiri : 40% Kanan) */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch"> 
            
            {/* -------------------------------------------------- */}
            {/* KOLOM KIRI (3/5): DESKRIPSI & SKILLS (Bagian 1 & 2) */}
            {/* -------------------------------------------------- */}
            <div className="lg:col-span-3 flex flex-col space-y-8"> 
              
              {/* BAGIAN 1: DESKRIPSI (Leveraging...) */}
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-xl transition-colors duration-300 flex-shrink-0">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  About Me
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 text-justify transition-colors duration-300">
                  Leveraging experience as an Educator and an Organization Chairman, I excel at merging technical and essential soft skills, successfully honing my expertise in project management, problem-solving, and effective collaboration. Currently, I have a strong passion for the world of software engineering, demonstrated by my self-initiated journey to take courses from RevoU and learn programming languages like Python, JavaScript, and TypeScript as well as modern frameworks such as Flask for backend and Next.js for frontend, with the ultimate goal of building robust and impactful scalable solutions. I am confident that my unique blend of leadership, project management experience, and technical skills makes me an ideal candidate, as I bring a solution-oriented perspective and dedication to achieving measurable results.
                </p>
              </div>
              
              {/* BAGIAN 2: SKILLS CARDS (Technical & Soft) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow"> 
                <SkillCard title="Technical Skills" data={technicalSkills} isThematic={true} />
                <SkillCard title="Soft Skills" data={softSkills} isThematic={false} />
              </div>
            </div>

            {/* --------------------------------------------------- */}
            {/* /* KOLOM KANAN (2/5): CERTIFICATIONS & HOBBIES (Bagian 3 & 4) */}
            {/* --------------------------------------------------- */}
            <div className="lg:col-span-2 flex flex-col space-y-8"> 
              
              {/* BAGIAN 3: CERTIFICATIONS */}
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-xl transition-colors duration-300 flex-shrink-0">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Certifications</h3>
                <div className="space-y-4">
                  <a href="https://certificates.revou.tech/?id=FSSE-2025-07-16746009108&name=Fytrio%20Amando" target="_blank" rel="noopener noreferrer" className="block hover:no-underline">
                    <div className="cert-card">
                      <p className="font-semibold text-gray-800 dark:text-white">Certificate of Achievement, RevoU Course</p>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Jul 2025</span>
                    </div>
                  </a>
                  <a href="https://drive.google.com/file/d/1KUF10UR3u8w06aMQaROtD_hz2fl48MJP/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="block hover:no-underline">
                    <div className="cert-card">
                      <p className="font-semibold text-gray-800 dark:text-white">Certificate of Best Graduate of the Study Program</p>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Aug 2023</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* BAGIAN 4: HOBBIES MELAYANG (DRAG AND HOLD) */}
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-xl transition-colors duration-300 relative overflow-hidden flex-grow flex flex-col"> 
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  My Hobbies
                </h3>
                <div className="flex-grow relative overflow-hidden"> 
                  {hobbies.map((hobby, index) => (
                    <HobbyItem key={index} hobby={hobby} />
                  ))}
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </motion.section>

      {/* ================================== */}
      {/* /* BAGIAN EXPERIENCES (FADE IN ANIMATION) */}
      {/* ================================== */}
      <motion.section 
        id="experiences" 
        // Tambahkan variants untuk Fade In sederhana
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" as const }}
        viewport={{ once: true, amount: 0.2 }}
        className="bg-white dark:bg-gray-900 py-16 transition-colors duration-300 overflow-hidden"
      >
        <div className="container mx-auto px-0 md:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl text-gray-900 dark:text-white">
            Experiences
          </h2>

          <ProjectCarousel>
            
            {/* Kartu 1: Working Experiences */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg h-full flex flex-col"> 
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center md:text-left"> 
                Working Experiences
              </h3>
              <div className="flex flex-col md:flex-row justify-between items-start mb-2"> 
                <div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100"> 
                    Islamic Education Teacher
                  </h4>
                  <p className="text-md text-gray-600 dark:text-gray-400"> 
                    Al Kautsar Primary School Bandar Lampung
                  </p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 text-left md:text-right flex-shrink-0 mt-2 md:mt-0 md:ml-4"> 
                  Jul 2024 – Ongoing
                </span>
              </div>
              <ul className="experiences-list mt-4 space-y-2"> 
                <li>Led the library accreditation project, collaborating with the team to collect and organize all necessary data, successfully obtaining an 'A' accreditation that enhanced the school's credibility and the foundation's reputation</li>
                <li>Managed the school's online enrollment system, overseeing the registration website and new student database, which made the enrollment process much faster and easier for parents and significantly reduced the administrative team's workload.</li>
                <li>Responsible for developing engaging and effective learning materials and curricula by first analyzing student needs and then designing customized materials, which made the learning process more dynamic and enabled students to master the material more quickly.</li>
                <li>Mentored and developed the unique potential of each student outside of academics, helping them become champions in various competitions like speech, poetry, and taekwondo at both regional and national levels.</li>
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
                <li>Formulated training program strategy and vision, which increased program effectiveness and relevance by aligning initiatives with the organization's strategic vision.</li>
                <li>Led and managed the BPL team, ensuring the successful execution of all activities and significantly increasing team productivity.</li>
                <li>Managed inter-organizational relations, successfully expanding the partnership network and securing crucial external support for major events.</li>
                <li>Implemented a data-driven evaluation system, which improved the overall quality and impact of training programs through measurable enhancements.</li>
              </ul>
            </div>

          </ProjectCarousel>

        </div>
      </motion.section>

      {/* ================================== */}
      /* BAGIAN PENDIDIKAN (GRID 2 KOLOM LEBAR & HOVER EFFECT) */
      {/* ================================== */}
      <motion.section 
        id="education" 
        // Jadikan Container Induk untuk Animasi
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" as const }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gray-100 dark:bg-gray-800 py-16 transition-colors duration-300"
      >
        <div className="container mx-auto px-8">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl text-gray-900 dark:text-white transition-colors duration-300">
            Education Background
          </h2>
          
          {/* CONTAINER BARU: GRID 2 KOLOM (Kiri Kanan) */}
          <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"> 

            {/* KARTU PENDIDIKAN 1: RevoU (SLIDE DARI KIRI) */}
            <motion.div variants={slideFromLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className="h-full group"> {/* Tambah class 'group' */}
              {/* FIX: Tambahkan hover:scale-105 dan hover:shadow-2xl */}
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-xl transition-all duration-300 h-full flex flex-col justify-between group-hover:scale-[1.02] group-hover:shadow-2xl"> 
                <div>
                  <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                    <div className="flex items-center mb-2 md:mb-0">
                      <Image src="/revou.png" alt="Logo RevoU" width={40} height={40} className="mr-4 flex-shrink-0"/>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">RevoU</h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300">Full-stack Software Engineering</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 text-left md:text-right flex-shrink-0 mt-2 md:mt-0 md:ml-4">Okt 2024 – Mei 2025</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-justify">
                    During a full-stack software engineering program, I learned several programming languages, such as Python and JavaScript. I also delved into the Next.js front-end framework and Python back-end frameworks, including Flask. In addition, I studied Database Management with SQL and the Git Version Control System for collaboration. I also learned deployment using Koyeb for the backend and Vercel and Netlify for the frontend. This experience culminated in building a fully functional e-commerce website, where I applied all the acquired skills to create a scalable application from start to finish.
                  </p>
                </div>
                <a href="#" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-800 dark:text-white hover:underline mt-auto">Final Project: Karyarasa</a>
              </div>
            </motion.div>

            {/* KARTU PENDIDIKAN 2: UIN Jakarta (SLIDE DARI KANAN) */}
            <motion.div variants={slideFromRight} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className="h-full group"> {/* Tambah class 'group' */}
              {/* FIX: Tambahkan hover:scale-105 dan hover:shadow-2xl */}
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-xl transition-all duration-300 h-full flex flex-col justify-between group-hover:scale-[1.02] group-hover:shadow-2xl"> 
                <div>
                  <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                    <div className="flex items-center mb-2 md:mb-0">
                      <Image src="/uinjkt.jpg" alt="Logo UIN Jakarta" width={40} height={40} className="mr-4 flex-shrink-0 object-contain"/>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">UIN Syarif Hidayatullah Jakarta</h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300">Bachelor Degree in Islamic Religious Education</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 text-left md:text-right flex-shrink-0 mt-2 md:mt-0 md:ml-4">Jul 2018 – Jul 2023</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">GPA: 3.91 / 4.00</p>
                  <p className="text-gray-600 dark:text-gray-300 italic mt-2 text-justify">
                    Thesis: "Nilai-nilai Moderasi Beragama dalam Konsep Pemikiran Pembaruan Pendidikan Islam Mohammad Natsir."
                  </p>
                </div>
                {/* Kosongkan footer di sini, biar tinggi tetap sama dengan RevoU */}
                <a href="#" className="invisible font-semibold text-gray-800 dark:text-white hover:underline mt-auto">Final Project: Karyarasa</a> 
              </div>
            </motion.div>
          
          </div>
        </div>
      </motion.section>

      {/* ================================== */}
      {/* BAGIAN PROYEK */}
      {/* ================================== */}
      <motion.section 
        id="proyek" 
        // Animasi Fade Down (Dari Atas ke Bawah)
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" as const }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-white dark:bg-gray-900 py-16 transition-colors duration-300 overflow-hidden"
      >
        <div className="container mx-auto px-0 md:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl text-gray-900 dark:text-white transition-colors duration-300">
            My Projects
          </h2>
          
          <ProjectCarousel>
            
            {/* Kartu Proyek 1 - KaryaRasa BackEnd */}
            <div className="h-full flex flex-col"> 
              <div className="overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-800 shadow-lg transition-colors duration-300 flex flex-col flex-grow">
                <Image src="/supabase-schema.png" alt="Schema Database KaryaRasa" width={500} height={281} className="w-full h-56 object-cover"/>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">KaryaRasa BackEnd - RevoU Course</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300 text-justify flex-grow mb-4">
                    KaryaRasa is a team project to build a robust Python/Flask backend API for a local e-commerce application, aimed at digitally connecting artisans with customers to facilitate the sale of handicrafts. As a core contributor in this RevoU final project, I was fully responsible for the development and testing of API endpoints that documented and verified with API Dog, and assisted in managing the PostgreSQL database to ensure data integrity and support core features such as JWT User Authentication, Product CRUD, and Per-user Cart Management. Beyond the backend focus, I also helped the frontend team with TypeScript/Next.js in creating chart visualizations and managed the deployment on the Koyeb platform to ensure stable application uptime.
                  </p>
                  <div className="mt-auto flex flex-wrap gap-3">
                    <a href="https://dying-helli-ridwanam9-4b98d171.koyeb.app" target="_blank" rel="noopener noreferrer" className="inline-block rounded bg-teal-600 px-4 py-2 text-white text-sm font-medium hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 transition-colors duration-300">Live Demo</a>
                    <a href="https://github.com/ridwanam9/KaryaRasa_backend" target="_blank" rel="noopener noreferrer" className="inline-block rounded bg-gray-800 px-4 py-2 text-white text-sm font-medium hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500 transition-colors duration-300">Code</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Kartu Proyek 2 - RevoBank API */}
            <div className="h-full flex flex-col"> 
              <div className="overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-800 shadow-lg transition-colors duration-300 flex flex-col flex-grow">
                <Image src="/supabase-schema.png" alt="Schema Database RevoBank" width={500} height={281} className="w-full h-56 object-cover"/>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">RevoBank API - RevoU Course</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300 text-justify flex-grow mb-4">
                    RevoBank API is a RESTful core banking API developed as a RevoU assignment using Python and Flask, implementing critical features such as User Management, Account Management, and Transaction Management including deposits, withdrawals, and transfers. I was fully responsible for building the solid code and architectural foundation for this API, including designing the supabase schema—specifically the Users and Accounts tables—and implementing SQLAlchemy for PostgreSQL and SQLite integration. Furthermore, my key roles included preparing comprehensive API documentation, and I gained valuable experience troubleshooting technical deployment issues on the Koyeb platform, which was crucial for ensuring the API's uptime and stability.
                  </p>
                  <div className="mt-auto flex flex-wrap gap-3">
                    <a href="https://complete-kalli-riotionalism-e9317c17.koyeb.app" target="_blank" rel="noopener noreferrer" className="inline-block rounded bg-teal-600 px-4 py-2 text-white text-sm font-medium hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 transition-colors duration-300">Live Demo</a>
                    <a href="https://github.com/riotionalism/RevoBank-API" target="_blank" rel="noopener noreferrer" className="inline-block rounded bg-gray-800 px-4 py-2 text-white text-sm font-medium hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500 transition-colors duration-300">Code</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Kartu Proyek 3 - Nizamia International School */}
            <div className="h-full flex flex-col"> 
              <div className="overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-800 shadow-lg transition-colors duration-300 flex flex-col flex-grow">
                <Image src="/nizamia.png" alt="Nizamia International School Website" width={500} height={281} className="w-full h-56 object-cover"/>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Nizamia International School - RevoU Course</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300 text-justify flex-grow mb-4">
                    Nizamia International School Website is a fully responsive, semantic HTML5 project featuring the school's details, programs, and admissions form, deployed via Netlify and GitHub. The modern aesthetic, driven by sophisticated CSS, uses a cohesive purple and sand color palette with gradients and subtle animations to ensure a dynamic and professional user experience, while the custom deployment process integrates DNS management through Niagahoster for continuous hosting.
                  </p>
                  <div className="mt-auto flex flex-wrap gap-3">
                    <a href="https://kamar-belajaryo.site/" target="_blank" rel="noopener noreferrer" className="inline-block rounded bg-teal-600 px-4 py-2 text-white text-sm font-medium hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 transition-colors duration-300">Live Demo</a>
                    <a href="https://github.com/revou-fsse-oct24/milestone-1-riotionalism" target="_blank" rel="noopener noreferrer" className="inline-block rounded bg-gray-800 px-4 py-2 text-white text-sm font-medium hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500 transition-colors duration-300">Code</a>
                  </div>
                </div>
              </div>
            </div>

          </ProjectCarousel>
        </div>
      </motion.section>

      {/* ================================== */}
      {/* BAGIAN KONTAK */}
      {/* ================================== */}
      <motion.section 
        id="kontak" 
        // Animasi Fade Up (Dari Bawah ke Atas)
        initial={{ opacity: 0, y: 50 }} // Mulai dari 50px di bawah
        whileInView={{ opacity: 1, y: 0 }} // Meluncur ke posisi normal
        transition={{ duration: 0.8, ease: "easeOut" as const }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gray-100 dark:bg-gray-800 py-16 transition-colors duration-300"
      >
        <div className="container mx-auto px-8">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl text-gray-900 dark:text-white transition-colors duration-300">
            Contact Me
          </h2>
          
          {/* Layout 2 Kolom di Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            
            {/* Kolom Kiri: Contact Card */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-xl transition-colors duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Kirim Pesan Langsung
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Tertarik untuk berkolaborasi atau memiliki pertanyaan? Hubungi gua via email.
                </p>
              </div>
              <div className="mt-auto">
                <a 
                  href="mailto:fytrioamando@gmail.com" 
                  className="rounded-lg bg-gray-800 px-8 py-4 text-xl text-white shadow-lg hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 transition-colors duration-300 w-full inline-block text-center"
                >
                  Kirim Email
                </a>
              </div>
            </div>

            {/* Kolom Kanan: Google Maps */}
            <div className="h-full">
              {/* Kontainer Responsif Map */}
              <div className="responsive-map-container shadow-xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.423263973885!2d106.8078172743102!3d-6.192176995511451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e1f5a4f6b7%3A0x8e8b4e4f4c4e4e4e!2sJakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1701301234567!5m2!1sid!2sid" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

    </main>
  );
}
