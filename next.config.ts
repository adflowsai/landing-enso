import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permitir imágenes de dominios externos
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "**.unsplash.com",
      },
    ],
    unoptimized: true,
  },
  // Configuración para previsualizadores
  output: "standalone",
  // Deshabilitar strict mode para evitar doble renderizado en dev
  reactStrictMode: false,
  // Permitir cualquier host (necesario para Bolt)
  allowedDevOrigins: ["*"],
};

export default nextConfig;
