import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { categorySlugs } from './data/categories';

/**
 * Blog posts live in src/content/blog/*.md. Each file needs the frontmatter
 * below; the body is Markdown. `category` must be one of src/data/categories.ts.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(categorySlugs as [string, ...string[]]),
    image: z.string().default('/images/blog-placeholder.svg'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
