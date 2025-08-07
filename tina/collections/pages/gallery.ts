// tina/collections/pages/gallery.ts
import type { Collection } from "tinacms";

const createGalleryCollection = (lang: string): Collection => ({
  name: `gallery_${lang}`,
  label: `Gallery Page Content (${lang.toUpperCase()})`,
  path: `src/content/i18n/${lang}`,
  format: "json",
  match: {
    include: "gallery"
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
      name: "categories",
      label: "Image Categories",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item?.name || "New Category",
        }),
      },
      fields: [
        { type: "string", name: "id", label: "ID", required: true },
        { type: "string", name: "name", label: "Name", required: true },
        { type: "string", name: "name_tamil", label: "Name (Tamil)" },
        { type: "number", name: "count", label: "Image Count" },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: { component: "textarea" },
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
      name: "featured_albums",
      label: "Featured Albums",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item?.title || "New Album",
        }),
      },
      fields: [
        { type: "string", name: "id", label: "ID", required: true },
        { type: "string", name: "title", label: "Title", required: true },
        { type: "string", name: "title_tamil", label: "Title (Tamil)" },
        { type: "string", name: "date", label: "Date" },
        { type: "string", name: "date_tamil", label: "Date (Tamil)" },
        { type: "string", name: "location", label: "Location" },
        { type: "string", name: "location_tamil", label: "Location (Tamil)" },
        { type: "number", name: "image_count", label: "Image Count" },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: { component: "textarea" },
        },
        {
          type: "string",
          name: "description_tamil",
          label: "Description (Tamil)",
          ui: { component: "textarea" },
        },
        { type: "string", name: "cover_color", label: "Cover Color" },
        { type: "string", name: "photographer", label: "Photographer" },
        {
          type: "string",
          name: "highlights",
          label: "Highlights",
          list: true,
        },
      ],
    },
    {
      type: "object",
      name: "recent_highlights",
      label: "Recent Highlights",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item?.title || "New Highlight",
        }),
      },
      fields: [
        { type: "string", name: "id", label: "ID", required: true },
        { type: "string", name: "title", label: "Title", required: true },
        { type: "string", name: "title_tamil", label: "Title (Tamil)" },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: { component: "textarea" },
        },
        {
          type: "string",
          name: "description_tamil",
          label: "Description (Tamil)",
          ui: { component: "textarea" },
        },
        { type: "string", name: "date", label: "Date" },
        { type: "string", name: "date_tamil", label: "Date (Tamil)" },
        { type: "number", name: "image_count", label: "Image Count" },
      ],
    },
    {
      type: "object",
      name: "photo_contest",
      label: "Photo Contest Section",
      fields: [
        { type: "string", name: "title", label: "Title", required: true },
        { type: "string", name: "title_tamil", label: "Title (Tamil)" },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: { component: "textarea" },
        },
        {
          type: "string",
          name: "description_tamil",
          label: "Description (Tamil)",
          ui: { component: "textarea" },
        },
        {
          type: "object",
          name: "categories",
          label: "Contest Categories",
          list: true,
          fields: [
            { type: "string", name: "name", label: "Category Name" },
            { type: "string", name: "name_tamil", label: "Category Name (Tamil)" },
            { type: "string", name: "prize", label: "Prize" },
          ],
        },
        { type: "string", name: "deadline", label: "Deadline" },
        { type: "string", name: "rules", label: "Rules", list: true, ui: { component: "textarea" } },
      ],
    },
    {
      type: "object",
      name: "submission_guidelines",
      label: "Submission Guidelines Section",
      fields: [
        { type: "string", name: "title", label: "Title", required: true },
        { type: "string", name: "title_tamil", label: "Title (Tamil)" },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: { component: "textarea" },
        },
        {
          type: "object",
          name: "requirements",
          label: "Requirements",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: item?.title || "New Requirement Set",
            }),
          },
          fields: [
            { type: "string", name: "title", label: "Title", required: true },
            { type: "string", name: "title_tamil", label: "Title (Tamil)" },
            { type: "string", name: "items", label: "Items", list: true },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "contact",
      label: "Contact Section",
      fields: [
        { type: "string", name: "title", label: "Title", required: true },
        { type: "string", name: "title_tamil", label: "Title (Tamil)" },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: { component: "textarea" },
        },
        { type: "string", name: "email", label: "Email" },
        { type: "string", name: "phone", label: "Phone" },
        {
          type: "object",
          name: "gallery_coordinator",
          label: "Gallery Coordinator",
          fields: [
            { type: "string", name: "name", label: "Name" },
            { type: "string", name: "name_tamil", label: "Name (Tamil)" },
            { type: "string", name: "position", label: "Position" },
            { type: "string", name: "position_tamil", label: "Position (Tamil)" },
          ],
        },
        {
          type: "string",
          name: "office_hours",
          label: "Office Hours",
          list: true,
        },
      ],
    },
  ],
  ui: {
    router: ({ document }) => {
      // Base path for production (GitHub Pages) vs local development
      const basePath = process.env.NODE_ENV === 'production' ? '/thamizhi-site' : '';
      
      // Return the path that matches your site's routing
      if (lang === 'en') {
        return `${basePath}/gallery`;
      }
      return `${basePath}/${lang}/gallery`;
    }
  }
});

export const galleryCollections = [
  createGalleryCollection("en"),
  createGalleryCollection("si"),
  createGalleryCollection("ta"),
  // Add more languages as needed
];