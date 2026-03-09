"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Resume from "@/components/Resume";
import ScrollToTop from "@/components/ScrollToTop";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Resume />

      <Contact />

      <Footer />
      <ScrollToTop />
    </>
  );
}
