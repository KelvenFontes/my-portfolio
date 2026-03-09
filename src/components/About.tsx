import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="bg-[#081225] text-white py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20 relative">

          <h2 className="absolute inset-0 flex justify-center text-6xl md:text-7xl font-bold text-white/5 tracking-widest">
            ABOUT
          </h2>

          <p className="text-yellow-400 font-semibold tracking-widest relative">
            ABOUT ME
          </p>

          <div className="w-16 h-[2px] bg-yellow-400 mx-auto mt-2"></div>

        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* FOTO */}
          <div className="relative flex justify-center">

            {/* GLOW */}
            <div className="absolute w-[320px] h-[360px] bg-yellow-400/20 blur-[120px] rounded-full"></div>

            {/* CARD ATRÁS */}
            <div className="absolute w-[380px] h-[420px] border border-white/10 rounded-xl -translate-x-4 translate-y-4"></div>

            <Image
              src="/assets/perfil.png"
              alt="Kelven Fontes"
              width={380}
              height={420}
              className="
                relative
                object-cover
                rounded-xl
                border border-white/10
                shadow-2xl
                hover:scale-105
                transition duration-500
              "
            />

          </div>

          {/* TEXTO */}
          <div>

            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Hi, I'm <span className="text-yellow-400">Kelven Fontes</span>
            </h3>

            <p className="text-yellow-400 font-medium mb-6">
              Data Analyst
            </p>

            <p className="text-gray-400 mb-10 leading-relaxed max-w-xl">
              I am a data analyst passionate about transforming complex data
              into clear and strategic insights. I work with Python, SQL and
              Power BI to analyze data, build dashboards and support
              data-driven decision making that helps businesses grow and
              optimize their performance.
            </p>

            {/* INFO */}
            <div className="grid grid-cols-2 gap-y-6 text-sm text-gray-300 mb-10">

              <div>
                <span className="text-gray-500 block">Location</span>
                Brazil
              </div>

              <div>
                <span className="text-gray-500 block">Languages</span>
                Portuguese, English
              </div>

              <div>
                <span className="text-gray-500 block">Availability</span>
                Open to Work
              </div>

              <div>
                <span className="text-gray-500 block">Focus</span>
                Data Analytics
              </div>

            </div>

            {/* DIVIDER */}
            <div className="w-full h-px bg-white/10 mb-10"></div>

            {/* STATS */}
            <div className="flex gap-14">

              <div className="text-center">
                <p className="text-4xl font-bold text-yellow-400">10+</p>
                <p className="text-gray-400 text-sm">Data Projects</p>
              </div>

              <div className="text-center">
                <p className="text-4xl font-bold text-yellow-400">2+</p>
                <p className="text-gray-400 text-sm">Years Learning Data</p>
              </div>

              <div className="text-center">
                <p className="text-4xl font-bold text-yellow-400">15+</p>
                <p className="text-gray-400 text-sm">Dashboards Built</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}