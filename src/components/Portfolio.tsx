"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const categories = ["Todos", "Stands", "Showrooms", "Eventos", "BTL"];

const projects = [
  {
    id: 1,
    title: "Stand Audi - Expo Auto",
    category: "Stands",
    description: "Diseño y construcción de stand premium para el lanzamiento del nuevo Audi e-tron GT.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    size: "large",
  },
  {
    id: 2,
    title: "Showroom Google México",
    category: "Showrooms",
    description: "Espacio inmersivo para presentación de productos Google en CDMX.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
    size: "medium",
  },
  {
    id: 3,
    title: "Convención Televisa 2024",
    category: "Eventos",
    description: "Producción integral de la convención anual de Televisa.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    size: "medium",
  },
  {
    id: 4,
    title: "Activación Diageo - Festival",
    category: "BTL",
    description: "Experiencia de marca interactiva en festival de música.",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
    size: "small",
  },
  {
    id: 5,
    title: "Stand Honor - MWC",
    category: "Stands",
    description: "Presencia de marca en Mobile World Congress.",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80",
    size: "small",
  },
  {
    id: 6,
    title: "Lanzamiento W Hotels",
    category: "Eventos",
    description: "Evento de inauguración del nuevo W Hotel en Polanco.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80",
    size: "large",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-32 bg-[var(--background)]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 bg-[var(--accent)]/10 border border-[var(--accent)]/30 rounded-full text-sm text-[var(--accent)] font-medium mb-6">
            Nuestro Trabajo
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-[var(--foreground)]">Portfolio de </span>
            <span className="gradient-text">Proyectos</span>
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Cada proyecto es una historia de éxito. Descubre cómo hemos transformado
            las visiones de nuestros clientes en experiencias memorables.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[var(--accent)] text-[var(--background)]"
                  : "bg-[var(--secondary)] text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--secondary)]/80"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                project.size === "large" ? "md:col-span-2 md:row-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              layout
              whileHover={{ y: -5 }}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden ${
                  project.size === "large" ? "aspect-[16/10]" : "aspect-[4/3]"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-3 py-1 bg-[var(--accent)] text-[var(--background)] text-xs font-semibold rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-2">
                  {project.title}
                </h3>
                <p className="text-[var(--muted)] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.description}
                </p>
              </div>

              {/* Arrow icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-[var(--accent)] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <ArrowUpRight className="w-5 h-5 text-[var(--background)]" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-[var(--background)] font-semibold rounded-full hover:bg-[var(--accent-hover)] transition-all duration-300 hover:shadow-xl hover:shadow-[var(--accent)]/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Todos los Proyectos
            <ExternalLink className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
