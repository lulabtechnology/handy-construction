import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://handy-construction.example.com";
  return [
    { url: `${base}/`, priority: 1.0 },
    { url: `${base}/#servicios`, priority: 0.8 },
    { url: `${base}/#como-trabajamos`, priority: 0.7 },
    { url: `${base}/#capacitaciones`, priority: 0.7 },
    { url: `${base}/#proyectos`, priority: 0.6 },
    { url: `${base}/#contacto`, priority: 0.8 }
  ];
}
