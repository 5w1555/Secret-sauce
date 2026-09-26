import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { siteConfig } from './src/config/site.config.js';

export default defineConfig({
  site: siteConfig.url, // e.g. "https://your-domain.com" — used to generate sitemap + canonical URLs
  integrations: [tailwind(), sitemap()],
});
