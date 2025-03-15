"use client";
import { useState, useEffect, useMemo } from "react";

export default function TypingEffect() {
  const texts = useMemo(
    () => [
      "Desenvolvedor FullStack",
      "Especialista Front-end",
    ],
    []
  );

  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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
    <span
      className="text-blue-400 inline-block"
    >
      {texts[textIndex].substring(0, charIndex)}
    </span>
  );
}
