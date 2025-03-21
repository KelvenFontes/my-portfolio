"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import PaymentsExperience from "../components/PaymentsExperience";
import TechCarousel from "../components/TechCarousel";
import Hero from "@/components/Hero";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Spotlight } from "@/components/ui/Spotligh";
import { CodeBlock } from "@/components/CodeBlock";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Experience } from "@/components/Experience";



export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center mx-auto">
      <Navbar />

      <Spotlight />
      <BackgroundBeams />

      <motion.section id="Hero" className="w-full max-w-4xl px-6 md:px-12 py-16 mx-auto text-center flex flex-col items-center justify-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <Hero />
      </motion.section>

      <div className="w-full max-w-8xl mx-auto flex flex-col lg:flex-row items-center justify-between lg:mt-10 py-16 px-6">
        {/* Seção Sobre Mim */}
        <motion.section
          id="about"
          className="w-full lg:w-1/2 px-6 lg:px-12 py-16 mx-auto text-center flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <About />
        </motion.section>

        {/* Code Block ao lado */}
        <motion.section
          className="w-full lg:w-1/2 px-6 lg:px-12 py-16 mx-auto text-center flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <CodeBlock />
        </motion.section>
      </div>


      {/* <motion.section id="services" className="w-full max-w-4xl px-6 md:px-12 py-16 mx-auto text-center flex flex-col items-center justify-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Services />
      </motion.section> */}

      <motion.section id="technologies" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <TechCarousel />
      </motion.section>

      <motion.section id="payments" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <PaymentsExperience />
      </motion.section>



      <motion.section id="projects" className="w-full max-w-4xl px-6 md:px-12 py-16 mx-auto text-center flex flex-col items-center justify-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Projects />
      </motion.section>

      {/* <motion.section id="blog" className="w-full max-w-4xl px-6 md:px-12 py-16 mx-auto text-center flex flex-col items-center justify-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Blog />
      </motion.section> */}

      {/* <Stats /> */}

      <Experience />

      <div className="flex items-center justify-center">
        <BackgroundBeamsWithCollision>
          <motion.section id="contact" className="w-full max-w-4xl px-6 md:px-12 mb-16 mx-auto text-center flex flex-col items-center justify-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Contact />
          </motion.section>
        </BackgroundBeamsWithCollision>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
