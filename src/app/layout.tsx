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
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <style>{`
          :root {
            --background: #0a0a0a;
            --foreground: #f5f5f5;
            --accent: #f5a623;
            --accent-hover: #ffbe3d;
            --secondary: #1a1a1a;
            --muted: #888888;
          }
          body {
            background: #0a0a0a;
            color: #f5f5f5;
            margin: 0;
            padding: 0;
          }
        `}</style>
      </head>
      <body
        className="antialiased"
        style={{
          background: '#0a0a0a',
          color: '#f5f5f5',
          minHeight: '100vh'
        }}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
