"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Placeholder client data - using text since we're using placeholders
const clients = [
  { name: "Televisa", logo: "TELEVISA" },
  { name: "Honor", logo: "HONOR" },
  { name: "Audi", logo: "AUDI" },
  { name: "Google", logo: "GOOGLE" },
  { name: "Dish", logo: "DISH" },
  { name: "PlayStation", logo: "PLAYSTATION" },
  { name: "Xbox", logo: "XBOX" },
  { name: "Tanqueray", logo: "TANQUERAY" },
  { name: "Ecofilm", logo: "ECOFILM" },
  { name: "Freightliner", logo: "FREIGHTLINER" },
  { name: "Diageo", logo: "DIAGEO" },
  { name: "Pernod Ricard", logo: "PERNOD RICARD" },
  { name: "Gentera", logo: "GENTERA" },
  { name: "L'Bel", logo: "L'BEL" },
  { name: "W Hotels", logo: "W HOTELS" },
  { name: "Construrama", logo: "CONSTRURAMA" },
];

export default function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Double the clients array for seamless infinite scroll
  const doubledClients = [...clients, ...clients];

  return (
    <section
      id="clientes"
      className="py-32 bg-[var(--secondary)] overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 bg-[var(--accent)]/10 border border-[var(--accent)]/30 rounded-full text-sm text-[var(--accent)] font-medium mb-6">
            Nuestra Trayectoria
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-[var(--foreground)]">Ellos Han </span>
            <span className="gradient-text">Confiado en Nosotros</span>
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Trabajamos con las marcas más reconocidas de México y Latinoamérica,
            creando experiencias que trascienden.
          </p>
        </motion.div>
      </div>

      {/* Infinite Scroll Marquee - First Row (Left to Right) */}
      <div className="relative mb-8">
        <div className="flex animate-[marquee_30s_linear_infinite]">
          {doubledClients.map((client, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 mx-8 group"
            >
              <div className="w-40 h-20 bg-[var(--background)] rounded-xl flex items-center justify-center border border-[var(--muted)]/10 hover:border-[var(--accent)]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent)]/10">
                <span className="text-[var(--muted)] text-sm font-bold tracking-wider group-hover:text-[var(--accent)] transition-colors duration-300">
                  {client.logo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite Scroll Marquee - Second Row (Right to Left) */}
      <div className="relative">
        <div className="flex animate-[marquee_30s_linear_infinite_reverse]">
          {doubledClients.reverse().map((client, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 mx-8 group"
            >
              <div className="w-40 h-20 bg-[var(--background)] rounded-xl flex items-center justify-center border border-[var(--muted)]/10 hover:border-[var(--accent)]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent)]/10">
                <span className="text-[var(--muted)] text-sm font-bold tracking-wider group-hover:text-[var(--accent)] transition-colors duration-300">
                  {client.logo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        className="max-w-5xl mx-auto px-6 mt-20"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-[var(--background)] rounded-2xl border border-[var(--muted)]/10">
          {[
            { value: "200+", label: "Clientes Activos" },
            { value: "95%", label: "Tasa de Retención" },
            { value: "50+", label: "Industrias" },
            { value: "15+", label: "Países" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-[var(--accent)] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[var(--muted)]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
