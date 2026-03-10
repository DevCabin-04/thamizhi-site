// tina/collections/blog.ts
import type { Collection } from "tinacms";

const createBlogCollection = (lang: string): Collection => ({
  name: `blog_${lang}`,
  label: `Blog Posts (${lang.toUpperCase()})`,
  path: `src/content/blog/${lang}`,
  format: "json",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "slug",
      label: "URL Slug",
      required: true,
      description: "URL-friendly version of the title (e.g., 'my-first-post')",
    },
    {
      type: "string",
      name: "excerpt",
      label: "Excerpt/Summary",
      ui: { component: "textarea" },
      required: true,
      description: "Brief summary shown in blog listings",
    },
    {
      type: "rich-text",
      name: "content",
      label: "Content",
      required: true,
      isBody: true,
    },
    {
      type: "image",
      name: "featured_image",
      label: "Featured Image",
      required: true,
    },
    {
      type: "string",
      name: "author",
      label: "Author Name",
      required: true,
    },
    {
      type: "string",
      name: "author_role",
      label: "Author Role/Title",
      description: "e.g., 'Club President', 'Cultural Secretary'",
    },
    {
      type: "image",
      name: "author_image",
      label: "Author Image (Optional)",
    },
    {
      type: "datetime",
      name: "published_date",
      label: "Published Date",
      required: true,
    },
    {
      type: "string",
      name: "category",
      label: "Category",
      options: [
        { label: "Events", value: "events" },
        { label: "Culture", value: "culture" },
        { label: "Student Life", value: "student-life" },
        { label: "Language", value: "language" },
        { label: "Community", value: "community" },
        { label: "Announcements", value: "announcements" },
      ],
      required: true,
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "boolean",
      name: "featured",
      label: "Featured Post",
      description: "Show this post prominently on homepage",
    },
  ],
  ui: {
    router: ({ document }) => {
      const basePath = process.env.NODE_ENV === 'production' ? '/thamizhi-site' : '';
      const slug = document._sys.filename.replace(/\.json$/, '');
      return `${basePath}/${lang}/blog/${slug}`;
    },
    allowedActions: {
      create: true,
      delete: true,
    },
    filename: {
      slugify: (values) => {
        // Generate filename from slug field
        return values.slug || values.title?.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-') || 'untitled';
      },
    },
    defaultItem: () => ({
      title: "New Blog Post",
      slug: "new-blog-post",
      excerpt: "Brief summary of the blog post...",
      author: "Thamizhi Team",
      author_role: "Content Writer",
      published_date: new Date().toISOString(),
      category: "announcements",
      featured: false,
      tags: [],
    }),
  }
});

export const blogCollections = [
  createBlogCollection("en"),
  createBlogCollection("ta"),
  createBlogCollection("si"),
];
