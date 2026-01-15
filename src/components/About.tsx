"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Heart, Zap, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precisión",
    description: "Cada detalle cuenta. Nos obsesionamos con la perfección en cada proyecto.",
  },
  {
    icon: Heart,
    title: "Pasión",
    description: "Amamos lo que hacemos y eso se refleja en cada experiencia que creamos.",
  },
  {
    icon: Zap,
    title: "Innovación",
    description: "Siempre a la vanguardia, explorando nuevas tecnologías y tendencias.",
  },
  {
    icon: Users,
    title: "Colaboración",
    description: "Trabajamos junto a nuestros clientes como verdaderos socios estratégicos.",
  },
];

const team = [
  {
    name: "Carlos Mendoza",
    role: "Director Creativo",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Ana García",
    role: "Directora de Producción",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Roberto Silva",
    role: "Director de Operaciones",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "María López",
    role: "Directora Comercial",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" className="py-32 bg-[var(--background)]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 bg-[var(--accent)]/10 border border-[var(--accent)]/30 rounded-full text-sm text-[var(--accent)] font-medium mb-6">
            Sobre Nosotros
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-[var(--foreground)]">El </span>
            <span className="gradient-text">Talento</span>
            <span className="text-[var(--foreground)]"> Detrás de la Magia</span>
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-3xl mx-auto">
            Enso Media está conformado por equipos especializados en procesos
            estratégicos y creativos que te ofrecen soluciones para tu negocio.
            Escuchamos tus necesidades y las de tu empresa para transformarlas en
            experiencias integrales.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-[var(--foreground)]">
              Nuestra Historia
            </h3>
            <div className="space-y-4 text-[var(--muted)] leading-relaxed">
              <p>
                Fundada hace más de 15 años, Enso Media nació con una visión clara:
                transformar la manera en que las marcas se conectan con sus audiencias
                a través de experiencias memorables.
              </p>
              <p>
                El nombre &quot;Enso&quot; proviene del símbolo zen que representa el
                momento en que la mente está libre para simplemente crear. Este círculo
                incompleto simboliza nuestra filosofía: siempre en evolución, siempre
                mejorando.
              </p>
              <p>
                Hoy, somos un equipo multidisciplinario de más de 50 profesionales
                apasionados por crear experiencias que dejan huella.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-10 space-y-4">
              {[
                { year: "2009", event: "Fundación de Enso Media" },
                { year: "2015", event: "Expansión a nivel nacional" },
                { year: "2020", event: "Digitalización de servicios" },
                { year: "2024", event: "+500 eventos exitosos" },
              ].map((item, index) => (
                <motion.div
                  key={item.year}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <span className="text-[var(--accent)] font-bold text-lg w-16">
                    {item.year}
                  </span>
                  <div className="w-3 h-3 rounded-full bg-[var(--accent)]" />
                  <span className="text-[var(--foreground)]">{item.event}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image Collage */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80"
                    alt="Team working"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80"
                    alt="Team meeting"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=600&q=80"
                    alt="Event production"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80"
                    alt="Corporate event"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[var(--accent)]/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-[var(--accent)] rounded-2xl -z-10" />
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-[var(--foreground)]">
            Nuestros Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="p-6 bg-[var(--secondary)] rounded-2xl border border-[var(--muted)]/10 hover:border-[var(--accent)]/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[var(--accent)]/20 transition-colors">
                  <value.icon className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-[var(--foreground)]">
                  {value.title}
                </h4>
                <p className="text-sm text-[var(--muted)]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-[var(--foreground)]">
            Nuestro Equipo Directivo
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-60" />
                </div>
                <h4 className="font-bold text-[var(--foreground)]">{member.name}</h4>
                <p className="text-sm text-[var(--accent)]">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
