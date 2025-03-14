const Contact = () => {
    return (
      <section className="max-w-3xl text-center sm:text-left mt-16">
        <h2 className="text-4xl font-bold text-white mb-6">Contato</h2>
        <p className="text-lg text-gray-400">
          Entre em contato para projetos ou oportunidades! Respondo o mais rápido possível.
        </p>
  
        <form className="mt-6 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Seu Nome"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
          />
          <input
            type="email"
            placeholder="Seu E-mail"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white"
          />
          <textarea
            placeholder="Sua Mensagem"
            className="w-full p-3 h-32 rounded-lg bg-gray-800 border border-gray-600 text-white"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg transition"
          >
            Enviar Mensagem
          </button>
        </form>
      </section>
    );
  };
  
  export default Contact;
  