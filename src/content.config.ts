import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";
import { CONTENT_PATH } from "astro:env/server";
import { join } from "node:path";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: CONTENT_PATH, }),
});

export const collections = { posts };
