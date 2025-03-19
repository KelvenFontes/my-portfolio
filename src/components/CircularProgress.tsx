"use client";
import { useState, useEffect } from "react";

interface CircularProgressProps {
  size?: number;
  strokeWidth?: number;
  duration?: number;
  bgColor?: string;
  progressColor?: string;
  glowEffect?: boolean; // Adiciona efeito Glow
}

export default function CircularProgress({
  size = 180,
  strokeWidth = 10,
  duration = 3000,
  bgColor = "#E5E7EB",
  progressColor = "#1e3a8a",
  glowEffect = true, // Ativado por padrão
}: CircularProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = (100 / (duration / 16)); // Aproximadamente 60 FPS

    const animate = () => {
      start += step;
      if (start >= 100) {
        start = 100;
        setProgress(100);
      } else {
        setProgress(start);
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [duration]);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Definição de Gradiente e Glow */}
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={progressColor} />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          {glowEffect && (
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          )}
        </defs>

        {/* Fundo do círculo */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={bgColor}
          strokeWidth={strokeWidth}
          opacity="0.3"
        />

        {/* Círculo de progresso */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#progressGradient)" // Aplica o gradiente
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: "stroke-dashoffset 0.2s ease-out" }}
          filter={glowEffect ? "url(#glow)" : "none"} // Aplica o efeito Glow
        />
      </svg>
    </div>
  );
}
