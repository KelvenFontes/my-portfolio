"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import PaymentsExperience from "../components/PaymentsExperience";
import TechCarousel from "../components/TechCarousel";
import Hero from "@/components/Hero";
// import { Spotlight } from "@/components/ui/Spotligh";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center mx-auto">
      <Navbar />

      <BackgroundBeams />

      <motion.section id="Hero" className="w-full max-w-4xl px-6 md:px-12 py-16 mx-auto text-center flex flex-col items-center justify-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <Hero />
      </motion.section>

      <motion.section id="about" className="w-full max-w-4xl px-6 md:px-12 py-16 mx-auto text-center flex flex-col items-center justify-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <About />
      </motion.section>

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

      {/* <motion.section id="blog" className="w-full max-w-4xl px-6 md:px-12 py-16 mx-auto text-center flex flex-col items-center justify-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Blog />
      </motion.section> */}

      {/* <Stats /> */}

      {/* <Experience /> */}

      <motion.section id="contact" className="w-full max-w-4xl px-6 md:px-12 py-16 mx-auto text-center flex flex-col items-center justify-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Contact />
      </motion.section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
