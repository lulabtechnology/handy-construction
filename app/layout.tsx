import "./globals.css";
import type { Metadata } from "next";
import { inter } from "./fonts/fonts";

export const metadata: Metadata = {
  title: "Grupo Handy — Diseño, construcción, capacitación y consultoría",
  description:
    "CONSTRUYENDO EL FUTURO, PROTEGIENDO EL PRESENTE. Servicios profesionales en ingeniería, carpintería, suministros y seguridad laboral.",
  metadataBase: new URL("https://handy-construction.example.com"),
  openGraph: {
    title: "Grupo Handy",
    description: "Diseño, construcción, capacitación y consultoría.",
    url: "https://handy-construction.example.com",
    siteName: "Grupo Handy",
    images: [{ url: "/handy/hero.jpg", width: 1200, height: 630 }],
    locale: "es_PA",
    type: "website",
  },
  alternates: { canonical: "/" },
  icons: { icon: "/handy/logo.png" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable}`}>
      <body className="min-h-screen text-slate-800 bg-white">{children}</body>
    </html>
  );
}
