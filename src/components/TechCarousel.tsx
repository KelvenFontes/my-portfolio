"use client"

import { PandaIcon } from "lucide-react"
import {
  FaGitAlt,
  FaGithub,
  FaAws,
  FaPython,
  FaFileExcel,
} from "react-icons/fa"

import {
  SiMysql,
  SiMongodb,
  SiSupabase,
  SiNumpy,
} from "react-icons/si"

export default function TechCarousel() {

  const techs = [
    { icon: <FaGitAlt className="text-red-500" size={35} />, name: "Git" },
    { icon: <FaGithub className="text-white" size={35} />, name: "GitHub" },
    { icon: <FaAws className="text-orange-400" size={35} />, name: "AWS" },
    { icon: <SiMysql className="text-blue-300" size={35} />, name: "MySQL" },
    { icon: <SiMongodb className="text-green-500" size={35} />, name: "MongoDB" },
    { icon: <SiSupabase className="text-green-400" size={35} />, name: "Supabase" },
    { icon: <SiNumpy className="text-blue-500" size={35} />, name: "NumPy" },
    { icon: <PandaIcon className="text-gray-300" size={35} />, name: "Pandas" },
    { icon: <FaFileExcel className="text-green-600" size={35} />, name: "Excel" },
    { icon: <FaPython className="text-blue-400" size={35} />, name: "Python" }
  ]

  return (
    <div className="relative w-full py-14 bg-[#020617] border-y border-white/5 overflow-hidden">

      {/* Fade esquerda */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#020617] to-transparent z-10"></div>

      {/* Fade direita */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#020617] to-transparent z-10"></div>

      <div className="flex gap-14 animate-marquee w-max">

        {[...techs, ...techs].map((tech, i) => (
          <div
            key={i}
            className="
          flex flex-col items-center justify-center
          min-w-[120px]
          opacity-70 hover:opacity-100
          transition duration-300
        "
          >

            {tech.icon}

            <p className="text-sm mt-2 text-gray-400">
              {tech.name}
            </p>

          </div>
        ))}

      </div>

    </div>
  )
}
