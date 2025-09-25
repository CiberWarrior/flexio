// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://flexio-pilates.vercel.app',
  output: 'static',
  compressHTML: true,

  build: {
    inlineStylesheets: 'auto'
  },

  integrations: [tailwind(), react(), sitemap()]
});