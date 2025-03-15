import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import PageLoader from "@/components/PageLoader"; // Importando o PageLoader

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Meu Portfólio",
  description: "Este é o meu portfólio desenvolvido com Next.js e Tailwind CSS",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <PageLoader>
          {children}
        </PageLoader>
      </body>
    </html>
  );
}
