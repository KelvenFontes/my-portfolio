"use client"

import Image from "next/image"
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa"
import { BsDownload } from "react-icons/bs"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-[#081225] text-white">


        {/* TEXTO */}
        <div>

          <p className="text-yellow-400 font-medium mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Kelven Bento <br /> Fontes
          </h1>

          <p className="text-xl text-gray-400 mt-4">
            Data Analyst | Python • SQL • Power BI
          </p>

          <p className="text-gray-400 mt-6 max-w-md">
            I transform data into strategic insights that help companies
            make better decisions and drive business growth.
          </p>

          {/* BOTÕES */}
          <div className="flex flex-wrap gap-4 mt-8">

            <a
              href="#contact"
              className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Contact Me
            </a>

            <a
              href="/cv-kelven.pdf"
              className="flex items-center gap-2 border border-gray-700 px-6 py-3 rounded-full hover:border-yellow-400 transition"
            >
              <BsDownload />
              Download CV
            </a>

          </div>

          {/* REDES */}
          <div className="flex items-center gap-4 mt-10">

            <a
              href="https://linkedin.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-full hover:border-yellow-400 hover:text-yellow-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-full hover:border-yellow-400 hover:text-yellow-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="mailto:email@email.com"
              className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-full hover:border-yellow-400 hover:text-yellow-400 transition"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://wa.me/559999999999"
              className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-full hover:border-yellow-400 hover:text-yellow-400 transition"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

        {/* FOTO */}
        <div className="relative flex justify-center">

          <div className="absolute w-[420px] h-[520px] bg-[#0d1a35] rounded-lg"></div>

          <Image
            src="/assets/perfil.png"
            alt="Kelven"
            width={420}
            height={520}
            className="relative object-cover rounded-lg grayscale hover:grayscale-0 transition duration-500"
          />

        </div>

    </section>
  )
}