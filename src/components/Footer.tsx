"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setInView(entry.isIntersecting); // Muda o estado toda vez que o footer entra ou sai da tela
      },
      {
        threshold: 0.1, // O footer será ativado quando 10% dele estiver visível
      }
    );

    const footerElement = document.getElementById("footer");
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  return (
    <motion.footer
      id="footer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full max-w-full bg-gradient-to-r from-black via-gray-800 to-black text-gray-300 text-center py-12 mt-16 overflow-hidden z-10"
    >
      {/* Frase Motivacional */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
        className="text-lg font-medium text-white mb-6"
      >
        Criando experiências únicas, uma linha de código por vez.
      </motion.p>

      {/* Links Sociais com Hover Suave */}
      <div className="flex justify-center gap-8 mb-6 z-20">
        {/* LinkedIn */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <Link
            href="https://linkedin.com/in/kelvenfontes"
            className="transition-all flex items-center gap-2 text-blue-400 hover:text-blue-600"
          >
            <FaLinkedin size={24} /> LinkedIn
          </Link>
        </motion.div>

        {/* GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <Link
            href="https://github.com/kelvenfontes"
            className="transition-all flex items-center gap-2 text-white hover:text-gray-400"
          >
            <FaGithub size={24} /> GitHub
          </Link>
        </motion.div>

        {/* E-mail */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        >
          <Link
            href="mailto:kelvenbentofontes@gmail.com"
            className="transition-all flex items-center gap-2 text-red-400 hover:text-red-600"
          >
            <FaEnvelope size={24} /> E-mail
          </Link>
        </motion.div>
      </div>

      {/* Linha Divisória */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: inView ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
        className="w-4/5 mx-auto h-0.5 bg-gray-600 my-6"
      />

      {/* Direitos Autorais */}
      <p className="text-sm">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-semibold text-white">Kelven Fontes</span>
      </p>

      {/* Glow Neon no Fundo */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[300px] h-[150px] bg-blue-500 opacity-30 blur-3xl -z-10"></div>
    </motion.footer>
  );
}
