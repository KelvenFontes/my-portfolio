"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState<boolean | null>(null); // Estado inicial como null

  useEffect(() => {
    // Só executa no lado do cliente
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");

      if (savedTheme) {
        setDarkMode(savedTheme === "dark");
      } else {
        // Se não houver tema salvo, verifica a preferência do sistema
        setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
      }
    }
  }, []);

  useEffect(() => {
    if (darkMode === null) return; // Evita executar antes do tema ser carregado

    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");

      // Define as variáveis CSS para o tema escuro
      document.documentElement.style.setProperty("--background", "#111827");
      document.documentElement.style.setProperty("--foreground", "#ededed");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");

      // Define as variáveis CSS para o tema claro
      document.documentElement.style.setProperty("--background", "#ffffff");
      document.documentElement.style.setProperty("--foreground", "#111827");
    }
  }, [darkMode]);

  if (darkMode === null) return null; // Evita piscar a tela antes de carregar o tema

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
