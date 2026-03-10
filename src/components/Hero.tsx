"use client"

import Image from "next/image"
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa"
import { BsDownload } from "react-icons/bs"


export default function Hero({ dict }:any) {
  return (
    <section className="min-h-screen flex items-center text-white bg-gradient-to-br from-[#081225] via-[#0d1a35] to-[#020617] px-6 pt-28 overflow-hidden">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* TEXTO */}
        <div className="order-2 md:order-1 text-center md:text-left animate-fadeIn">

          <p className="text-yellow-400 font-medium mb-3">
            {dict.hero.hello}
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Kelven <br />
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Fontes
            </span>
          </h1>

          <p className="text-xl mt-4 text-yellow-400">
            {dict.hero.role}
          </p>

          <p className="text-gray-400 mt-6 max-w-md">
            {dict.hero.description}
          </p>

          {/* TECNOLOGIAS */}
          <div className="flex justify-center gap-3 mt-6 flex-wrap">

            <span className="bg-[#0d1a35] px-4 py-1 rounded-full text-sm border border-gray-700">
              Python
            </span>

            <span className="bg-[#0d1a35] px-4 py-1 rounded-full text-sm border border-gray-700">
              SQL
            </span>

            <span className="bg-[#0d1a35] px-4 py-1 rounded-full text-sm border border-gray-700">
              Power BI
            </span>

            <span className="bg-[#0d1a35] px-4 py-1 rounded-full text-sm border border-gray-700">
              Data Visualization
            </span>

          </div>

          {/* BOTÕES */}
          <div className="flex justify-center gap-4 mt-8">

            <a
              href="#contact"
              className="sm:text-md sm:py-2 px-4 bg-yellow-400 text-black md:px-7 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/30 transition duration-300"
            >
              {dict.hero.contact}
            </a>

            <a
              href="/assets/kelven-cv.pdf"
              className="flex sm:text-md sm:py-2 px-4 items-center gap-2 border border-gray-700 md:px-7 py-3 rounded-full hover:border-yellow-400 hover:text-yellow-400 hover:scale-105 transition duration-300"
            >
              <BsDownload />
              Download CV
            </a>

          </div>

          {/* REDES */}
          <div className="pb-10  mt-10 flex justify-center">

            <div className="flex items-center gap-4 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">

              <a
                href="https://www.linkedin.com/in/kelvenfontes/"
                target="_blank"
                className="w-11 h-11 flex items-center justify-center border border-gray-700 rounded-full hover:border-yellow-400 hover:text-yellow-400 hover:bg-yellow-400/10 transition duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/KelvenFontes"
                target="_blank"
                className="w-11 h-11 flex items-center justify-center border border-gray-700 rounded-full hover:border-yellow-400 hover:text-yellow-400 hover:bg-yellow-400/10 transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="mailto:kelvenbentofontes@gmail.com"
                className="w-11 h-11 flex items-center justify-center border border-gray-700 rounded-full hover:border-yellow-400 hover:text-yellow-400 hover:bg-yellow-400/10 transition duration-300"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://wa.me/+5511953647573"
                target="_blank"
                className="w-11 h-11 flex items-center justify-center border border-gray-700 rounded-full hover:border-yellow-400 hover:text-yellow-400 hover:bg-yellow-400/10 transition duration-300"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

        </div>

        {/* FOTO */}
        <div className="relative flex justify-center order-1 md:order-2 mb-10 md:mb-0">

          {/* Glow */}
          <div className="absolute w-[260px] h-[260px] md:w-[420px] md:h-[520px] bg-yellow-400/20 blur-[120px] rounded-full"></div>

          <Image
            src="/assets/perfil.png"
            alt="Kelven Fontes"
            width={500}
            height={600}
            priority
            className="
      relative
      w-[260px] md:w-[420px]
      h-auto
      object-cover object-top
      rounded-xl
      border border-white/10
      hover:scale-105
      transition duration-500
      shadow-2xl
    "
          />

        </div>

      </div>

    </section>
  )
}
