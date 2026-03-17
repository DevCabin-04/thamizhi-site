import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Blog posts — Markdown with frontmatter, organised by language subfolder.
 * Access via getCollection('blog') in pages.
 *
 * Frontmatter fields used in the app:
 * - title, excerpt, featured_image, author, author_role,
 * - published_date, category, tags, featured,
 * - lang, route_slug
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
});

export const collections = { blog };
