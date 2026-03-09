"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
// import { motion } from "framer-motion";
// import Navbar from "../components/Navbar";
// import About from "../components/About";
// import Projects from "../components/Projects";
// import Contact from "../components/Contact";
// import Footer from "../components/Footer";
// import ScrollToTop from "../components/ScrollToTop";
// import Hero from "@/components/Hero";
// import { CodeBlock } from "@/components/CodeBlock";
// import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center mx-auto">

      <Navbar />

      <HeroSection />

        <About />

        <Skills />

        <Resume />

        <Contact />




      {/* <Navbar /> */}

      {/* <motion.section id="Hero" className="w-full max-w-4xl px-6 md:px-12 py-16 mx-auto text-center flex flex-col items-center justify-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <Hero />
      </motion.section> */}

      {/* <div className="w-full max-w-8xl mx-auto flex flex-col lg:flex-row items-center justify-between lg:mt-10 py-16 px-6">
        <motion.section
          id="about"
          className="w-full lg:w-1/2 px-6 lg:px-12 py-16 mx-auto text-center flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <About />
        </motion.section>

        <motion.section
          className="w-full lg:w-1/2 px-6 lg:px-12 py-16 mx-auto text-center flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <CodeBlock />
        </motion.section>
      </div> */}


      {/* <motion.section id="projects" className="w-full max-w-4xl px-6 md:px-12 py-16 mx-auto text-center flex flex-col items-center justify-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Projects />
      </motion.section> */}

      {/* <div className="flex items-center justify-center">
        <motion.section id="contact" className="w-full max-w-4xl px-6 md:px-12 mb-16 mx-auto text-center flex flex-col items-center justify-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Contact />
        </motion.section>
      </div> */}

      {/* <Footer /> */}
      {/* <ScrollToTop /> */}
    </div>
  );
}
