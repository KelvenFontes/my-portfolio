"use client";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaPaintBrush } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { Parallax } from "react-scroll-parallax";
import ParallaxWrapper from "@/components/ParallaxWrapper";
import { JSX } from "react";

interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
  borderColor: string;
}

const services: Service[] = [
  {
    title: "Desenvolvimento Web",
    description: "Criação de sites e aplicações modernas, rápidas e responsivas com tecnologias como React, Next.js e Tailwind CSS.",
    icon: <FaCode size={50} />,
    borderColor: "border-blue-500",
  },
  {
    title: "Desenvolvimento Mobile",
    description: "Aplicativos para Android e iOS utilizando React Native, garantindo alta performance e excelente experiência do usuário.",
    icon: <FaMobileAlt size={50} />,
    borderColor: "border-green-500",
  },
  {
    title: "UI/UX Design",
    description: "Design de interfaces intuitivas, acessíveis e inovadoras, focadas na melhor experiência do usuário.",
    icon: <FaPaintBrush size={50} />,
    borderColor: "border-purple-500",
  },
];

export default function Services() {
  return (
    <ParallaxWrapper>
      <section className="py-20 text-center relative z-0 bg-gray-900">
        <Parallax speed={-3} className="relative z-10">
          <motion.h2
            className="text-5xl font-bold mb-12 text-gray-100"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Meus Serviços
          </motion.h2>
        </Parallax>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 relative z-10">
          {services.map((service, index) => (
            <Parallax key={index} speed={-2} className="relative z-10">
              <ServiceCard service={service} />
            </Parallax>
          ))}
        </div>
      </section>
    </ParallaxWrapper>
  );
}

// Componente do Card
const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} glareEnable={true} glareMaxOpacity={0.05}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        viewport={{ once: true }}
        className={`relative w-full max-w-[350px] h-[350px] mx-auto text-white p-8 rounded-xl shadow-lg border-2 ${service.borderColor} flex flex-col items-center justify-center transition-all bg-gray-800 hover:bg-gray-700`}
      >
        <div className="flex flex-col items-center">
          {service.icon}
          <h3 className="text-xl font-semibold mt-4 text-center">{service.title}</h3>
        </div>
        <p className="text-md text-center mt-3 leading-relaxed">{service.description}</p>
      </motion.div>
    </Tilt>
  );
};
