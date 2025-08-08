// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

const isDev = process.env.NODE_ENV !== 'production';

export default defineConfig({
  site: isDev ? 'http://localhost:4321' : 'https://devcabin-04.github.io',
  base: isDev ? undefined : '/thamizhi-site',
  output: 'static',
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ta", "si"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
