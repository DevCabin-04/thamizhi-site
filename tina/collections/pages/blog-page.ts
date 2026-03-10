// tina/collections/pages/blog-page.ts
import type { Collection } from "tinacms";

const createBlogPageCollection = (lang: string): Collection => ({
  name: `blog_page_${lang}`,
  label: `Blog Page Content (${lang.toUpperCase()})`,
  path: `src/content/i18n/${lang}`,
  format: "json",
  match: {
    include: "blog_page"
  },
  fields: [
    {
      type: "object",
      name: "hero",
      label: "Hero Section",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true,
        },
        {
          type: "string",
          name: "title_tamil",
          label: "Title (Tamil)",
        },
        {
          type: "string",
          name: "subtitle",
          label: "Subtitle",
        },
        {
          type: "string",
          name: "subtitle_tamil",
          label: "Subtitle (Tamil)",
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: { component: "textarea" },
        },
      ],
    },
    {
      type: "object",
      name: "categories_section",
      label: "Categories Section",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Section Title",
        },
        {
          type: "string",
          name: "title_tamil",
          label: "Section Title (Tamil)",
        },
      ],
    },
    {
      type: "object",
      name: "featured_section",
      label: "Featured Posts Section",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Section Title",
        },
        {
          type: "string",
          name: "title_tamil",
          label: "Section Title (Tamil)",
        },
      ],
    },
    {
      type: "object",
      name: "all_posts_section",
      label: "All Posts Section",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Section Title",
        },
        {
          type: "string",
          name: "title_tamil",
          label: "Section Title (Tamil)",
        },
        {
          type: "number",
          name: "posts_per_page",
          label: "Posts Per Page",
          description: "Number of posts to show per page",
        },
      ],
    },
  ],
  ui: {
    router: ({ document }) => {
      const basePath = process.env.NODE_ENV === 'production' ? '/thamizhi-site' : '';
      return `${basePath}/${lang}/blog`;
    }
  }
});

export const blogPageCollections = [
  createBlogPageCollection("en"),
  createBlogPageCollection("si"),
  createBlogPageCollection("ta"),
];
