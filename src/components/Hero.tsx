"use client";
import { useState, useEffect, useMemo } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaFilePdf } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from 'next/image';
import { BsDownload } from "react-icons/bs";

export default function HeroSection() {
  const texts = useMemo(
    () => [
      "Desenvolvedor Full Stack",
      "Especialista em Front-end",
    ],
    []
  );

  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const maxTextLength = useMemo(() => Math.max(...texts.map((t) => t.length)), [texts]);

  useEffect(() => {
    const currentText = texts[textIndex];

    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => setIsDeleting(true), 1200);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const typingSpeed = isDeleting ? 50 : 80;
    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <div className="flex flex-col md:flex-row items-center text-center md:text-left px-4 sm:py-10 mt-20 md:mt-16 max-w-5xl mx-auto">

      {/* Texto e botões (Esquerda no Desktop, Abaixo no Mobile) */}
      <div className="flex flex-col items-center md:items-start md:w-1/2 order-2 md:order-1">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Olá, eu sou o <span className="text-blue-400">Kelven</span>
        </h1>
        <p
          className="text-lg text-blue-300 mt-2 min-h-[24px] sm:min-h-[28px]"
          style={{ minWidth: `${maxTextLength}ch` }}
        >
          {texts[textIndex].substring(0, charIndex)}
        </p>

        {/* Links (Redes sociais) */}
        <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
          <a
            href="https://www.linkedin.com/in/kelvenfontes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-md shadow-md hover:bg-blue-600 hover:text-white transition text-sm sm:text-base"
          >
            <FaLinkedin />
            LinkedIn
          </a>
          <a
            href="https://github.com/kelvenfontes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-gray-800 text-gray-800 px-4 py-2 rounded-md shadow-md hover:bg-gray-800 hover:text-white transition text-sm sm:text-base"
          >
            <FaGithub />
            GitHub
          </a>
          <a
            href="mailto:kelvenbentofontes@gmail.com"
            aria-label="Envie um e-mail"
            className="flex items-center gap-2 border border-red-500 text-red-500 px-4 py-2 rounded-md shadow-md hover:bg-red-500 hover:text-white transition text-sm sm:text-base"
          >
            <FaEnvelope />
            E-mail
          </a>
          <a
            href="https://wa.me/+5511953647573"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-green-600 text-green-600 px-4 py-2 rounded-md shadow-md hover:bg-green-600 hover:text-white transition text-sm sm:text-base"
          >
            <FaWhatsapp />
            WhatsApp
          </a>
        </div>

        {/* Botão "Ver CV" - Destaque maior */}
        <div className="mt-6 flex items-center justify-center">
          <a
            href="/assets/kelven-cv.pdf" // Substitua pelo link correto do seu CV
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 border-2 border-sky-700 text-sky-700 px-6 py-3 rounded-lg shadow-md text-md font-semibold hover:bg-sky-700 hover:text-white transition-transform transform hover:scale-102"
          >
            <span>Download CV</span>
            <BsDownload size={24} />
          </a>
        </div>
      </div>

      {/* Imagem (Direita no Desktop, Acima no Mobile) */}
      <motion.div className="relative w-52 h-52 flex items-center justify-center p-0 m-0 md:w-1/2 order-1 md:order-2">
        <motion.svg
          className="absolute inset-0 w-full h-full"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#11699c"
            strokeWidth="8"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [0, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>

        <div className="w-48 h-48 rounded-full overflow-hidden flex items-center justify-center">
          <Image
            src="/assets/kelven.png"
            alt="Imagem"
            width={160}
            height={160}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

    </div>
  );
}
