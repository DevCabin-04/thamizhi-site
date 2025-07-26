// tina/config.ts
import { defineConfig } from "tinacms";

// tina/collections/pages/home.ts
var createHomepageCollection = (lang) => ({
  name: `home_${lang}`,
  label: `Homepage Content (${lang.toUpperCase()})`,
  path: `src/content/i18n/${lang}`,
  format: "json",
  match: {
    include: "home"
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
          required: true
        },
        {
          type: "string",
          name: "subtitle",
          label: "Subtitle"
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: { component: "textarea" }
        },
        {
          type: "object",
          name: "cta_primary",
          label: "Primary Button",
          fields: [
            {
              type: "string",
              name: "text",
              label: "Button Text",
              required: true
            },
            {
              type: "string",
              name: "href",
              label: "Link URL",
              required: true
            }
          ]
        },
        {
          type: "object",
          name: "cta_secondary",
          label: "Secondary Button",
          fields: [
            {
              type: "string",
              name: "text",
              label: "Button Text",
              required: true
            },
            {
              type: "string",
              name: "href",
              label: "Link URL",
              required: true
            }
          ]
        }
      ]
    },
    {
      type: "object",
      name: "mission_statement",
      label: "Mission Statement",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true
        },
        {
          type: "string",
          name: "content",
          label: "Content",
          ui: { component: "textarea" },
          required: true
        }
      ]
    },
    {
      type: "object",
      name: "featured_departments",
      label: "Featured Departments",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "Department Name",
          required: true
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: { component: "textarea" },
          required: true
        },
        {
          type: "string",
          name: "icon",
          label: "Icon Name",
          required: true
        },
        {
          type: "string",
          name: "href",
          label: "Link URL",
          required: true
        }
      ]
    },
    {
      type: "object",
      name: "recent_events",
      label: "Recent Events",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Event Title",
          required: true
        },
        {
          type: "datetime",
          name: "date",
          label: "Event Date",
          required: true
        },
        {
          type: "string",
          name: "time",
          label: "Event Time",
          required: true
        },
        {
          type: "string",
          name: "location",
          label: "Location",
          required: true
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: { component: "textarea" },
          required: true
        },
        {
          type: "image",
          name: "image",
          label: "Event Image"
        },
        {
          type: "string",
          name: "category",
          label: "Category",
          options: [
            { label: "Festival", value: "festival" },
            { label: "Education", value: "education" },
            { label: "Community", value: "community" },
            { label: "Cultural", value: "cultural" },
            { label: "Youth", value: "youth" }
          ]
        }
      ]
    },
    {
      type: "object",
      name: "announcements",
      label: "Announcements",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Announcement Title",
          required: true
        },
        {
          type: "datetime",
          name: "date",
          label: "Date",
          required: true
        },
        {
          type: "string",
          name: "content",
          label: "Content",
          ui: { component: "textarea" },
          required: true
        },
        {
          type: "string",
          name: "priority",
          label: "Priority",
          options: [
            { label: "High", value: "high" },
            { label: "Medium", value: "medium" },
            { label: "Low", value: "low" }
          ]
        },
        {
          type: "string",
          name: "category",
          label: "Category",
          options: [
            { label: "Education", value: "education" },
            { label: "Membership", value: "membership" },
            { label: "Community", value: "community" },
            { label: "Events", value: "events" }
          ]
        }
      ]
    },
    {
      type: "object",
      name: "statistics",
      label: "Statistics",
      list: true,
      fields: [
        {
          type: "string",
          name: "number",
          label: "Number/Statistic",
          required: true
        },
        {
          type: "string",
          name: "label",
          label: "Label",
          required: true
        }
      ]
    },
    {
      type: "object",
      name: "quick_actions",
      label: "Quick Actions",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          required: true
        },
        {
          type: "string",
          name: "icon",
          label: "Icon Name",
          required: true
        },
        {
          type: "string",
          name: "href",
          label: "Link URL",
          required: true
        },
        {
          type: "string",
          name: "color",
          label: "Color Theme",
          options: [
            { label: "Orange", value: "orange" },
            { label: "Green", value: "green" },
            { label: "Blue", value: "blue" },
            { label: "Purple", value: "purple" },
            { label: "Red", value: "red" },
            { label: "Yellow", value: "yellow" }
          ]
        }
      ]
    },
    {
      type: "object",
      name: "newsletter",
      label: "Newsletter Section",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: { component: "textarea" },
          required: true
        },
        {
          type: "string",
          name: "placeholder",
          label: "Input Placeholder",
          required: true
        },
        {
          type: "string",
          name: "button",
          label: "Button Text",
          required: true
        },
        {
          type: "string",
          name: "privacy",
          label: "Privacy Text",
          ui: { component: "textarea" }
        }
      ]
    }
  ],
  ui: {
    router: ({ document }) => {
      if (lang === "en") {
        return "/";
      }
      return `/${lang}`;
    }
  }
});
var homepageCollections = [
  createHomepageCollection("en"),
  createHomepageCollection("si"),
  createHomepageCollection("ta")
  // Add more languages as needed
];

