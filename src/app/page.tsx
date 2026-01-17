"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Clients from "@/components/Clients";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0a', color: '#f5f5f5' }}>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Clients />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
