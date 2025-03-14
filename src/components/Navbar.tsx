"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full bg-gray-900 bg-opacity-95 backdrop-blur-md text-white p-4 shadow-md z-50 flex justify-between items-center px-8"
    >
      <h1 className="text-2xl font-bold">Meu Portfólio</h1>
      <ul className="hidden md:flex gap-6">
        <li><a href="#about" className="hover:text-blue-400 transition">Sobre</a></li>
        <li><a href="#skills" className="hover:text-blue-400 transition">Habilidades</a></li>
        <li><a href="#projects" className="hover:text-blue-400 transition">Projetos</a></li>
        <li><a href="#contact" className="hover:text-blue-400 transition">Contato</a></li>
      </ul>
      <button onClick={() => setDarkMode(!darkMode)} className="text-2xl">
        {darkMode ? <FiSun /> : <FiMoon />}
      </button>
    </motion.nav>
  );
}
