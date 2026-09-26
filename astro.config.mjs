import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { siteConfig } from './src/config/site.config.js';

export default defineConfig({
  site: siteConfig.url, // e.g. "https://your-domain.com" — used for canonical URLs
  integrations: [tailwind()],
  // Sitemap removed for now — re-add later with `npx astro add sitemap`,
  // which installs a version matched to your Astro version automatically.
});