// tina/collections/pages/about.ts
var createAboutCollection = (lang) => ({
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
          required: true
        },
        {
          type: "string",
          name: "title_tamil",
          label: "Title (Tamil)"
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: { component: "textarea" },
          required: true
        }
      ]
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
          required: true
        },
        {
          type: "string",
          name: "title_tamil",
          label: "Title (Tamil)"
        },
        {
          type: "string",
          name: "content",
          label: "Content",
          ui: { component: "textarea" },
          required: true
        },
        {
          type: "string",
          name: "content_tamil",
          label: "Content (Tamil)",
          ui: { component: "textarea" }
        }
      ]
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
          required: true
        },
        {
          type: "string",
          name: "title_tamil",
          label: "Title (Tamil)"
        },
        {
          type: "string",
          name: "content",
          label: "Content",
          ui: { component: "textarea" },
          required: true
        },
        {
          type: "string",
          name: "content_tamil",
          label: "Content (Tamil)",
          ui: { component: "textarea" }
        }
      ]
    },
    {
      name: "valuess",
      label: "Core Values",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.title || "Value" };
        }
      },
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true
        },
        {
          type: "string",
          name: "title_tamil",
          label: "Title (Tamil)"
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: { component: "textarea" },
          required: true
        }
      ]
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
          required: true
        },
        {
          type: "string",
          name: "title_tamil",
          label: "Title (Tamil)"
        },
        {
          type: "string",
          name: "content",
          label: "Content",
          ui: { component: "textarea" },
          required: true
        },
        {
          type: "object",
          name: "milestones",
          label: "Milestones",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: `${item?.year || "Year"} - ${item?.title || "Milestone"}`
            }),
            defaultItem: {
              year: (/* @__PURE__ */ new Date()).getFullYear().toString(),
              title: "New Milestone",
              description: ""
            }
          },
          fields: [
            {
              type: "string",
              name: "year",
              label: "Year",
              required: true
            },
            {
              type: "string",
              name: "title",
              label: "Title",
              required: true
            },
            {
              type: "string",
              name: "description",
              label: "Description",
              ui: { component: "textarea" },
              required: true
            }
          ]
        }
      ]
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
          required: true
        },
        {
          type: "string",
          name: "title_tamil",
          label: "Title (Tamil)"
        },
        {
          type: "object",
          name: "board_members",
          label: "Board Members",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: `${item?.name || "Member"} - ${item?.position || "Position"}`
            }),
            defaultItem: {
              name: "New Member",
              name_tamil: "",
              position: "Position",
              position_tamil: "",
              bio: ""
            }
          },
          fields: [
            {
              type: "string",
              name: "name",
              label: "Name",
              required: true
            },
            {
              type: "string",
              name: "name_tamil",
              label: "Name (Tamil)"
            },
            {
              type: "string",
              name: "position",
              label: "Position",
              required: true
            },
            {
              type: "string",
              name: "position_tamil",
              label: "Position (Tamil)"
            },
            {
              type: "string",
              name: "bio",
              label: "Biography",
              ui: { component: "textarea" },
              required: true
            },
            {
              type: "image",
              name: "photo",
              label: "Photo"
            }
          ]
        }
      ]
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
          required: true
        },
        {
          type: "string",
          name: "title_tamil",
          label: "Title (Tamil)"
        },
        {
          type: "object",
          name: "list",
          label: "Programs List",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: item?.name || "Program"
            }),
            defaultItem: {
              name: "New Program",
              name_tamil: "",
              description: ""
            }
          },
          fields: [
            {
              type: "string",
              name: "name",
              label: "Program Name",
              required: true
            },
            {
              type: "string",
              name: "name_tamil",
              label: "Program Name (Tamil)"
            },
            {
              type: "string",
              name: "description",
              label: "Description",
              ui: { component: "textarea" },
              required: true
            },
            {
              type: "string",
              name: "icon",
              label: "Icon Name"
            },
            {
              type: "image",
              name: "image",
              label: "Program Image"
            }
          ]
        }
      ]
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
          required: true
        },
        {
          type: "string",
          name: "title_tamil",
          label: "Title (Tamil)"
        },
        {
          type: "object",
          name: "stats",
          label: "Statistics",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: `${item?.number || "Stat"} - ${item?.label || "Label"}`
            }),
            defaultItem: {
              number: "0",
              label: "New Statistic",
              label_tamil: ""
            }
          },
          fields: [
            {
              type: "string",
              name: "number",
              label: "Number/Statistic",
              required: true
            },
            {
              type: "string",
              name: "label",
              label: "Label",
              required: true
            },
            {
              type: "string",
              name: "label_tamil",
              label: "Label (Tamil)"
            }
          ]
        },
        {
          type: "object",
          name: "awards",
          label: "Awards",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: `${item?.year || "Year"} - ${item?.title || "Award"}`
            }),
            defaultItem: {
              title: "New Award",
              year: (/* @__PURE__ */ new Date()).getFullYear().toString(),
              organization: "Organization",
              description: ""
            }
          },
          fields: [
            {
              type: "string",
              name: "title",
              label: "Award Title",
              required: true
            },
            {
              type: "string",
              name: "year",
              label: "Year",
              required: true
            },
            {
              type: "string",
              name: "organization",
              label: "Awarding Organization",
              required: true
            },
            {
              type: "string",
              name: "description",
              label: "Description",
              ui: { component: "textarea" }
            }
          ]
        }
      ]
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
          required: true
        },
        {
          type: "string",
          name: "title_tamil",
          label: "Title (Tamil)"
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: { component: "textarea" },
          required: true
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
              required: true
            },
            {
              type: "string",
              name: "lines",
              label: "Address Lines",
              list: true,
              required: true
            }
          ]
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
              required: true
            },
            {
              type: "string",
              name: "schedule",
              label: "Schedule",
              list: true,
              required: true
            }
          ]
        }
      ]
    }
  ],
  ui: {
    router: ({ document }) => {
      if (lang === "en") {
        return "/about";
      }
      return `/${lang}/about`;
    }
  }
});
var aboutCollections = [
  createAboutCollection("en"),
  createAboutCollection("si"),
  createAboutCollection("ta")
  // Add more languages as needed
];

// tina/config.ts
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
    basePath: false ? "/admin" : void 0
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      ...homepageCollections,
      ...aboutCollections
    ]
  }
});
export {
  config_default as default
};
