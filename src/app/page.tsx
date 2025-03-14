"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import TypingEffect from "../components/TypingEffect";
import About from "../components/About";
import Skills from "../components/Skills";
import Services from "../components/Services";  // ✅ Nova seção de Serviços
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";  // ✅ Mantida
import Blog from "../components/Blog";  // ✅ Nova seção de Blog
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";  // ✅ Botão "Voltar ao Topo"
import Stats from "@/components/Stats";
import PaymentsExperience from "../components/PaymentsExperience"; // ✅ Importando a seção
import TechCarousel from "../components/TechCarousel"; // ✅ Importando o carrossel

export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col items-center">
      <Navbar />

      {/* ✅ HERO SECTION - Mantendo tudo exatamente como estava */}
      <section id="hero" className="w-full flex flex-col items-center justify-center min-h-screen text-center px-6 md:px-12 pt-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <Image
            className="rounded-full shadow-lg border-4 border-gray-700"
            src="/profile.jpg"
            alt="Minha Foto"
            width={150}
            height={150}
          />

          <h1 className="text-5xl font-bold mt-6">
            Olá, eu sou <span className="text-blue-400">Seu Nome</span>
          </h1>
          <p className="text-lg text-gray-400 mt-2">
            <TypingEffect />
          </p>

          {/* ✅ Mantendo os botões intactos */}
          <div className="flex flex-wrap gap-4 mt-6 justify-center">
            <a className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-lg transition-all" href="https://linkedin.com/in/seuusuario" target="_blank">🔗 LinkedIn</a>
            <a className="bg-gray-800 hover:bg-gray-700 text-white text-lg font-semibold px-6 py-3 rounded-lg transition-all" href="https://github.com/seuusuario" target="_blank">🖥️ GitHub</a>
            <a className="bg-green-500 hover:bg-green-600 text-white text-lg font-semibold px-6 py-3 rounded-lg transition-all" href="mailto:seuemail@email.com">📩 Contato</a>
          </div>
        </motion.div>
      </section>

      {/* ✅ SEÇÕES EXISTENTES MANTIDAS */}
      <motion.section id="about" className="w-full max-w-4xl px-6 md:px-12 py-16 mx-auto text-center flex flex-col items-center justify-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <About />
      </motion.section>

      <motion.section id="skills" className="w-full max-w-4xl px-6 md:px-12 py-16 mx-auto text-center flex flex-col items-center justify-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Skills />
      </motion.section>

      {/* ✅ NOVAS SEÇÕES ADICIONADAS SEM REMOVER NADA */}
      <motion.section id="services" className="w-full max-w-4xl px-6 md:px-12 py-16 mx-auto text-center flex flex-col items-center justify-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Services />
      </motion.section>

      <motion.section id="technologies" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <TechCarousel />
      </motion.section>

      <motion.section id="payments" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <PaymentsExperience />
      </motion.section>



      <motion.section id="projects" className="w-full max-w-4xl px-6 md:px-12 py-16 mx-auto text-center flex flex-col items-center justify-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Projects />
      </motion.section>

      {/* ✅ SEÇÃO "DEPOIMENTOS" (TESTIMONIALS) MANTIDA */}
      <motion.section id="testimonials" className="w-full max-w-4xl px-6 md:px-12 py-16 mx-auto text-center flex flex-col items-center justify-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Testimonials />
      </motion.section>

      {/* ✅ SEÇÃO "BLOG" ADICIONADA SEM REMOVER OUTRAS */}
      <motion.section id="blog" className="w-full max-w-4xl px-6 md:px-12 py-16 mx-auto text-center flex flex-col items-center justify-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Blog />
      </motion.section>

      <Stats />

      {/* ✅ SEÇÃO "CONTATO" MANTIDA */}
      <motion.section id="contact" className="w-full max-w-4xl px-6 md:px-12 py-16 mx-auto text-center flex flex-col items-center justify-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Contact />
      </motion.section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
