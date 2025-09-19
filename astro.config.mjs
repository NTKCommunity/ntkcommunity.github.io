import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind({
    // Configure tailwind integration
    config: { path: './tailwind.config.mjs' },
  })],
  output: 'static'
});
