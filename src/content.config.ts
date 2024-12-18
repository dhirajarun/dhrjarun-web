import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import {
  CONTENT_PATH,
} from 'astro:env/server';
import { join } from 'path'


const writing = defineCollection({
  loader: glob({ pattern: "*.md", base: join(CONTENT_PATH, "/Writing") }),
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    draft: z.boolean().optional().default(false),
    archive: z.boolean().optional().default(false),
  }).passthrough(),
});

const about = defineCollection({
  loader: glob({ pattern: "*.md", base: join(CONTENT_PATH, "/About") }),
  schema: z.object({
    publishDate: z.date(),
    lastUpdated: z.date().optional(),
    draft: z.boolean().optional(),
  }).passthrough(),
});

const now = defineCollection({
  loader: glob({ pattern: "*.md", base: join(CONTENT_PATH, "/Now") }),
  schema: z.object({
    publishDate: z.date(),
    lastUpdated: z.date().optional(),
    draft: z.boolean().optional(),
  }).passthrough(),
});

export const collections = { writing, about, now };
