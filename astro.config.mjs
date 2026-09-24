// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hearthstone.mharoon.dev',
  integrations: [react(), sitemap()],
  build: { inlineStylesheets: 'always' },
  vite: {
    plugins: [tailwindcss()],
  },
});
