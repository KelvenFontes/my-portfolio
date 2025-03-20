"use client";

import { CodeBlockUi } from "@/components/ui/code-block";

export function CodeBlock() {
  // Componente "About" com JSX
  const code = `
const About = () => {
  return (
    <section className="max-w-3xl text-center sm:text-left">
      <h2 className="text-4xl font-bold mb-4">Sobre Mim</h2>
      <p className="text-lg">
        Olá! Sou <strong>Kelven Fontes</strong>, um <strong>Desenvolvedor Full Stack</strong> com formação em Desenvolvimento de Software Multiplataforma pela FATEC.
        Tenho experiência na criação de aplicações <strong>web, mobile e backend</strong>, sempre focado em performance e experiência do usuário.
      </p>
      <p className="text-lg mt-4">
        No <strong>Frontend</strong>, trabalho com <strong>React.js</strong> e <strong>Next.js</strong>, desenvolvendo interfaces modernas e responsivas.
        No <strong>Backend</strong>, utilizo <strong>Node.js</strong> e <strong>Express.js</strong> para construir APIs robustas e escaláveis.
        Também possuo experiência em <strong>React Native</strong> e serviços de cloud, como <strong>AWS</strong>.
      </p>
    </section>
  );
};

export default About;
  `;

  return (
    <div className="flex items-center justify-center w-full bg-gray-900">
      <div className="w-full max-w-4xl bg-gray-800 p-1 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <CodeBlockUi
          language="tsx"
          filename="About.tsx"
          code={code}
        />
      </div>
    </div>
  );
}
