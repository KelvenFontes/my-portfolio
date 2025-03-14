import { FaStripe } from "react-icons/fa";

export default function PaymentsExperience() {
  return (
    <section className="w-full max-w-4xl px-6 md:px-12 py-16 mx-auto text-center flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-white mb-6">💳 Experiência com Stripe</h2>
      <p className="text-lg text-gray-400 mb-8 max-w-2xl">
        Desenvolvo integrações de pagamento usando **Stripe**, incluindo **checkout seguro**, **assinaturas recorrentes** e **webhooks** para notificações em tempo real.
      </p>

      {/* Ícone do Stripe estilizado */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center w-48 h-48 transition-transform hover:scale-105">
        <FaStripe size={80} className="text-blue-500" />
        <p className="text-gray-300 mt-4 text-xl font-semibold">Stripe</p>
      </div>

      <p className="text-gray-400 mt-8 max-w-xl">
        Minhas implementações incluem **pagamentos únicos**, **assinaturas**, **cobranças automáticas** e **integração com e-commerce**.
      </p>

      {/* Botão chamativo */}
      <a 
        href="https://stripe.com/docs"
        target="_blank"
        className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-transform hover:scale-105"
      >
        Saiba mais sobre Stripe
      </a>
    </section>
  );
}
