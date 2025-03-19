"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX, FiUser, FiCode, FiFolder, FiMail } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState<boolean | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");

      if (savedTheme) {
        setDarkMode(savedTheme === "dark");
      } else {
        setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
      }
    }

    const onScroll = () => {
      const sections = ["about", "technologies", "projects", "contact"];
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= window.innerHeight / 2) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (darkMode === null) return;

    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.style.setProperty("--background", "#111827");
      document.documentElement.style.setProperty("--foreground", "#ededed");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.documentElement.style.setProperty("--background", "#ffffff");
      document.documentElement.style.setProperty("--foreground", "#111827");
    }
  }, [darkMode]);

  if (darkMode === null) return null;

  // Função para rolar até o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full text-white p-3 shadow-lg z-50 flex justify-between items-center px-8 bg-gradient-to-r from-gray-800 via-blue-900 to-gray-900"
    >

      <Link href="/" className="flex items-center gap-2" onClick={scrollToTop}>
        <Image
          src="/logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="rounded-full cursor-pointer transition-transform duration-300 transform hover:scale-110"
        />
        <h1
          className="text-2xl font-bold cursor-pointer hover:text-blue-400 transition-all ease-in-out duration-300"
        >
          Kelven Fontes
        </h1>
      </Link>

      {/* Menu Mobile */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-3xl p-2 rounded-full transition-all hover:bg-gray-700"
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Menu Desktop */}
      <ul
        className={`md:flex gap-6 items-center ${isMobileMenuOpen
          ? "flex flex-col absolute top-16 left-0 bg-gray-900 w-full p-4 shadow-lg"
          : "hidden"
          }`}
      >
        <li>
          <a
            href="#about"
            className={`text-lg font-medium hover:text-blue-400 transition-all duration-300 transform hover:scale-110 ${activeSection === "about" ? "text-blue-400" : ""
              }`}
          >
            <FiUser className="inline-block mr-2" /> Sobre
          </a>
        </li>
        <li>
          <a
            href="#technologies"
            className={`text-lg font-medium hover:text-blue-400 transition-all duration-300 transform hover:scale-110 ${activeSection === "skills" ? "text-blue-400" : ""
              }`}
          >
            <FiCode className="inline-block mr-2" /> Habilidades
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={`text-lg font-medium hover:text-blue-400 transition-all duration-300 transform hover:scale-110 ${activeSection === "projects" ? "text-blue-400" : ""
              }`}
          >
            <FiFolder className="inline-block mr-2" /> Projetos
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={`text-lg font-medium hover:text-blue-400 transition-all duration-300 transform hover:scale-110 ${activeSection === "contact" ? "text-blue-400" : ""
              }`}
          >
            <FiMail className="inline-block mr-2" /> Contato
          </a>
        </li>
      </ul>

      {/* Botão Dark Mode com animação */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="text-2xl transition-all duration-500 transform hover:scale-125 hover:text-blue-500 relative w-10 h-10 flex items-center justify-center"
      >
        <motion.span
          key={darkMode ? "sun" : "moon"} // Garante que o ícone seja recriado na troca
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: 360, opacity: 1 }}
          exit={{ rotate: -360, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute"
        >
          {darkMode ? <FiSun className="text-yellow-400" /> : <FiMoon className="text-gray-300" />}
        </motion.span>
      </button>
    </motion.nav>
  );
}
