'use client';

import { useEffect, useState } from 'react';
import SafeLottie from '@/components/SafeLottie'; // Componente corrigido para evitar SSR
import Navbar from '@/components/Navbar'; // Adicionando a Navbar
import animationData from '../../public/lotties/404-animation.json'; // Caminho correto
import Link from 'next/link'; // Para adicionar um botão de volta

export default function Custom404() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 768); // Verifica se é mobile
    }
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice', // Mantém o lado esquerdo visível
    },
  };

  return (
    <div className={'w-screen h-screen flex flex-col transition-colors duration-300'}>
      {/* Navbar no topo */}
      <Navbar />

      {/* Conteúdo da página 404 */}
      <div className="flex-grow flex items-center justify-center">
        {isMobile ? (
          // Exibe apenas no mobile
          <div className="flex flex-col items-center text-center px-6">
            <h1 className="text-5xl font-bold text-blue-500">404</h1>
            <h2 className="text-2xl font-semibold mt-2">Página não encontrada</h2>
            <p className="text-lg mt-4 max-w-sm">
              Parece que você acessou um link inválido. Mas não se preocupe, você pode voltar à página inicial.
            </p>
            <Link href="/" className="mt-6">
              <p className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
                Voltar para a página inicial
              </p>
            </Link>
          </div>
        ) : (
          // Exibe apenas no desktop
          <div className="absolute inset-0 overflow-hidden flex items-center justify-center w-full h-full">
            <SafeLottie options={defaultOptions} height="100%" width="100%" />
          </div>
        )}
      </div>
    </div>
  );
}
