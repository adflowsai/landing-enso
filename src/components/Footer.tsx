"use client";

import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";

const footerLinks = {
  servicios: [
    { name: "Stands", href: "#servicios" },
    { name: "Showrooms", href: "#servicios" },
    { name: "Eventos Corporativos", href: "#servicios" },
    { name: "Activaciones BTL", href: "#servicios" },
    { name: "Producción Audiovisual", href: "#servicios" },
  ],
  empresa: [
    { name: "Nosotros", href: "#nosotros" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Clientes", href: "#clientes" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Contacto", href: "#contacto" },
  ],
  legal: [
    { name: "Aviso de Privacidad", href: "#" },
    { name: "Términos y Condiciones", href: "#" },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--secondary)] border-t border-[var(--muted)]/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  style={{ transform: "rotate(-90deg)" }}
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="213"
                    strokeDashoffset="32"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[var(--accent)]">
                  enso
                </span>
                <span className="text-[8px] tracking-[0.3em] text-[var(--muted)] uppercase">
                  media
                </span>
              </div>
            </a>
            <p className="text-[var(--muted)] text-sm leading-relaxed mb-6">
              Transformamos ideas en experiencias extraordinarias. Más de 15 años
              creando eventos que dejan huella.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] text-xs rounded-full">
                Eventos
              </span>
              <span className="px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] text-xs rounded-full">
                BTL
              </span>
              <span className="px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] text-xs rounded-full">
                Stands
              </span>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-6">
              Servicios
            </h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-6">
              Empresa
            </h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-6">
              Newsletter
            </h4>
            <p className="text-[var(--muted)] text-sm mb-4">
              Suscríbete para recibir noticias y actualizaciones.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--muted)]/20 rounded-xl text-[var(--foreground)] placeholder-[var(--muted)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
              />
              <button
                type="submit"
                className="w-full py-3 bg-[var(--accent)] text-[var(--background)] font-semibold rounded-xl hover:bg-[var(--accent-hover)] transition-colors text-sm"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--muted)]/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-1 text-sm text-[var(--muted)]">
              <span>&copy; {new Date().getFullYear()} Enso Media.</span>
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-[var(--accent)] fill-[var(--accent)]" />
              <span>en México</span>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Scroll to Top */}
            <motion.button
              onClick={scrollToTop}
              className="w-10 h-10 bg-[var(--accent)] rounded-full flex items-center justify-center text-[var(--background)] hover:bg-[var(--accent-hover)] transition-colors"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
