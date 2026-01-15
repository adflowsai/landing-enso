"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Laura Hernández",
    role: "Directora de Marketing",
    company: "Televisa",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
    content:
      "Enso Media transformó completamente nuestra visión para la convención anual. Su creatividad y profesionalismo superaron todas nuestras expectativas. Definitivamente seguiremos trabajando con ellos.",
    rating: 5,
    project: "Convención Anual 2024",
  },
  {
    id: 2,
    name: "Miguel Ángel Torres",
    role: "Gerente de Eventos",
    company: "Audi México",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80",
    content:
      "El stand que diseñaron para la Expo Auto fue el más visitado del evento. La atención al detalle y la calidad de construcción fueron impecables. Un equipo verdaderamente profesional.",
    rating: 5,
    project: "Stand Expo Auto",
  },
  {
    id: 3,
    name: "Carolina Vega",
    role: "Brand Manager",
    company: "Diageo",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80",
    content:
      "Las activaciones BTL que realizaron para nuestras marcas generaron un engagement increíble. Entienden perfectamente cómo conectar con las audiencias de manera memorable.",
    rating: 5,
    project: "Activación Festival",
  },
  {
    id: 4,
    name: "Roberto Méndez",
    role: "Director General",
    company: "W Hotels",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
    content:
      "La inauguración del hotel fue un éxito rotundo gracias a Enso Media. Cada detalle, desde la producción hasta la coordinación, fue ejecutado con maestría.",
    rating: 5,
    project: "Inauguración W Polanco",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonios"
      className="py-32 bg-[var(--secondary)]"
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
            Testimonios
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-[var(--foreground)]">Lo Que </span>
            <span className="gradient-text">Dicen de Nosotros</span>
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mayor recompensa.
            Conoce sus experiencias trabajando con nosotros.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative bg-[var(--background)] rounded-3xl p-8 md:p-12 border border-[var(--muted)]/10">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-[var(--accent)] rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-[var(--background)]" />
            </div>

            {/* Content */}
            <div className="mt-4">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[var(--accent)] text-[var(--accent)]"
                  />
                ))}
              </div>

              {/* Quote */}
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-xl md:text-2xl text-[var(--foreground)] leading-relaxed mb-8 italic"
              >
                &quot;{testimonials[currentIndex].content}&quot;
              </motion.p>

              {/* Project Tag */}
              <span className="inline-block px-4 py-1 bg-[var(--accent)]/10 text-[var(--accent)] text-sm rounded-full mb-6">
                {testimonials[currentIndex].project}
              </span>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[var(--accent)]"
                />
                <div>
                  <h4 className="font-bold text-[var(--foreground)]">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-[var(--muted)]">
                    {testimonials[currentIndex].role} en{" "}
                    <span className="text-[var(--accent)]">
                      {testimonials[currentIndex].company}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute -bottom-6 right-8 flex gap-2">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-[var(--secondary)] rounded-full flex items-center justify-center border border-[var(--muted)]/20 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-[var(--accent)] rounded-full flex items-center justify-center text-[var(--background)] hover:bg-[var(--accent-hover)] transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-[var(--accent)]"
                    : "bg-[var(--muted)]/30 hover:bg-[var(--muted)]"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* All Testimonials Grid (smaller) */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                index === currentIndex
                  ? "bg-[var(--accent)]/10 border-[var(--accent)]"
                  : "bg-[var(--background)] border-[var(--muted)]/10 hover:border-[var(--accent)]/50"
              }`}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h5 className="font-semibold text-sm text-[var(--foreground)]">
                    {testimonial.name}
                  </h5>
                  <p className="text-xs text-[var(--muted)]">
                    {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-sm text-[var(--muted)] line-clamp-3">
                &quot;{testimonial.content}&quot;
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
