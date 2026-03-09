"use client"

import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#081225]/80 backdrop-blur border-b border-white/10">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <div className="flex items-center gap-3 cursor-pointer">

          {/* <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center font-bold text-white shadow-md">
            K
          </div> */}

          <Image src="/logo.png" alt="Logo" width={40} height={40} />

          <span className="font-semibold text-lg tracking-wide">
            Kelven Fontes
          </span>

        </div>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">

          <Link href="#about" className="hover:text-yellow-400 transition">
            About
          </Link>

          <Link href="#skills" className="hover:text-yellow-400 transition">
            Skills
          </Link>

          <Link href="#projects" className="hover:text-yellow-400 transition">
            Projects
          </Link>

          <Link href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </Link>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">

          {/* LANGUAGE */}
          <div className="flex gap-2 text-sm">

            <Link
              href="/en"
              className="flex items-center gap-2 hover:text-yellow-400 transition"
            >
              <Image
                src="/flags/us.png"
                alt="English"
                width={20}
                height={14}
              />
              EN
            </Link>

            <span className="text-gray-500">|</span>

            <Link
              href="/pt"
              className="flex items-center gap-2 hover:text-yellow-400 transition"
            >
              <Image
                src="/flags/br.png"
                alt="Portuguese"
                width={20}
                height={14}
              />
              PT
            </Link>

          </div>

          {/* CONTACT BUTTON */}
          <Link
            href="#contact"
            className="hidden md:block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition"
          >
            Hire Me
          </Link>

        </div>

      </div>

    </nav>
  )
}