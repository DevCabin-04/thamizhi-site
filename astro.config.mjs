// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://thamizhi-site.vercel.app',
  i18n: {
    defaultLocale: 'ta',
    locales: ['ta', 'en', 'si'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
