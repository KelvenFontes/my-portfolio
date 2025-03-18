"use client";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="max-w-3xl text-center sm:text-left mt-16">
      <h2 className="text-4xl font-bold mb-6">📩 Entre em Contato</h2>
      <p className="text-lg text-gray-400">
        Estou disponível para novos projetos e oportunidades! Sinta-se à vontade para entrar em contato.
        Respondo o mais rápido possível. 🚀
      </p>

      {/* Redes Sociais */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-6 mt-6">
        <a href="https://linkedin.com/in/seuusuario" target="_blank" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-all">
          <FaLinkedin size={24} /> LinkedIn
        </a>
        <a href="https://github.com/seuusuario" target="_blank" className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-medium px-4 py-2 rounded-lg transition-all">
          <FaGithub size={24} /> GitHub
        </a>
        <a href="mailto:seuemail@email.com" className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-lg transition-all">
          <FaEnvelope size={24} /> E-mail
        </a>
        <a href="https://wa.me/SEUNUMERO" target="_blank" className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-lg transition-all">
          <FaWhatsapp size={24} /> WhatsApp
        </a>
      </div>

      {/* Formulário de Contato */}
      <form className="mt-8 flex flex-col gap-4">
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
