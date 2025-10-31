import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://paw-some-pet-toys.pages.dev',
  build: {
    format: 'directory'
  }
});
