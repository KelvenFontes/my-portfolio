"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";

export function TypingEffect() {
  const words = [
    {
      text: "Desenvolvedor",
    },
    {
      text: "Front-end",
    },
    // {
    //   text: "Front-end",
    //   className: "text-blue-500 dark:text-blue-500",
    // },
  ];
  return (
      <TypewriterEffect words={words} />
  );
}
