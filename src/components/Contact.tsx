"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Dirección",
      content: "Leibnitz 117, P.H., Anzures, C.P. 11590, CDMX",
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "+52 (55) 6266 9100",
    },
    {
      icon: Mail,
      title: "Email",
      content: "contacto@ensomedia.mx",
    },
    {
      icon: Clock,
      title: "Horario",
      content: "Lunes a Viernes: 9:00 - 18:00",
    },
  ];

  return (
    <section id="contacto" className="py-32 bg-[var(--background)]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 bg-[var(--accent)]/10 border border-[var(--accent)]/30 rounded-full text-sm text-[var(--accent)] font-medium mb-6">
            Contáctanos
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-[var(--foreground)]">Hagamos </span>
            <span className="gradient-text">Realidad tu Proyecto</span>
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            ¿Tienes un evento en mente? Nos encantaría escucharte y ayudarte a
            crear una experiencia inolvidable.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-[var(--secondary)] rounded-3xl p-8 md:p-10 border border-[var(--muted)]/10">
              <h3 className="text-2xl font-bold mb-6 text-[var(--foreground)]">
                Envíanos un mensaje
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--muted)]/20 rounded-xl text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--muted)]/20 rounded-xl text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--muted)]/20 rounded-xl text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                      placeholder="+52 (55) 1234 5678"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--muted)]/20 rounded-xl text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Servicio de Interés
                  </label>
                  <select
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--muted)]/20 rounded-xl text-[var(--foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="stands">Stands</option>
                    <option value="showrooms">Showrooms</option>
                    <option value="eventos">Eventos Corporativos</option>
                    <option value="btl">Activaciones BTL</option>
                    <option value="audiovisual">Producción Audiovisual</option>
                    <option value="consultoria">Consultoría Creativa</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[var(--background)] border border-[var(--muted)]/20 rounded-xl text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-4 bg-[var(--accent)] text-[var(--background)] font-semibold rounded-xl hover:bg-[var(--accent-hover)] transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      ¡Mensaje Enviado!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Mensaje
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="p-6 bg-[var(--secondary)] rounded-2xl border border-[var(--muted)]/10 hover:border-[var(--accent)]/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-10 h-10 bg-[var(--accent)]/10 rounded-lg flex items-center justify-center mb-4">
                    <info.icon className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <h4 className="font-semibold text-[var(--foreground)] mb-1">
                    {info.title}
                  </h4>
                  <p className="text-sm text-[var(--muted)]">{info.content}</p>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              className="relative h-64 rounded-2xl overflow-hidden border border-[var(--muted)]/10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <div className="absolute inset-0 bg-[var(--secondary)]">
                {/* Stylized map placeholder */}
                <div className="w-full h-full flex items-center justify-center relative">
                  <div className="absolute inset-0 opacity-10">
                    {/* Grid pattern */}
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)`,
                        backgroundSize: '30px 30px'
                      }}
                    />
                  </div>
                  <div className="relative z-10 text-center">
                    <div className="w-12 h-12 bg-[var(--accent)] rounded-full flex items-center justify-center mx-auto mb-3 animate-bounce">
                      <MapPin className="w-6 h-6 text-[var(--background)]" />
                    </div>
                    <p className="text-[var(--foreground)] font-medium">
                      Anzures, CDMX
                    </p>
                    <p className="text-xs text-[var(--muted)] mt-1">
                      Click para ver en Google Maps
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
            >
              <h4 className="font-semibold text-[var(--foreground)] mb-4">
                Síguenos en redes
              </h4>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 bg-[var(--secondary)] rounded-xl flex items-center justify-center border border-[var(--muted)]/10 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
                    whileHover={{ y: -3 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
