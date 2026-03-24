import Image from "next/image"

export default function About({ dict }: any) {
  return (
    <section id="about" className="bg-[#081225] text-white py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20 relative">

          <h2 className="absolute inset-0 flex justify-center text-6xl md:text-7xl font-bold text-white/5 tracking-widest">
            {dict.about.title}
          </h2>

          <p className="text-yellow-400 font-semibold tracking-widest relative">
            {dict.about.subtitle}
          </p>

          <div className="w-16 h-[2px] bg-yellow-400 mx-auto mt-2"></div>

        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* FOTO */}
          <div className="relative flex justify-center">
            {/* GLOW */}
            <div className="absolute w-[260px] h-[260px] md:w-[320px] md:h-[320px] bg-yellow-400/20 blur-[120px] rounded-full"></div>

            {/* CARD ATRÁS */}
            <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] border border-white/10 rounded-2xl -translate-x-4 translate-y-4"></div>

            {/* CARD DA IMAGEM */}
            <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/assets/aboutus.png"
                alt="Kelven Fontes"
                fill
                className="object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* TEXTO */}
          <div>

            <div>

              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                {dict.about.name}
              </h3>

              <p className="text-yellow-400 font-medium mb-6">
                {dict.about.role}
              </p>

              <p className="text-gray-400 mb-10 leading-relaxed max-w-xl">
                {dict.about.description}
              </p>

              {/* INFO */}
              <div className="grid grid-cols-2 gap-y-6 text-sm text-gray-300 mb-10">

                <div>
                  <span className="text-yellow-400 block">{dict.about.location}</span>
                  {dict.about.locationValue}
                </div>

                <div>
                  <span className="text-yellow-400 block">{dict.about.languages}</span>
                  {dict.about.languagesValue}
                </div>

                <div>
                  <span className="text-yellow-400 block">{dict.about.availability}</span>
                  {dict.about.availabilityValue}
                </div>

                <div>
                  <span className="text-yellow-400 block">{dict.about.focus}</span>
                  {dict.about.focusValue}
                </div>

              </div>


              {/* DIVIDER */}
              <div className="w-full h-px bg-white/10 mb-10"></div>

            </div>

            {/* STATS */}
            <div className="flex justify-between gap-6 max-w-md">

              <div className="text-center">
                <p className="text-4xl font-bold text-yellow-400">10+</p>
                <p className="text-gray-400 text-sm">{dict.about.projects}</p>
              </div>

              <div className="text-center">
                <p className="text-4xl font-bold text-yellow-400">3+</p>
                <p className="text-gray-400 text-sm">{dict.about.years}</p>
              </div>

              <div className="text-center">
                <p className="text-4xl font-bold text-yellow-400">15+</p>
                <p className="text-gray-400 text-sm">{dict.about.dashboards}</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
