// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

const isDev = process.env.NODE_ENV !== 'production';

export default defineConfig({
  site: isDev ? 'http://localhost:4321' : 'https://thamizhi-site.vercel.app',
  // Remove base path for Vercel deployment
  // base: isDev ? undefined : '/thamizhi-site', // Only needed for GitHub Pages
  output: 'static',
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ta", "si"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
