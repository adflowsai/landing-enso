import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Enso Media | Eventos Corporativos & Experiencias de Marca",
  description:
    "Diseñamos y producimos stands, showrooms y eventos corporativos que cautivan, inspiran y generan resultados. +15 años de experiencia creando experiencias memorables.",
  keywords: [
    "eventos corporativos",
    "stands",
    "showrooms",
    "activaciones BTL",
    "eventos México",
    "producción de eventos",
    "marketing experiencial",
  ],
  authors: [{ name: "Enso Media" }],
  openGraph: {
    title: "Enso Media | Eventos Corporativos & Experiencias de Marca",
    description:
      "Transformamos ideas en eventos extraordinarios. Stands, showrooms y eventos corporativos de alto impacto.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
