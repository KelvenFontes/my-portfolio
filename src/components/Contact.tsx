export default function Contact() {
  return (
    <section
      id="contato"
      className="bg-[#081225] text-white py-28 px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

        {/* FORMULÁRIO */}
        <div>

          <h2 className="text-2xl font-bold mb-6">
            Just say Hello
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Seu nome"
              className="w-full bg-[#0f1f3d] border border-gray-700 p-4 rounded focus:outline-none focus:border-yellow-400"
            />

            <input
              type="email"
              placeholder="Seu email"
              className="w-full bg-[#0f1f3d] border border-gray-700 p-4 rounded focus:outline-none focus:border-yellow-400"
            />

            <input
              type="text"
              placeholder="Assunto"
              className="w-full bg-[#0f1f3d] border border-gray-700 p-4 rounded focus:outline-none focus:border-yellow-400"
            />

            <textarea
              placeholder="Sua mensagem"
              rows={5}
              className="w-full bg-[#0f1f3d] border border-gray-700 p-4 rounded focus:outline-none focus:border-yellow-400"
            />

            <button
              type="submit"
              className="bg-yellow-400 text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition"
            >
              Send message
            </button>

          </form>

        </div>

        {/* INFO */}
        <div>

          <p className="text-yellow-400 font-semibold mb-2">
            CONTACT ME
          </p>

          <h3 className="text-xl font-bold mb-6">
            Informações de Contato
          </h3>

          <p className="text-gray-400 mb-8">
            Se quiser conversar sobre projetos, dados ou oportunidades
            profissionais, fique à vontade para entrar em contato.
          </p>

          <div className="space-y-6">

            <div>
              <p className="font-semibold">Email</p>
              <p className="text-gray-400">kelven@email.com</p>
            </div>

            <div>
              <p className="font-semibold">Telefone</p>
              <p className="text-gray-400">+55 11 99999-9999</p>
            </div>

            <div>
              <p className="font-semibold">Local</p>
              <p className="text-gray-400">Brasil</p>
            </div>

          </div>

          {/* SOCIAL */}
          <div className="mt-10">

            <p className="font-semibold mb-4">
              Redes sociais
            </p>

            <div className="flex gap-4">

              <a
                href="#"
                className="border border-gray-700 px-4 py-2 rounded hover:border-yellow-400 transition"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="border border-gray-700 px-4 py-2 rounded hover:border-yellow-400 transition"
              >
                GitHub
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}