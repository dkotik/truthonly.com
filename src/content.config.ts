// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

// 4. Define a `loader` and `schema` for each collection
const articles = defineCollection({
  loader: glob({ base: './src/content', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
      slug: z.string().optional(),
      title: z.string().optional(),
      description: z.string().optional(),
      keywords: z.array(z.string()).optional(),
      draft: z.boolean().optional(),
      // pubDate: z.coerce.date(),
      // updatedDate: z.coerce.date().optional(),
  }),
});

export type ArticleSchema = z.infer<typeof articles.schema>;

// 5. Export a single `collections` object to register your collection(s)
export const collections = { articles: articles };
