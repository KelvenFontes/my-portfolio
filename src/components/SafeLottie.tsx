'use client';

import dynamic from 'next/dynamic';

// Importamos o Lottie dinamicamente para evitar erro no SSR
const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

interface SafeLottieProps {
  options: {
    loop: boolean;
    autoplay: boolean;
    animationData: object;
    rendererSettings: {
      preserveAspectRatio: string;
    };
  };
  height?: string | number;
  width?: string | number;
}

export default function SafeLottie({ options, height, width }: SafeLottieProps) {
  return <Lottie options={options} height={height} width={width} />;
}
