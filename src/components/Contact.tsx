"use client"

import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contato"
      className="bg-[#081225] text-white py-28 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20 relative overflow-hidden">

          <h2 className="absolute inset-0 flex justify-center text-7xl font-bold text-white/[0.04] tracking-widest">
            CONTACT
          </h2>

          <p className="text-yellow-400 font-semibold tracking-widest relative">
            CONTACT ME
          </p>

          <div className="w-16 h-[2px] bg-yellow-400 mx-auto mt-2"></div>

        </div>

        <div className="grid md:grid-cols-2 gap-24 items-start">

          {/* FORM */}
          <div>

            <h3 className="text-xl font-semibold mb-8">
              Just say <span className="text-yellow-400">Hello</span>
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Seu nome"
                className="w-full bg-[#0f1f3d]/60 border border-gray-700 p-4 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
              />

              <input
                type="email"
                placeholder="Seu email"
                className="w-full bg-[#0f1f3d]/60 border border-gray-700 p-4 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
              />

              <input
                type="text"
                placeholder="Assunto"
                className="w-full bg-[#0f1f3d]/60 border border-gray-700 p-4 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
              />

              <textarea
                rows={5}
                placeholder="Sua mensagem"
                className="w-full bg-[#0f1f3d]/60 border border-gray-700 p-4 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition resize-none"
              />

              <button
                type="submit"
                className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-400/20"
              >
                Send message
              </button>

            </form>
          </div>

          {/* INFO */}
          <div>

            <h3 className="text-xl font-semibold mb-8">
              Contact Info
            </h3>

            <div className="space-y-8">

              {/* EMAIL */}
              <div className="flex items-start gap-4">

                <div className="text-yellow-400 mt-1">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-gray-200">
                    kelvenbentofontes@gmail.com
                  </p>
                </div>

              </div>

              {/* PHONE */}
              <div className="flex items-start gap-4">

                <div className="text-yellow-400 mt-1">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Phone
                  </p>
                  <p className="text-gray-200">
                    +55 11 95364-7573
                  </p>
                </div>

              </div>

              {/* LOCATION */}
              <div className="flex items-start gap-4">

                <div className="text-yellow-400 mt-1">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-gray-200">
                    Osasco, São Paulo, Brasil
                  </p>
                </div>

              </div>

            </div>

            {/* SOCIAL */}
            <div className="mt-12 flex gap-6">

              <a
                href="https://linkedin.com"
                target="_blank"
                className="p-3 border border-gray-700 rounded-lg text-gray-400 hover:text-yellow-400 hover:border-yellow-400 transition"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                className="p-3 border border-gray-700 rounded-lg text-gray-400 hover:text-yellow-400 hover:border-yellow-400 transition"
              >
                <Github size={20} />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
