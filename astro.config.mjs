import { defineConfig, envField } from 'astro/config';
import remarkParse from 'remark-parse';
import rehypeStringify from 'rehype-stringify';
import { remarkReadingTime } from './remark-reading-time.mjs';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import remarkToc from 'remark-toc';


// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      CONTENT_PATH: envField.string({
        context: "server",
        access: "public",
      })
    }
  },
  integrations: [sitemap()],
  site: 'https://dhrjarun.com',
  base: '/',
  markdown: {
    remarkPlugins: [remarkReadingTime, [remarkToc, { heading: 'toc', maxDepth: 3 }]],
    rehypePlugins: [remarkParse, rehypeStringify],
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
