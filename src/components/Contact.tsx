"use client";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', phone: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [alert, setAlert] = useState<string | null>(null); // Alerta para simular o WebSocket

  // Simulação de chegada de alerta (sem WebSocket real)
  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert(null); // Remove o alerta após 10 segundos
      }, 10000);
    }
  }, [alert]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const validationErrors = { name: '', email: '', message: '' };

    // Validação de nome
    if (!formData.name) validationErrors.name = "Por favor, insira seu nome.";

    // Validação de e-mail
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      validationErrors.email = "Por favor, insira um e-mail válido.";
    }

    // Validação de mensagem
    if (!formData.message) validationErrors.message = "Por favor, insira sua mensagem.";

    setErrors(validationErrors);
    return validationErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (!validationErrors.name && !validationErrors.email && !validationErrors.message) {
      try {
        setIsSubmitting(true); // Bloqueia o botão enquanto o formulário está sendo enviado

        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // Limpar os campos e os estados
          setFormData({ name: '', email: '', phone: '', message: '' });
          setFormStatus('Mensagem enviada com sucesso!');
          setAlert('Mensagem enviada com sucesso!');

          // Limpeza de alerta após 10 segundos
          setTimeout(() => setAlert(null), 10000);
        } else {
          throw new Error('Falha ao enviar a mensagem.');
        }
      } catch {
        setFormStatus('Ocorreu um erro ao enviar a mensagem.');
        setAlert('Erro no envio! Tente novamente mais tarde.');

        // Limpeza de alerta após 10 segundos
        setTimeout(() => setAlert(null), 10000);
      } finally {
        setIsSubmitting(false); // Libera o botão após o envio (sucesso ou erro)
      }
    } else {
      setFormStatus('Por favor, preencha todos os campos obrigatórios.');
      setAlert('Erro no envio! Preencha todos os campos corretamente.'); // Alerta de erro

      // Remove a mensagem de erro após 10 segundos
      setTimeout(() => setFormStatus(null), 10000);
    }
  };

  return (
    <section className="relative max-w-3xl mx-auto text-center sm:text-left mt-16 px-6 overflow-hidden">
      {/* Fundo com parallax */}
      <div className="absolute top-0 left-0 w-full h-full bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('https://source.unsplash.com/random/1920x1080')" }}></div>

      <div className="relative z-10">
        {/* Exibir o alerta simulado */}
        {alert && (
          <div className="fixed top-0 left-1/2 transform -translate-x-1/2 p-4 bg-green-500 text-white rounded-lg shadow-lg z-50 transition-opacity duration-300">
            {alert}
          </div>
        )}

        {/* Título animado */}
        <h2 className="text-4xl font-bold mb-6 animate__animated animate__fadeIn animate__delay-1s">
          📩 Entre em Contato
        </h2>

        {/* Descrição animada */}
        <p className="text-lg text-gray-400 mb-6 animate__animated animate__fadeIn animate__delay-2s">
          Estou disponível para novos projetos e oportunidades! Sinta-se à vontade para entrar em contato. Respondo o mais rápido possível. 🚀
        </p>

        {/* Links de Redes Sociais responsivos */}
        <div className="flex flex-wrap justify-center gap-6 mt-6 animate__animated animate__fadeIn animate__delay-3s">
          <a
            href="https://linkedin.com/in/kelvenfontes"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visite meu perfil no LinkedIn"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition-transform transform hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-blue-500 animate__animated animate__pulse animate__infinite animate__delay-4s"
          >
            <FaLinkedin size={24} /> LinkedIn
          </a>
          <a
            href="https://github.com/kelvenfontes"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visite meu perfil no GitHub"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-medium px-4 py-2 rounded-lg transition-transform transform hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-gray-500 animate__animated animate__pulse animate__infinite animate__delay-5s"
          >
            <FaGithub size={24} /> GitHub
          </a>
          <a
            href="mailto:kelvenbentofontes@gmail.com"
            aria-label="Envie um e-mail"
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-lg transition-transform transform hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-red-500 animate__animated animate__pulse animate__infinite animate__delay-6s"
          >
            <FaEnvelope size={24} /> E-mail
          </a>
          <a
            href="https://wa.me/+5511953647573"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Envie uma mensagem pelo WhatsApp"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-lg transition-transform transform hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-green-500 animate__animated animate__pulse animate__infinite animate__delay-7s"
          >
            <FaWhatsapp size={24} /> WhatsApp
          </a>
        </div>

        {/* Formulário de Contato responsivo */}
        <form className="mt-8 flex flex-col gap-6 animate__animated animate__slideInUp animate__delay-8s" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Seu Nome"
            aria-label="Seu nome"
            className={`w-full p-4 rounded-lg bg-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-600'} text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Seu E-mail"
            aria-label="Seu e-mail"
            className={`w-full p-4 rounded-lg bg-gray-800 border ${errors.email ? 'border-red-500' : 'border-gray-600'} text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Telefone (opcional)"
            aria-label="Telefone"
            className="w-full p-4 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Sua Mensagem"
            aria-label="Sua mensagem"
            className={`w-full p-3 h-32 rounded-lg bg-gray-800 border border-gray-600 ${errors.message ? 'border-red-500' : 'border-gray-600'} text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full p-4 rounded-lg bg-gradient-to-r from-indigo-800 via-blue-600 to-indigo-800 text-white font-semibold transition duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-l disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
          </button>
        </form>

        {/* Mensagem de status (sucesso ou erro) */}
        {formStatus && (
          <div className={`mt-6 p-4 text-white ${formStatus === 'Mensagem enviada com sucesso!' ? 'bg-green-500' : 'bg-red-500'} rounded-lg`}>
            {formStatus}
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
