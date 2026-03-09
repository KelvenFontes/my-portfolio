import Image from "next/image"

export default function About() {
  return (
    <section
      id="sobre"
      className="bg-[#081225] text-white py-28 px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* FOTO */}
        <div className="relative flex justify-center">

          <div className="absolute w-[380px] h-[420px] bg-[#0d1a35] rounded-lg"></div>

          <Image
            src="/assets/perfil.png"
            alt="Kelven"
            width={380}
            height={420}
            className="relative object-cover rounded-lg grayscale"
          />

        </div>

        {/* TEXTO */}
        <div>

          <p className="text-yellow-400 font-semibold mb-2">
            ABOUT ME
          </p>

          <h2 className="text-3xl font-bold mb-2">
            Olá! Eu sou Kelven Fontes
          </h2>

          <p className="text-yellow-400 mb-6">
            Analista de Dados
          </p>

          <p className="text-gray-400 mb-8 leading-relaxed">
            Sou Analista de Dados com experiência em análise exploratória,
            criação de dashboards e modelagem de dados. Trabalho transformando
            grandes volumes de dados em insights estratégicos que ajudam empresas
            a tomar decisões mais inteligentes e orientadas por dados.
          </p>

          {/* INFO */}
          <div className="grid grid-cols-2 gap-y-4 text-sm text-gray-300 mb-8">

            <div>
              <span className="text-gray-500">Aniversário:</span> 05 Jun 1998
            </div>

            <div>
              <span className="text-gray-500">Telefone:</span> +55 11 99999-9999
            </div>

            <div>
              <span className="text-gray-500">Email:</span> kelven@email.com
            </div>

            <div>
              <span className="text-gray-500">Local:</span> Brasil
            </div>

            <div>
              <span className="text-gray-500">Idiomas:</span> Português, Inglês
            </div>

            <div>
              <span className="text-gray-500">Freelance:</span> Disponível
            </div>

          </div>

          {/* BOTÃO */}
          <a
            href="/cv-kelven.pdf"
            className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition"
          >
            Download CV
          </a>

        </div>

      </div>
    </section>
  )
}