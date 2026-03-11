"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar({ dict }: { dict: any }) {

  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-[#081225]/80 backdrop-blur border-b border-white/10">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <div className="flex items-center gap-3 cursor-pointer">

          <Image src="/logo.png" alt="Logo" width={40} height={40} />

          <span className="font-semibold text-lg tracking-wide">
            Kelven Fontes
          </span>

        </div>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">

          <Link href="#about" className="hover:text-yellow-400 transition">
            {dict.default.navbar.about}
          </Link>

          <Link href="#skills" className="hover:text-yellow-400 transition">
            dict.navbar.skills
          </Link>

          <Link href="#projects" className="hover:text-yellow-400 transition">
            dict.navbar.projects
          </Link>

          <Link href="#contact" className="hover:text-yellow-400 transition">
            dict.navbar.contact
          </Link>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">

          {/* LANGUAGE */}
          <div className="hidden md:flex gap-2 text-sm">

            <Link
              href="/en"
              className="flex items-center gap-2 hover:text-yellow-400 transition"
            >
              <Image src="/flags/us.png" alt="English" width={20} height={14} />
              EN
            </Link>

            <span className="text-gray-500">|</span>

            <Link
              href="/pt"
              className="flex items-center gap-2 hover:text-yellow-400 transition"
            >
              <Image src="/flags/br.png" alt="Portuguese" width={20} height={14} />
              PT
            </Link>

          </div>

          {/* CONTACT BUTTON */}
          <Link
            href="#contact"
            className="hidden md:block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition"
          >
            dict.navbar.contactButton
          </Link>

          {/* HAMBURGER */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28}/> : <Menu size={28}/>}
          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-5 py-6 bg-[#081225] border-t border-white/10">

          <Link href="#about" onClick={() => setMenuOpen(false)}>
            dict.navbar.about
          </Link>

          <Link href="#skills" onClick={() => setMenuOpen(false)}>
            dict.navbar.skills
          </Link>

          <Link href="#projects" onClick={() => setMenuOpen(false)}>
            dict.navbar.projects
          </Link>

          <Link href="#contact" onClick={() => setMenuOpen(false)}>
            dict.navbar.contact
          </Link>

          <span className="w-full h-px bg-white/10"></span>

          {/* LANGUAGE */}
          <div className="flex gap-4 text-sm">

            <Link href="/en" className="flex items-center gap-2">
              <Image src="/flags/us.png" alt="English" width={20} height={14} />
              EN
            </Link>

            <Link href="/pt" className="flex items-center gap-2">
              <Image src="/flags/br.png" alt="Portuguese" width={20} height={14} />
              PT
            </Link>

          </div>

          <Link
            href="#contact"
            className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:scale-105 transition"
          >
            dict.navbar.contactButton
          </Link>

        </div>
      </div>

    </div>
  )
}
