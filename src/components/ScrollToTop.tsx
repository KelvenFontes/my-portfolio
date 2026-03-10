"use client"

import { useState, useEffect } from "react"
import { FaArrowUp } from "react-icons/fa"

export default function BackToTopButton() {

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (

    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 z-50
        w-12 h-12
        flex items-center justify-center
        rounded-full
        bg-yellow-400
        text-black
        shadow-lg shadow-yellow-400/30
        hover:scale-110
        hover:shadow-yellow-400/50
        transition-all duration-300
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >

      <FaArrowUp size={18} />

    </button>

  )
}
