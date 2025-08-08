// tina/collections/pages/about.ts
import type { Collection } from "tinacms";

const createAboutCollection = (lang: string): Collection => ({
  name: `about_${lang}`,
  label: `About Page Content (${lang.toUpperCase()})`,
  path: `src/content/i18n/${lang}`,
  format: "json",
  match: {
    include: "about"
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
          name: "description",
          label: "Description",
          ui: { component: "textarea" },
          required: true,
        },
      ],
    },
    {
      type: "object",
      name: "mission",
      label: "Mission Section",
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
          name: "content",
          label: "Content",
          ui: { component: "textarea" },
          required: true,
        },
        {
          type: "string",
          name: "content_tamil",
          label: "Content (Tamil)",
          ui: { component: "textarea" },
        },
      ],
    },
    {
      type: "object",
      name: "vision",
      label: "Vision Section",
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
          name: "content",
          label: "Content",
          ui: { component: "textarea" },
          required: true,
        },
        {
          type: "string",
          name: "content_tamil",
          label: "Content (Tamil)",
          ui: { component: "textarea" },
        },
      ],
    },
    {
      name: "valuess",
      label: "Core Values",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.title || "Value" };
        },
      },
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
      ],
    },
    {
      type: "object",
      name: "history",
      label: "History Section",
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
          name: "content",
          label: "Content",
          ui: { component: "textarea" },
          required: true,
        },
        {
          type: "object",
          name: "milestones",
          label: "Milestones",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: `${item?.year || "Year"} - ${item?.title || "Milestone"}`,
            }),
            defaultItem: {
              year: new Date().getFullYear().toString(),
              title: "New Milestone",
              description: "",
            },
          },
          fields: [
            {
              type: "string",
              name: "year",
              label: "Year",
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
              name: "description",
              label: "Description",
              ui: { component: "textarea" },
              required: true,
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "leadership",
      label: "Leadership Section",
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
          type: "object",
          name: "board_members",
          label: "Board Members",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: `${item?.name || "Member"} - ${item?.position || "Position"}`,
            }),
            defaultItem: {
              name: "New Member",
              name_tamil: "",
              position: "Position",
              position_tamil: "",
              bio: "",
            },
          },
          fields: [
            {
              type: "string",
              name: "name",
              label: "Name",
              required: true,
            },
            {
              type: "string",
              name: "name_tamil",
              label: "Name (Tamil)",
            },
            {
              type: "string",
              name: "position",
              label: "Position",
              required: true,
            },
            {
              type: "string",
              name: "position_tamil",
              label: "Position (Tamil)",
            },
            {
              type: "string",
              name: "bio",
              label: "Biography",
              ui: { component: "textarea" },
              required: true,
            },
            {
              type: "image",
              name: "photo",
              label: "Photo",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "programs",
      label: "Programs Section",
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
          type: "object",
          name: "list",
          label: "Programs List",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: item?.name || "Program",
            }),
            defaultItem: {
              name: "New Program",
              name_tamil: "",
              description: "",
            },
          },
          fields: [
            {
              type: "string",
              name: "name",
              label: "Program Name",
              required: true,
            },
            {
              type: "string",
              name: "name_tamil",
              label: "Program Name (Tamil)",
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
              name: "icon",
              label: "Icon Name",
            },
            {
              type: "image",
              name: "image",
              label: "Program Image",
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "achievements",
      label: "Achievements Section",
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
          type: "object",
          name: "stats",
          label: "Statistics",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: `${item?.number || "Stat"} - ${item?.label || "Label"}`,
            }),
            defaultItem: {
              number: "0",
              label: "New Statistic",
              label_tamil: "",
            },
          },
          fields: [
            {
              type: "string",
              name: "number",
              label: "Number/Statistic",
              required: true,
            },
            {
              type: "string",
              name: "label",
              label: "Label",
              required: true,
            },
            {
              type: "string",
              name: "label_tamil",
              label: "Label (Tamil)",
            },
          ],
        },
        {
          type: "object",
          name: "awards",
          label: "Awards",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: `${item?.year || "Year"} - ${item?.title || "Award"}`,
            }),
            defaultItem: {
              title: "New Award",
              year: new Date().getFullYear().toString(),
              organization: "Organization",
              description: "",
            },
          },
          fields: [
            {
              type: "string",
              name: "title",
              label: "Award Title",
              required: true,
            },
            {
              type: "string",
              name: "year",
              label: "Year",
              required: true,
            },
            {
              type: "string",
              name: "organization",
              label: "Awarding Organization",
              required: true,
            },
            {
              type: "string",
              name: "description",
              label: "Description",
              ui: { component: "textarea" },
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "contact",
      label: "Contact Section",
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
          type: "object",
          name: "address",
          label: "Address",
          fields: [
            {
              type: "string",
              name: "title",
              label: "Address Title",
              required: true,
            },
            {
              type: "string",
              name: "lines",
              label: "Address Lines",
              list: true,
              required: true,
            },
          ],
        },
        {
          type: "object",
          name: "hours",
          label: "Office Hours",
          fields: [
            {
              type: "string",
              name: "title",
              label: "Hours Title",
              required: true,
            },
            {
              type: "string",
              name: "schedule",
              label: "Schedule",
              list: true,
              required: true,
            },
          ],
        },
      ],
    },
  ],
  ui: {
    router: ({ document }) => {
      // Base path for production (GitHub Pages) vs local development
      const basePath = '/thamizhi-site'
      
      // Return the path that matches your site's routing
      if (lang === 'en') {
        return `${basePath}/about`;
      }
      return `${basePath}/${lang}/about`;
    }
  }
});

export const aboutCollections = [
  createAboutCollection("en"),
  createAboutCollection("si"),
  createAboutCollection("ta"),
  // Add more languages as needed
];