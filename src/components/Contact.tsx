"use client"

import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Contact({ dict }: any) {
  return (
    <section
      id="contact"
      className="bg-[#081225] text-white py-28 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20 relative">

          <h2 className="absolute inset-0 flex justify-center text-7xl font-bold text-white/[0.04]">
            {dict.contact.title}
          </h2>

          <p className="text-yellow-400 font-semibold tracking-widest relative">
            {dict.contact.subtitle}
          </p>

          <div className="w-16 h-[2px] bg-yellow-400 mx-auto mt-2"></div>

        </div>

        <div className="grid md:grid-cols-2 gap-24 items-start">

          {/* FORM */}
          <div>

            <h3 className="text-xl font-semibold mb-8">
              {dict.contact.justhello} <span className="text-yellow-400">{dict.contact.hello}</span>
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder={dict.contact.form.name}
                className="w-full bg-[#0f1f3d]/60 border border-gray-700 p-4 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
              />

              <input
                type="email"
                placeholder={dict.contact.form.email}
                className="w-full bg-[#0f1f3d]/60 border border-gray-700 p-4 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
              />

              <input
                type="text"
                placeholder={dict.contact.form.subject}
                className="w-full bg-[#0f1f3d]/60 border border-gray-700 p-4 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition"
              />

              <textarea
                rows={5}
                placeholder={dict.contact.form.message}
                className="w-full bg-[#0f1f3d]/60 border border-gray-700 p-4 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition resize-none"
              />

              <button
                type="submit"
                className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-400/20"
              >
                {dict.contact.button}
              </button>

            </form>
          </div>

          {/* INFO */}
          <div>

            <h3 className="text-xl font-semibold mb-8">
              {dict.contact.infoTitle}
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
                  <a
                    href="mailto:kelvenbentofontes@gmail.com"
                    className="text-gray-200 hover:text-yellow-400 transition-colors"
                  >
                    kelvenbentofontes@gmail.com
                  </a>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-start gap-4">
                <div className="text-yellow-400 mt-1">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    {dict.contact.phone}
                  </p>
                  <a
                    href="https://wa.me/5511953647573"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-yellow-400 transition-colors"
                  >
                    +55 11 95364-7573
                  </a>
                </div>
              </div>

              {/* LOCATION */}
              {/* <div className="flex items-start gap-4">

                <div className="text-yellow-400 mt-1">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    {dict.contact.location}
                  </p>
                  <p className="text-gray-200">
                    Osasco, São Paulo, Brasil
                  </p>
                </div>

              </div> */}

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
