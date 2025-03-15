"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loading() {
  const [exitAnimation, setExitAnimation] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setExitAnimation(true);
    }, 2000);
  }, []);

  return (
    isVisible && (
      <motion.div
        className="mt-16 fixed inset-0 flex flex-col items-center justify-center bg-[#0a0f1e] text-white z-50 overflow-hidden"
        animate={{
          opacity: exitAnimation ? 0 : 1,
          y: exitAnimation ? "-100%" : "0%",
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
        onAnimationComplete={() => {
          if (exitAnimation) {
            setIsVisible(false);
          }
        }}
      >
        <div className="relative w-full h-screen flex flex-col justify-center gap-4">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full rounded-full shadow-lg"
              initial={{ x: i % 2 === 0 ? "-100%" : "100%" }}
              animate={{
                x: i % 2 === 0 ? ["-100%", "100%"] : ["100%", "-100%"],
                height: [`${12 + i * 5}px`, `${22 + i * 8}px`, `${12 + i * 5}px`],
                opacity: [0.6, 1, 0.6],
                background: [
                  "linear-gradient(90deg, rgba(255,87,51,1) 0%, rgba(255,165,0,1) 50%, rgba(255,87,51,1) 100%)",
                  "linear-gradient(90deg, rgba(0,184,255,1) 0%, rgba(0,102,255,0.9) 50%, rgba(0,184,255,1) 100%)",
                  "linear-gradient(90deg, rgba(144,238,144,1) 0%, rgba(60,179,113,1) 50%, rgba(144,238,144,1) 100%)",
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 2 + i * 0.3,
                ease: "easeInOut",
              }}
              style={{
                top: `${i * 16}%`,
              }}
            />
          ))}
        </div>

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
    )
  );
}
