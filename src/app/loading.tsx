"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loading() {
  const [exitAnimation, setExitAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setExitAnimation(true);
    }, 1500); // Tempo do loading
  }, []);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-[#0a0f1e] text-white z-50 overflow-hidden mt-16"
      animate={{
        opacity: exitAnimation ? 0 : 1, // Suaviza a saída
        y: exitAnimation ? "-100%" : "0%", // Move a tela para cima ao sumir
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Barras animadas nítidas */}
      <div className="relative w-full h-screen flex flex-col justify-center gap-4">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full rounded-md"
            initial={{ x: i % 2 === 0 ? "-100%" : "100%" }}
            animate={{
              x: i % 2 === 0 ? ["-100%", "100%"] : ["100%", "-100%"],
              height: [`${12 + i * 5}px`, `${22 + i * 8}px`, `${12 + i * 5}px`],
              opacity: [0.6, 1, 0.6], // Deixando mais visível
            }}
            transition={{
              repeat: Infinity,
              duration: 2 + i * 0.3,
              ease: "easeInOut",
            }}
            style={{
              top: `${i * 16}%`,
              background: `linear-gradient(90deg, rgba(0,184,255,1) 0%, rgba(0,102,255,0.9) 50%, rgba(0,184,255,1) 100%)`,
              boxShadow: `0px 0px 15px rgba(0,184,255,0.5), 0px 0px 30px rgba(0,102,255,0.4)`,
            }}
          />
        ))}
      </div>

      {/* Texto animado mais refinado */}
      <motion.p
        className="mt-10 text-lg text-gray-300 font-mono tracking-wide"
        animate={{
          opacity: [0.5, 1, 0.5],
          y: [-3, 0, -3],
          letterSpacing: ["0px", "3px", "0px"],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        🚀 Ajustando a realidade...
      </motion.p>
    </motion.div>
  );
}
