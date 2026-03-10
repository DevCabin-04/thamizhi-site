// tina/collections/pages/custom-pages.ts
import type { Collection } from "tinacms";

const createCustomPagesCollection = (lang: string): Collection => ({
  name: `pages_${lang}`,
  label: `Custom Pages (${lang.toUpperCase()})`,
  path: `src/content/pages/${lang}`,
  format: "json",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Page Title",
      required: true,
    },
    {
      type: "string",
      name: "slug",
      label: "URL Slug (e.g., 'cultural-programs', 'about-us')",
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Page Description (for SEO)",
      ui: { component: "textarea" },
    },
    {
      type: "object",
      name: "hero",
      label: "Hero Section",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Hero Title",
        },
        {
          type: "string",
          name: "subtitle",
          label: "Hero Subtitle",
        },
        {
          type: "string",
          name: "description",
          label: "Hero Description",
          ui: { component: "textarea" },
        },
        {
          type: "image",
          name: "background_image",
          label: "Background Image (Optional)",
        },
      ],
    },
    {
      type: "object",
      name: "content_sections",
      label: "Content Sections",
      list: true,
      templates: [
        {
          name: "text_section",
          label: "Text Section",
          ui: {
            itemProps: (item) => {
              return { label: item?.title || "Text Section" };
            },
          },
          fields: [
            {
              type: "string",
              name: "title",
              label: "Section Title",
            },
            {
              type: "rich-text",
              name: "content",
              label: "Content",
              required: true,
            },
            {
              type: "string",
              name: "background",
              label: "Background Color",
              options: [
                { label: "White", value: "white" },
                { label: "Light Gray", value: "gray" },
                { label: "Light Blue", value: "blue" },
              ],
            },
          ],
        },
        {
          name: "image_section",
          label: "Image Section",
          ui: {
            itemProps: (item) => {
              return { label: item?.caption || "Image Section" };
            },
          },
          fields: [
            {
              type: "image",
              name: "image",
              label: "Image",
              required: true,
            },
            {
              type: "string",
              name: "caption",
              label: "Image Caption",
            },
            {
              type: "string",
              name: "alt_text",
              label: "Alt Text (for accessibility)",
              required: true,
            },
          ],
        },
        {
          name: "cards_section",
          label: "Cards Section",
          ui: {
            itemProps: (item) => {
              return { label: item?.section_title || "Cards Section" };
            },
          },
          fields: [
            {
              type: "string",
              name: "section_title",
              label: "Section Title",
            },
            {
              type: "object",
              name: "cards",
              label: "Cards",
              list: true,
              ui: {
                itemProps: (item) => {
                  return { label: item?.title || "Card" };
                },
              },
              fields: [
                {
                  type: "string",
                  name: "title",
                  label: "Card Title",
                  required: true,
                },
                {
                  type: "string",
                  name: "description",
                  label: "Description",
                  ui: { component: "textarea" },
                },
                {
                  type: "image",
                  name: "image",
                  label: "Card Image (Optional)",
                },
                {
                  type: "string",
                  name: "link",
                  label: "Link URL (Optional)",
                },
              ],
            },
          ],
        },
        {
          name: "cta_section",
          label: "Call to Action Section",
          ui: {
            itemProps: (item) => {
              return { label: item?.title || "CTA Section" };
            },
          },
          fields: [
            {
              type: "string",
              name: "title",
              label: "CTA Title",
            },
            {
              type: "string",
              name: "description",
              label: "Description",
              ui: { component: "textarea" },
            },
            {
              type: "string",
              name: "button_text",
              label: "Button Text",
              required: true,
            },
            {
              type: "string",
              name: "button_link",
              label: "Button Link",
              required: true,
            },
            {
              type: "string",
              name: "background_color",
              label: "Background Color",
              options: [
                { label: "Navy Blue", value: "blue" },
                { label: "Light Blue", value: "light-blue" },
                { label: "Gray", value: "gray" },
              ],
            },
          ],
        },
        {
          name: "statistics_section",
          label: "Statistics Section",
          ui: {
            itemProps: (item) => {
              return { label: "Statistics" };
            },
          },
          fields: [
            {
              type: "string",
              name: "section_title",
              label: "Section Title (Optional)",
            },
            {
              type: "object",
              name: "stats",
              label: "Statistics",
              list: true,
              ui: {
                itemProps: (item) => {
                  return { label: `${item?.number || "?"} - ${item?.label || "Stat"}` };
                },
              },
              fields: [
                {
                  type: "string",
                  name: "number",
                  label: "Number",
                  required: true,
                },
                {
                  type: "string",
                  name: "label",
                  label: "Label",
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  ui: {
    router: ({ document }) => {
      const basePath = process.env.NODE_ENV === 'production' ? '/thamizhi-site' : '';
      const slug = document._sys.filename.replace(/\.json$/, '');
      return `${basePath}/${lang}/${slug}`;
    }
  }
});

export const customPagesCollections = [
  createCustomPagesCollection("en"),
  createCustomPagesCollection("ta"),
  createCustomPagesCollection("si"),
];
