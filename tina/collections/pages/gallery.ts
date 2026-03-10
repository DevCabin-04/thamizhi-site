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
          label: `${item?.name || "Category"} (${item?.count || 0} photos)`,
        }),
        defaultItem: {
          id: "new-category",
          name: "New Category",
          name_tamil: "",
          count: 0,
          description: "",
        },
      },
      fields: [
        { type: "string", name: "id", label: "ID", required: true },
        { type: "string", name: "name", label: "Name", required: true },
        { type: "string", name: "name_tamil", label: "Name (Tamil)" },
        { type: "number", name: "count", label: "Image Count", required: true },
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
          label: `${item?.title || "Album"} - ${item?.date || "Date"}`,
        }),
        defaultItem: {
          id: "new-album",
          title: "New Album",
          title_tamil: "",
          date: new Date().toISOString().split('T')[0],
          location: "Location",
          image_count: 0,
          description: "",
          cover_image: "",
          images: [],
        },
      },
      fields: [
        { type: "string", name: "id", label: "Album ID", required: true },
        { type: "string", name: "title", label: "Title", required: true },
        { type: "string", name: "title_tamil", label: "Title (Tamil)" },
        { type: "string", name: "date", label: "Date", required: true },
        { type: "string", name: "date_tamil", label: "Date (Tamil)" },
        { type: "string", name: "location", label: "Location" },
        { type: "string", name: "location_tamil", label: "Location (Tamil)" },
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
          type: "image",
          name: "cover_image",
          label: "Cover Image",
          description: "Main album cover image",
          required: true,
        },
        {
          type: "object",
          name: "images",
          label: "Album Images",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: item?.caption || item?.title || "Image",
            }),
            defaultItem: {
              url: "",
              title: "",
              caption: "",
            },
          },
          fields: [
            {
              type: "image",
              name: "url",
              label: "Image",
              required: true,
            },
            {
              type: "string",
              name: "title",
              label: "Title",
            },
            {
              type: "string",
              name: "title_tamil",
              label: "Title (Tamil)",
            },
            {
              type: "string",
              name: "caption",
              label: "Caption",
              ui: { component: "textarea" },
            },
            {
              type: "string",
              name: "caption_tamil",
              label: "Caption (Tamil)",
              ui: { component: "textarea" },
            },
          ],
        },
        { type: "string", name: "photographer", label: "Photographer" },
        { type: "string", name: "photographer_tamil", label: "Photographer (Tamil)" },
      ],
    },
    {
      type: "object",
      name: "recent_highlights",
      label: "Recent Highlights",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: `${item?.title || "Highlight"} - ${item?.date || "Date"}`,
        }),
        defaultItem: {
          id: "new-highlight",
          title: "New Highlight",
          description: "",
          date: new Date().toISOString().split('T')[0],
          thumbnail: "",
        },
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
        {
          type: "image",
          name: "thumbnail",
          label: "Thumbnail Image",
          required: true,
        },
        { type: "string", name: "date", label: "Date", required: true },
        { type: "string", name: "date_tamil", label: "Date (Tamil)" },
        { type: "string", name: "album_link", label: "Link to Full Album" },
      ],
    },
    {
      type: "object",
      name: "submission_section",
      label: "Photo Submission Section",
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
        { type: "string", name: "contact_email", label: "Contact Email", required: true },
        {
          type: "string",
          name: "guidelines",
          label: "Submission Guidelines",
          list: true,
          description: "List of photo submission guidelines",
        },
      ],
    },
  ],
  ui: {
    router: ({ document }) => {
      const basePath = process.env.NODE_ENV === 'production' ? '/thamizhi-site' : '';
      return `${basePath}/${lang}/gallery`;
    }
  }
});

export const galleryCollections = [
  createGalleryCollection("en"),
  createGalleryCollection("ta"),
  createGalleryCollection("si"),
];
