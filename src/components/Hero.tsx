"use client";
import { useState, useEffect, useMemo } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

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
    <div className="flex flex-col items-center justify-center text-center px-4 sm:py-10 mt-20 md:mt-16">
      {/* Foto de Perfil */}
      <div className="w-24 h-24 bg-gray-700 rounded-full mb-4 sm:w-32 sm:h-32"></div>

      {/* Texto de Apresentação */}
      <h1 className="text-2xl sm:text-3xl font-bold">
        Olá, eu sou o <span className="text-blue-400">Kelven</span>
      </h1>
      <p
        className="text-lg text-blue-300 mt-2 min-h-[24px] sm:min-h-[28px]"
        style={{ minWidth: `${maxTextLength}ch` }}
      >
        {texts[textIndex].substring(0, charIndex)}
      </p>

      {/* Botões de Contato */}
      <div className="mt-6 flex flex-wrap justify-center gap-3 sm:max-w-md md:max-w-2xl ">
        <a
          href="https://www.linkedin.com/in/kelvenfontes"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition text-sm sm:text-base"
        >
          <FaLinkedin />
          LinkedIn
        </a>
        <a
          href="https://github.com/kelvenfontes"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-900 transition text-sm sm:text-base"
        >
          <FaGithub />
          GitHub
        </a>
        <a
          href="mailto:kelvenbentofontes@gmail.com"
          className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 transition text-sm sm:text-base"
        >
          <FaEnvelope />
          E-mail
        </a>
        <a
          href="https://wa.me/+5511953647573"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700 transition text-sm sm:text-base"
        >
          <FaWhatsapp />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
