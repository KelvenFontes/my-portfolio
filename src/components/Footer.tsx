"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Particles from "@tsparticles/react";
import { Engine } from "@tsparticles/engine";

export default function Footer() {
  const particlesInit = async (engine: Engine) => {
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-screen bg-gradient-to-r from-black via-gray-800 to-gray-600 text-gray-300 text-center py-12 mt-16 overflow-hidden"
    >
      {/* Partículas no Fundo */}
      <Particles
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 30 },
            size: { value: 2 },
            move: { enable: true, speed: 0.3 },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            line_linked: { enable: false },
          },
        }}
        className="absolute inset-0 w-full h-full"
      />

      {/* Frase Motivacional */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
        className="text-lg font-medium text-white mb-6"
      >
        "Criando experiências únicas, uma linha de código por vez."
      </motion.p>

      {/* Links Sociais com Hover Suave */}
      <div className="flex justify-center gap-8 mb-6">
        {[
          {
            href: "https://linkedin.com/in/seuusuario",
            icon: <FaLinkedin size={24} />,
            label: "LinkedIn",
            color: "text-blue-400 hover:text-blue-600",
          },
          {
            href: "https://github.com/seuusuario",
            icon: <FaGithub size={24} />,
            label: "GitHub",
            color: "text-white hover:text-gray-400",
          },
          {
            href: "mailto:seuemail@email.com",
            icon: <FaEnvelope size={24} />,
            label: "E-mail",
            color: "text-red-400 hover:text-red-600",
          },
        ].map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className={`transition-all flex items-center gap-2 ${social.color}`}
          >
            {social.icon} {social.label}
          </motion.a>
        ))}
      </div>

      {/* Linha Divisória */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
        className="w-4/5 mx-auto h-0.5 bg-gray-600 my-6"
      />

      {/* Direitos Autorais */}
      <p className="text-sm">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-semibold text-white">Seu Nome</span> - Todos os direitos reservados.
      </p>

      {/* Glow Neon no Fundo */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[300px] h-[150px] bg-blue-500 opacity-30 blur-3xl"></div>
    </motion.footer>
  );
}
