
import { getDictionary } from "@/lib/getDictionary"

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/NavbarPt";
import Resume from "@/components/Resume";
import ScrollToTop from "@/components/ScrollToTop";
import Skills from "@/components/Skills";
import TechCarousel from "@/components/TechCarousel";
import NavbarEn from "@/components/NavbarEn";

export default async function Home() {

  const dict = await getDictionary("en")

  return (
    <>
      <NavbarEn />

      <Hero dict={dict}/>

      <About dict={dict}/>

      <Skills />

      <TechCarousel />

      <Resume />

      <Contact />

      <Footer />
      <ScrollToTop />
    </>
  );
}
