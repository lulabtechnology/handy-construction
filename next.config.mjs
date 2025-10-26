/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true
  },
  images: {
    formats: ['image/avif', 'image/webp']
  },
  // ⚠️ Opcional: permite construir aunque haya errores de TypeScript
  // typescript: { ignoreBuildErrors: true }
};

export default nextConfig;
