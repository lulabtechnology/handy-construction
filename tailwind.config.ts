import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0F2B46",
          light: "#17456F",
          accent: "#1F7A8C"
        }
      }
    }
  },
  plugins: []
} satisfies Config;
