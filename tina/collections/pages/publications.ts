// tina/collections/pages/publications.ts
import type { Collection } from "tinacms";

const createPublicationsCollection = (lang: string): Collection => ({
  name: `publications_${lang}`,
  label: `Publications Page Content (${lang.toUpperCase()})`,
  path: `src/content/i18n/${lang}`,
  format: "json",
  match: {
    include: "publications"
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
          required: true,
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
          required: true,
        },
      ],
    },
    {
      type: "object",
      name: "categories",
      label: "Resource Categories",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: `${item?.name || "Category"} (${item?.count || 0} resources)`,
        }),
        defaultItem: {
          id: "new_category",
          name: "New Category",
          name_tamil: "",
          description: "",
          description_tamil: "",
          count: 0,
          icon: "book",
        },
      },
      fields: [
        {
          type: "string",
          name: "id",
          label: "Category ID",
          required: true,
        },
        {
          type: "string",
          name: "name",
          label: "Category Name",
          required: true,
        },
        {
          type: "string",
          name: "name_tamil",
          label: "Category Name (Tamil)",
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
          type: "number",
          name: "count",
          label: "Resource Count",
          required: true,
        },
        {
          type: "string",
          name: "icon",
          label: "Icon Name",
          required: true,
        },
      ],
    },
    {
      type: "object",
      name: "featured_resources",
      label: "Featured Resources",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: `${item?.title || "Resource"} - ${item?.category || "Category"}`,
        }),
        defaultItem: {
          id: "new_resource",
          title: "New Resource",
          title_tamil: "",
          author: "Author Name",
          author_tamil: "",
          category: "Books",
          category_tamil: "",
          year: new Date().getFullYear().toString(),
          pages: 0,
          description: "",
          description_tamil: "",
          cover_image: "",
          file_url: "",
          file_type: "PDF",
          file_size_mb: 0,
        },
      },
      fields: [
        {
          type: "string",
          name: "id",
          label: "Resource ID",
          required: true,
        },
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
          type: "string",
          name: "category",
          label: "Category",
          options: ["Books", "Magazines", "Research Papers", "Learning Materials", "Cultural Documents", "Other"],
          required: true,
        },
        {
          type: "string",
          name: "category_tamil",
          label: "Category (Tamil)",
        },
        {
          type: "string",
          name: "year",
          label: "Publication Year",
          required: true,
        },
        {
          type: "number",
          name: "pages",
          label: "Number of Pages",
        },
        {
          type: "string",
          name: "isbn",
          label: "ISBN (if applicable)",
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
          type: "image",
          name: "cover_image",
          label: "Cover/Thumbnail Image",
          description: "Upload cover image or leave empty for default",
        },
        {
          type: "string",
          name: "file_url",
          label: "Resource File URL/Path",
          description: "Upload file or paste URL to PDF/document",
          required: true,
        },
        {
          type: "string",
          name: "file_type",
          label: "File Type",
          options: ["PDF", "DOC", "DOCX", "PPT", "PPTX", "MP3", "MP4", "ZIP", "Other"],
          required: true,
        },
        {
          type: "number",
          name: "file_size_mb",
          label: "File Size (MB)",
          description: "Approximate size in megabytes",
        },
        {
          type: "string",
          name: "language",
          label: "Content Language",
          options: ["Tamil", "English", "Sinhala", "Mixed"],
        },
        {
          type: "string",
          name: "tags",
          label: "Tags",
          list: true,
          description: "Keywords for searching (comma-separated)",
        },
      ],
    },
    {
      type: "object",
      name: "about_section",
      label: "About Resources Section",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Section Title",
          required: true,
        },
        {
          type: "string",
          name: "title_tamil",
          label: "Section Title (Tamil)",
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
      ],
    },
    {
      type: "object",
      name: "submission_section",
      label: "Resource Submission Section",
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
          name: "contact_email",
          label: "Contact Email",
          required: true,
        },
        {
          type: "string",
          name: "guidelines",
          label: "Submission Guidelines",
          list: true,
          description: "List of requirements/guidelines",
        },
      ],
    },
  ],
  ui: {
    router: ({ document }) => {
      const basePath = process.env.NODE_ENV === 'production' ? '/thamizhi-site' : '';
      return `${basePath}/${lang}/publications`;
    }
  }
});

export const publicationsCollections = [
  createPublicationsCollection("en"),
  createPublicationsCollection("ta"),
  createPublicationsCollection("si"),
];
