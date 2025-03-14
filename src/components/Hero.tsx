import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="text-center flex flex-col items-center gap-6 py-20">
      {/* Foto de perfil */}
      <Image
        className="rounded-full shadow-xl hover:scale-105 transition-transform"
        src="/profile.jpg"
        alt="Sua Foto"
        width={140}
        height={140}
      />

      {/* Nome e título profissional */}
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">Seu Nome</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg">
        Desenvolvedor Frontend | Especialista em Next.js, React & Tailwind CSS
      </p>

      {/* Botões de contato */}
      <div className="flex gap-4 mt-4">
        <Button text="LinkedIn" variant="primary" />
        <Button text="GitHub" variant="secondary" />
      </div>
    </section>
  );
};

export default Hero;
