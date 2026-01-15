"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Building2, PartyPopper, Palette, Megaphone, Clapperboard } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Stands",
    description:
      "Diseñamos y construimos stands que destacan en cualquier exposición. Espacios creativos que reflejan la esencia de tu marca y atraen a tu público objetivo.",
    features: ["Diseño 3D personalizado", "Construcción a medida", "Instalación profesional"],
  },
  {
    icon: Palette,
    title: "Showrooms",
    description:
      "Creamos espacios inmersivos que transforman la experiencia del espectador. Ambientes únicos donde tu producto es el protagonista absoluto.",
    features: ["Experiencias inmersivas", "Iluminación especial", "Tecnología interactiva"],
  },
  {
    icon: PartyPopper,
    title: "Eventos Corporativos",
    description:
      "Organizamos eventos que marcan la diferencia. Desde lanzamientos de productos hasta convenciones, cada detalle está cuidadosamente planificado.",
    features: ["Producción integral", "Coordinación logística", "Entretenimiento premium"],
  },
  {
    icon: Megaphone,
    title: "Activaciones BTL",
    description:
      "Estrategias de marketing experiencial que conectan con tu audiencia de forma memorable. Creamos momentos que generan engagement real.",
    features: ["Conceptos creativos", "Implementación nacional", "Medición de resultados"],
  },
  {
    icon: Clapperboard,
    title: "Producción Audiovisual",
    description:
      "Contenido visual de alto impacto para tus eventos y campañas. Video mapping, transmisiones en vivo y postproducción profesional.",
    features: ["Video mapping", "Streaming profesional", "Edición cinematográfica"],
  },
  {
    icon: Lightbulb,
    title: "Consultoría Creativa",
    description:
      "Te acompañamos desde la conceptualización hasta la ejecución. Nuestro equipo de expertos desarrolla estrategias personalizadas para tu marca.",
    features: ["Estrategia de marca", "Diseño conceptual", "Dirección artística"],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="py-32 bg-[var(--secondary)]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 bg-[var(--accent)]/10 border border-[var(--accent)]/30 rounded-full text-sm text-[var(--accent)] font-medium mb-6">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-[var(--foreground)]">Soluciones </span>
            <span className="gradient-text">Integrales</span>
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Ofrecemos un portafolio completo de servicios para hacer realidad
            cualquier proyecto que imagines.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative bg-[var(--background)] rounded-2xl p-8 border border-[var(--muted)]/10 hover:border-[var(--accent)]/50 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-14 h-14 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center group-hover:bg-[var(--accent)]/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-[var(--accent)]" />
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold mb-3 text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[var(--muted)] mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-[var(--muted)]"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[var(--accent)] text-[var(--accent)] font-semibold rounded-full hover:bg-[var(--accent)] hover:text-[var(--background)] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicita una Cotización
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
