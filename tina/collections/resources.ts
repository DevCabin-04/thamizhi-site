// tina/collections/resources.ts
import type { Collection } from "tinacms";

const createResourcesCollection = (lang: string): Collection => ({
  name: `resource_${lang}`,
  label: `Resources (${lang.toUpperCase()})`,
  path: `src/content/resources/${lang}`,
  format: "json",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Resource Title",
      required: true,
    },
    {
      type: "string",
      name: "title_tamil",
      label: "Title (Tamil)",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: { component: "textarea" },
      required: true,
    },
    {
      type: "string",
      name: "description_tamil",
      label: "Description (Tamil)",
      ui: { component: "textarea" },
    },
    {
      type: "string",
      name: "category",
      label: "Category",
      options: [
        { label: "Books", value: "books" },
        { label: "Magazines", value: "magazines" },
        { label: "Research Papers", value: "research" },
        { label: "Learning Materials", value: "learning" },
        { label: "Cultural Documents", value: "cultural" },
        { label: "Language Resources", value: "language" },
        { label: "Audio/Video", value: "media" },
        { label: "Other", value: "other" },
      ],
      required: true,
    },
    {
      type: "string",
      name: "author",
      label: "Author/Creator",
      required: true,
    },
    {
      type: "string",
      name: "author_tamil",
      label: "Author/Creator (Tamil)",
    },
    {
      type: "datetime",
      name: "publish_date",
      label: "Publication/Upload Date",
      required: true,
    },
    {
      type: "image",
      name: "cover_image",
      label: "Cover/Thumbnail Image",
      description: "Book cover, magazine cover, or thumbnail",
    },
    {
      type: "string",
      name: "file_url",
      label: "Resource File URL",
      description: "Upload PDF or document file, or paste URL",
      required: true,
    },
    {
      type: "string",
      name: "file_type",
      label: "File Type",
      options: [
        { label: "PDF", value: "pdf" },
        { label: "Word Document", value: "doc" },
        { label: "PowerPoint", value: "ppt" },
        { label: "Audio", value: "audio" },
        { label: "Video", value: "video" },
        { label: "ZIP Archive", value: "zip" },
        { label: "Other", value: "other" },
      ],
      required: true,
    },
    {
      type: "number",
      name: "file_size_mb",
      label: "File Size (MB)",
      description: "Approximate file size in megabytes",
    },
    {
      type: "number",
      name: "pages",
      label: "Number of Pages",
      description: "For documents/books only",
    },
    {
      type: "string",
      name: "language",
      label: "Content Language",
      options: [
        { label: "Tamil", value: "tamil" },
        { label: "English", value: "english" },
        { label: "Sinhala", value: "sinhala" },
        { label: "Mixed", value: "mixed" },
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
      description: "Keywords for easy searching",
    },
    {
      type: "boolean",
      name: "featured",
      label: "Feature this resource",
      description: "Show prominently on homepage",
    },
    {
      type: "string",
      name: "isbn",
      label: "ISBN (if applicable)",
      description: "For books only",
    },
    {
      type: "string",
      name: "edition",
      label: "Edition/Version",
      description: "e.g., '2nd Edition', 'Version 1.0'",
    },
    {
      type: "string",
      name: "publisher",
      label: "Publisher",
    },
  ],
  ui: {
    router: ({ document }) => {
      const basePath = process.env.NODE_ENV === 'production' ? '/thamizhi-site' : '';
      const slug = document._sys.filename.replace(/\.json$/, '');
      return `${basePath}/${lang}/resources/${slug}`;
    },
    allowedActions: {
      create: true,
      delete: true,
    },
    filename: {
      slugify: (values) => {
        // Generate filename from title
        return values.title?.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-') || 'untitled';
      },
    },
    defaultItem: () => ({
      title: "New Resource",
      description: "Description of the resource...",
      category: "books",
      author: "Author Name",
      publish_date: new Date().toISOString(),
      file_type: "pdf",
      language: "tamil",
      featured: false,
      tags: [],
    }),
  }
});

export const resourcesCollections = [
  createResourcesCollection("en"),
  createResourcesCollection("ta"),
  createResourcesCollection("si"),
];
