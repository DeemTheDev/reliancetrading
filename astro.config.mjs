// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// Static site (every page pre-rendered) + one on-demand API route for the
// contact form (src/pages/api/contact.ts). Deploys to Vercel with zero config.
export default defineConfig({
  site: 'https://reliancetrading.co.za',
  output: 'static',
  adapter: vercel(),
  integrations: [sitemap({ filter: (page) => !page.includes('/api/') })],
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
