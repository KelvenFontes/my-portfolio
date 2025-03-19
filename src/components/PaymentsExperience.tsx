"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaStripe } from "react-icons/fa";

export default function PaymentsExperience() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="w-full max-w-5xl px-6 md:px-12 py-16 mx-auto text-center flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animação de entrada do título */}
      <motion.h2
        className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        💳 Experiência com <span className="text-blue-500">Stripe</span>
      </motion.h2>

      <motion.p
        className="text-lg text-gray-400 mb-8 max-w-2xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Desenvolvo <strong>integrações personalizadas</strong> com o <span className="text-blue-400 font-semibold">Stripe</span>, como <strong>processamento de pagamentos online</strong>, <strong>cobranças recorrentes</strong>, e <strong>notificações em tempo real</strong> usando webhooks.
      </motion.p>

      {/* Container com Logo do Stripe + Cartão */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Ícone do Stripe */}
        <motion.div
          className="bg-gray-800 p-6 rounded-lg shadow-xl flex flex-col items-center justify-center w-48 h-48 transition-transform hover:scale-105"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <FaStripe size={80} className="text-blue-500" />
        </motion.div>

        {/* Cartão de Crédito com efeito de rotação 3D */}
        <div
          className="relative w-80 md:w-96 h-56 cursor-pointer"
          onMouseEnter={() => setFlipped(true)}
          onMouseLeave={() => setFlipped(false)}
          style={{ perspective: "1000px" }}
        >
          <motion.div
            className="relative w-full h-full"
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* Frente do Cartão */}
            <div
              className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-xl text-white"
              style={{ backfaceVisibility: "hidden" }}
            >
              {/* Chip e Bandeira */}
              <div className="flex justify-between items-center">
                <div className="w-10 h-7 bg-yellow-400 rounded-sm"></div> {/* Simulação do chip */}
                <FaStripe size={40} />
              </div>

              {/* Número do Cartão */}
              <p className="text-2xl tracking-widest text-center mt-4">**** **** **** 4242</p>

              {/* Nome e Validade */}
              <div className="flex justify-between text-sm mt-2">
                <div>
                  <p className="text-gray-300">Nome no Cartão</p>
                  <p className="font-semibold text-lg">Kelven Fontes</p>
                </div>
                <div>
                  <p className="text-gray-300">Validade</p>
                  <p className="font-semibold text-lg">12/26</p>
                </div>
              </div>
            </div>

            {/* Verso do Cartão */}
            <div
              className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl shadow-xl text-white"
              style={{
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
              }}
            >
              {/* Faixa Magnética realista */}
              <div className="w-full h-12 bg-gray-950 rounded-t-xl"></div>

              {/* Código CVV destacado */}
              <div className="mt-6 px-4 py-2 bg-white text-black rounded-lg flex justify-between items-center shadow-md">
                <p className="text-lg font-semibold tracking-wide">Código de Segurança</p>
                <p className="text-xl font-bold">•••</p>
              </div>

              {/* Nome e Banco */}
              <div className="flex justify-between items-center mt-4">
                <p className="text-md text-gray-300 font-semibold">Kelven Fontes</p>
                <FaStripe size={30} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Descrição extra */}
      <motion.p
        className="text-gray-400 mt-8 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Realizo a integração completa de <strong>pagamentos online</strong> em plataformas digitais, permitindo que você implemente <strong>transações seguras</strong> de maneira eficiente.
      </motion.p>

      {/* Botões chamativos */}
      <div className="mt-8 flex gap-6 justify-center">
        {/* Botão para testar o projeto */}
        <motion.a
          href="https://seu-projeto-exemplo.com/teste" // Substitua pelo link do seu projeto
          target="_blank"
          className="inline-block bg-gradient-to-r from-green-500 to-teal-500 hover:from-teal-500 hover:to-green-500 text-white font-medium py-3 px-8 rounded-full shadow-lg relative overflow-hidden transition-transform hover:scale-110 hover:shadow-xl"
          whileHover={{ boxShadow: "0px 0px 15px rgba(0, 255, 0, 0.6)" }}
        >
          Teste o Projeto
        </motion.a>

        {/* Botão para saber mais sobre o Stripe */}
        <motion.a
          href="https://stripe.com/docs"
          target="_blank"
          className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-full shadow-lg relative overflow-hidden transition-transform hover:scale-110 hover:shadow-xl"
          whileHover={{ boxShadow: "0px 0px 15px rgba(0, 140, 255, 0.6)" }}
        >
          Saiba Mais sobre o Stripe
        </motion.a>
      </div>
    </section>
  );
}
