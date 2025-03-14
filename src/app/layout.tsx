import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Configurando a fonte Poppins com pesos e otimizações
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Adicione os pesos que deseja usar
  display: "swap", // Para melhor performance
});

export const metadata: Metadata = {
  title: "Meu Portfólio",
  description: "Este é o meu portfólio desenvolvido com Next.js e Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
