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
          type: "image",
          name: "background_image",
          label: "Background Image (Optional)"
        },
        {
          type: "string",
          name: "hero_video_url",
          label: "Hero Video URL (Optional)",
          description: "YouTube URL to display video in hero section"
        },
        {
          type: "string",
          name: "hero_video_title",
          label: "Hero Video Title (Optional)"
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
      ui: {
        itemProps: (item) => {
          return { label: item?.name || "New Department" };
        }
      },
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
          type: "image",
          name: "image",
          label: "Department Image (Optional)"
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
      ui: {
        itemProps: (item) => {
          return { label: item?.title || "New Event" };
        }
      },
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
      ui: {
        itemProps: (item) => {
          return { label: item?.title || "New Announcement" };
        }
      },
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
      ui: {
        itemProps: (item) => {
          return { label: `${item?.number || "?"} - ${item?.label || "New Stat"}` };
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
        }
      ]
    },
    {
      type: "object",
      name: "quick_actions",
      label: "Quick Actions",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.title || "New Action" };
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
      name: "featured_video",
      label: "Featured Video Section",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Section Title"
        },
        {
          type: "string",
          name: "video_title",
          label: "Video Title"
        },
        {
          type: "string",
          name: "video_description",
          label: "Video Description",
          ui: { component: "textarea" }
        },
        {
          type: "string",
          name: "youtube_url",
          label: "YouTube Video URL",
          description: "Full YouTube URL (e.g., https://www.youtube.com/watch?v=VIDEO_ID)"
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
    },
    {
      type: "object",
      name: "recent_articles",
      label: "Recent Articles/Blog Posts",
      fields: [
        {
          type: "string",
          name: "section_title",
          label: "Section Title",
          required: true
        },
        {
          type: "string",
          name: "section_description",
          label: "Section Description",
          ui: { component: "textarea" }
        },
        {
          type: "string",
          name: "view_all_text",
          label: "View All Button Text",
          required: true
        },
        {
          type: "string",
          name: "view_all_href",
          label: "View All Button Link",
          required: true
        },
        {
          type: "number",
          name: "posts_to_show",
          label: "Number of Posts to Show",
          description: "How many recent blog posts to display (1-6)",
          required: true
        }
      ]
    },
    {
      type: "object",
      name: "photo_highlights",
      label: "Photo Highlights Section",
      fields: [
        {
          type: "string",
          name: "section_title",
          label: "Section Title",
          required: true
        },
        {
          type: "string",
          name: "section_description",
          label: "Section Description",
          ui: { component: "textarea" }
        },
        {
          type: "object",
          name: "photos",
          label: "Photos",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item?.title || "New Photo" };
            }
          },
          fields: [
            {
              type: "image",
              name: "image",
              label: "Photo",
              required: true
            },
            {
              type: "string",
              name: "title",
              label: "Photo Title",
              required: true
            },
            {
              type: "string",
              name: "description",
              label: "Photo Description"
            },
            {
              type: "string",
              name: "link",
              label: "Link (Optional)",
              description: "Link to event or gallery page"
            }
          ]
        },
        {
          type: "string",
          name: "view_gallery_text",
          label: "View Gallery Button Text"
        },
        {
          type: "string",
          name: "view_gallery_href",
          label: "View Gallery Button Link"
        }
      ]
    }
  ],
  ui: {
    router: ({ document }) => {
      const basePath = false ? "/thamizhi-site" : "";
      return `${basePath}/${lang}`;
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
      const basePath = false ? "/thamizhi-site" : "";
      return `${basePath}/${lang}/about`;
    }
  }
});
var aboutCollections = [
  createAboutCollection("en"),
  createAboutCollection("si"),
  createAboutCollection("ta")
  // Add more languages as needed
];

// tina/collections/pages/departments.ts
var createDepartmentsCollection = (lang) => ({
  name: `departments_${lang}`,
  label: `Departments Page Content (${lang.toUpperCase()})`,
  path: `src/content/i18n/${lang}`,
  format: "json",
  match: {
    include: "departments"
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
      name: "departments",
      label: "Departments",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: `${item?.name || "Department"} - ${item?.id || "ID"}`
        }),
        defaultItem: {
          id: "new-department",
          name: "New Department",
          name_tamil: "",
          description: "",
          icon: "department",
          color: "from-blue-500 to-indigo-600",
          head: {
            name: "",
            name_tamil: "",
            position: "",
            position_tamil: ""
          },
          programs: [],
          achievements: [],
          contact: {
            email: "",
            phone: ""
          }
        }
      },
      fields: [
        {
          type: "string",
          name: "id",
          label: "Department ID",
          required: true
        },
        {
          type: "string",
          name: "name",
          label: "Department Name",
          required: true
        },
        {
          type: "string",
          name: "name_tamil",
          label: "Department Name (Tamil)"
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
          name: "color",
          label: "Color Gradient Classes",
          description: "Tailwind gradient classes (e.g., from-blue-500 to-indigo-600)",
          required: true
        },
        {
          type: "object",
          name: "head",
          label: "Department Head",
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
            }
          ]
        },
        {
          type: "object",
          name: "programs",
          label: "Programs",
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
            }
          ]
        },
        {
          type: "string",
          name: "achievements",
          label: "Achievements",
          list: true
        },
        {
          type: "object",
          name: "contact",
          label: "Contact Information",
          fields: [
            {
              type: "string",
              name: "email",
              label: "Email",
              required: true
            },
            {
              type: "string",
              name: "phone",
              label: "Phone",
              required: true
            }
          ]
        }
      ]
    },
    {
      type: "object",
      name: "volunteer_opportunities",
      label: "Volunteer Opportunities Section",
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
          name: "positions",
          label: "Volunteer Positions",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: `${item?.role || "Role"} - ${item?.commitment || "Commitment"}`
            }),
            defaultItem: {
              role: "New Role",
              role_tamil: "",
              commitment: "Hours/week",
              description: ""
            }
          },
          fields: [
            {
              type: "string",
              name: "role",
              label: "Role",
              required: true
            },
            {
              type: "string",
              name: "role_tamil",
              label: "Role (Tamil)"
            },
            {
              type: "string",
              name: "commitment",
              label: "Time Commitment",
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
      name: "contact_info",
      label: "Contact Information Section",
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
          name: "general",
          label: "General Contact",
          fields: [
            {
              type: "string",
              name: "email",
              label: "General Email",
              required: true
            },
            {
              type: "string",
              name: "phone",
              label: "General Phone",
              required: true
            },
            {
              type: "string",
              name: "address",
              label: "Address Lines",
              list: true,
              required: true
            }
          ]
        },
        {
          type: "object",
          name: "office_hours",
          label: "Office Hours",
          fields: [
            {
              type: "string",
              name: "title",
              label: "Office Hours Title",
              required: true
            },
            {
              type: "string",
              name: "title_tamil",
              label: "Office Hours Title (Tamil)"
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
      const basePath = false ? "/thamizhi-site" : "";
      return `${basePath}/${lang}/departments`;
    }
  }
});
var departmentsCollections = [
  createDepartmentsCollection("en"),
  createDepartmentsCollection("si"),
  createDepartmentsCollection("ta")
  // Add more languages as needed
];

// tina/collections/pages/membership.ts
var createMembershipCollection = (lang) => ({
  name: `membership_${lang}`,
  label: `Membership Page Content (${lang.toUpperCase()})`,
  path: `src/content/i18n/${lang}`,
  format: "json",
  match: {
    include: "membership"
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
          name: "subtitle",
          label: "Subtitle",
          required: true
        },
        {
          type: "string",
          name: "subtitle_tamil",
          label: "Subtitle (Tamil)"
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
      name: "membership_types",
      label: "Membership Types",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: `${item?.name || "Membership Type"} - ${item?.price || "Price"}`
        }),
        defaultItem: {
          id: "new_membership",
          name: "New Membership",
          name_tamil: "",
          price: "$0",
          duration: "Annual",
          duration_tamil: "\u0B86\u0BA3\u0BCD\u0B9F\u0BC1\u0B95\u0BCD\u0B95\u0BC1",
          benefits: [],
          benefits_tamil: []
        }
      },
      fields: [
        {
          type: "string",
          name: "id",
          label: "Membership ID",
          required: true
        },
        {
          type: "string",
          name: "name",
          label: "Membership Name",
          required: true
        },
        {
          type: "string",
          name: "name_tamil",
          label: "Membership Name (Tamil)"
        },
        {
          type: "string",
          name: "price",
          label: "Price",
          required: true
        },
        {
          type: "string",
          name: "duration",
          label: "Duration",
          required: true
        },
        {
          type: "string",
          name: "duration_tamil",
          label: "Duration (Tamil)"
        },
        {
          type: "string",
          name: "benefits",
          label: "Benefits",
          list: true,
          required: true
        },
        {
          type: "string",
          name: "benefits_tamil",
          label: "Benefits (Tamil)",
          list: true
        }
      ]
    },
    {
      type: "object",
      name: "general_benefits",
      label: "General Benefits Section",
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
          required: true
        },
        {
          type: "string",
          name: "description_tamil",
          label: "Description (Tamil)"
        },
        {
          type: "object",
          name: "items",
          label: "Benefit Items",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: item?.title || "Benefit"
            }),
            defaultItem: {
              title: "New Benefit",
              title_tamil: "",
              description: ""
            }
          },
          fields: [
            {
              type: "string",
              name: "title",
              label: "Benefit Title",
              required: true
            },
            {
              type: "string",
              name: "title_tamil",
              label: "Benefit Title (Tamil)"
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
      name: "application_process",
      label: "Application Process Section",
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
          required: true
        },
        {
          type: "string",
          name: "description_tamil",
          label: "Description (Tamil)"
        },
        {
          type: "object",
          name: "steps",
          label: "Application Steps",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: `Step ${item?.step || "N"} - ${item?.title || "Step"}`
            }),
            defaultItem: {
              step: 1,
              title: "New Step",
              title_tamil: "",
              description: ""
            }
          },
          fields: [
            {
              type: "number",
              name: "step",
              label: "Step Number",
              required: true
            },
            {
              type: "string",
              name: "title",
              label: "Step Title",
              required: true
            },
            {
              type: "string",
              name: "title_tamil",
              label: "Step Title (Tamil)"
            },
            {
              type: "string",
              name: "description",
              label: "Step Description",
              ui: { component: "textarea" },
              required: true
            }
          ]
        }
      ]
    },
    {
      type: "object",
      name: "requirements",
      label: "Requirements Section",
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
          name: "general",
          label: "General Requirements",
          list: true,
          required: true
        },
        {
          type: "string",
          name: "documents",
          label: "Required Documents",
          list: true,
          required: true
        }
      ]
    },
    {
      type: "object",
      name: "member_testimonials",
      label: "Member Testimonials Section",
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
          name: "testimonials",
          label: "Testimonials",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: `${item?.name || "Member"} - ${item?.membership_type || "Type"}`
            }),
            defaultItem: {
              name: "New Member",
              name_tamil: "",
              membership_type: "Member",
              quote: "",
              rating: 5
            }
          },
          fields: [
            {
              type: "string",
              name: "name",
              label: "Member Name",
              required: true
            },
            {
              type: "string",
              name: "name_tamil",
              label: "Member Name (Tamil)"
            },
            {
              type: "string",
              name: "membership_type",
              label: "Membership Type",
              required: true
            },
            {
              type: "string",
              name: "quote",
              label: "Testimonial Quote",
              ui: { component: "textarea" },
              required: true
            },
            {
              type: "number",
              name: "rating",
              label: "Rating (1-5)",
              required: true
            }
          ]
        }
      ]
    },
    {
      type: "object",
      name: "faqs",
      label: "FAQ Section",
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
          name: "items",
          label: "FAQ Items",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: item?.question || "FAQ Question"
            }),
            defaultItem: {
              question: "New Question",
              question_tamil: "",
              answer: ""
            }
          },
          fields: [
            {
              type: "string",
              name: "question",
              label: "Question",
              required: true
            },
            {
              type: "string",
              name: "question_tamil",
              label: "Question (Tamil)"
            },
            {
              type: "string",
              name: "answer",
              label: "Answer",
              ui: { component: "textarea" },
              required: true
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
          type: "string",
          name: "description_tamil",
          label: "Description (Tamil)",
          ui: { component: "textarea" }
        },
        {
          type: "string",
          name: "email",
          label: "Email",
          required: true
        },
        {
          type: "string",
          name: "phone",
          label: "Phone",
          required: true
        },
        {
          type: "string",
          name: "office_hours",
          label: "Office Hours",
          list: true,
          required: true
        }
      ]
    }
  ],
  ui: {
    router: ({ document }) => {
      const basePath = false ? "/thamizhi-site" : "";
      return `${basePath}/${lang}/membership`;
    }
  }
});
var membershipCollections = [
  createMembershipCollection("en"),
  createMembershipCollection("si"),
  createMembershipCollection("ta")
  // Add more languages as needed
];

// tina/collections/pages/publications.ts
var createPublicationsCollection = (lang) => ({
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
          required: true
        },
        {
          type: "string",
          name: "title_tamil",
          label: "Title (Tamil)"
        },
        {
          type: "string",
          name: "subtitle",
          label: "Subtitle",
          required: true
        },
        {
          type: "string",
          name: "subtitle_tamil",
          label: "Subtitle (Tamil)"
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
      name: "categories",
      label: "Resource Categories",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: `${item?.name || "Category"} (${item?.count || 0} resources)`
        }),
        defaultItem: {
          id: "new_category",
          name: "New Category",
          name_tamil: "",
          description: "",
          description_tamil: "",
          count: 0,
          icon: "book"
        }
      },
      fields: [
        {
          type: "string",
          name: "id",
          label: "Category ID",
          required: true
        },
        {
          type: "string",
          name: "name",
          label: "Category Name",
          required: true
        },
        {
          type: "string",
          name: "name_tamil",
          label: "Category Name (Tamil)"
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
          name: "description_tamil",
          label: "Description (Tamil)",
          ui: { component: "textarea" }
        },
        {
          type: "number",
          name: "count",
          label: "Resource Count",
          required: true
        },
        {
          type: "string",
          name: "icon",
          label: "Icon Name",
          required: true
        }
      ]
    },
    {
      type: "object",
      name: "featured_resources",
      label: "Featured Resources",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: `${item?.title || "Resource"} - ${item?.category || "Category"}`
        }),
        defaultItem: {
          id: "new_resource",
          title: "New Resource",
          title_tamil: "",
          author: "Author Name",
          author_tamil: "",
          category: "Books",
          category_tamil: "",
          year: (/* @__PURE__ */ new Date()).getFullYear().toString(),
          pages: 0,
          description: "",
          description_tamil: "",
          cover_image: "",
          file_url: "",
          file_type: "PDF",
          file_size_mb: 0
        }
      },
      fields: [
        {
          type: "string",
          name: "id",
          label: "Resource ID",
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
          name: "title_tamil",
          label: "Title (Tamil)"
        },
        {
          type: "string",
          name: "author",
          label: "Author/Creator",
          required: true
        },
        {
          type: "string",
          name: "author_tamil",
          label: "Author/Creator (Tamil)"
        },
        {
          type: "string",
          name: "category",
          label: "Category",
          options: ["Books", "Magazines", "Research Papers", "Learning Materials", "Cultural Documents", "Other"],
          required: true
        },
        {
          type: "string",
          name: "category_tamil",
          label: "Category (Tamil)"
        },
        {
          type: "string",
          name: "year",
          label: "Publication Year",
          required: true
        },
        {
          type: "number",
          name: "pages",
          label: "Number of Pages"
        },
        {
          type: "string",
          name: "isbn",
          label: "ISBN (if applicable)"
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
          name: "description_tamil",
          label: "Description (Tamil)",
          ui: { component: "textarea" }
        },
        {
          type: "image",
          name: "cover_image",
          label: "Cover/Thumbnail Image",
          description: "Upload cover image or leave empty for default"
        },
        {
          type: "string",
          name: "file_url",
          label: "Resource File URL/Path",
          description: "Upload file or paste URL to PDF/document",
          required: true
        },
        {
          type: "string",
          name: "file_type",
          label: "File Type",
          options: ["PDF", "DOC", "DOCX", "PPT", "PPTX", "MP3", "MP4", "ZIP", "Other"],
          required: true
        },
        {
          type: "number",
          name: "file_size_mb",
          label: "File Size (MB)",
          description: "Approximate size in megabytes"
        },
        {
          type: "string",
          name: "language",
          label: "Content Language",
          options: ["Tamil", "English", "Sinhala", "Mixed"]
        },
        {
          type: "string",
          name: "tags",
          label: "Tags",
          list: true,
          description: "Keywords for searching (comma-separated)"
        }
      ]
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
          required: true
        },
        {
          type: "string",
          name: "title_tamil",
          label: "Section Title (Tamil)"
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
          name: "description_tamil",
          label: "Description (Tamil)",
          ui: { component: "textarea" }
        }
      ]
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
          type: "string",
          name: "description_tamil",
          label: "Description (Tamil)",
          ui: { component: "textarea" }
        },
        {
          type: "string",
          name: "contact_email",
          label: "Contact Email",
          required: true
        },
        {
          type: "string",
          name: "guidelines",
          label: "Submission Guidelines",
          list: true,
          description: "List of requirements/guidelines"
        }
      ]
    }
  ],
  ui: {
    router: ({ document }) => {
      const basePath = false ? "/thamizhi-site" : "";
      return `${basePath}/${lang}/publications`;
    }
  }
});
var publicationsCollections = [
  createPublicationsCollection("en"),
  createPublicationsCollection("ta"),
  createPublicationsCollection("si")
];

// tina/collections/pages/events.ts
var createEventsCollection = (lang) => ({
  name: `events_${lang}`,
  label: `Events Page Content (${lang.toUpperCase()})`,
  path: `src/content/i18n/${lang}`,
  format: "json",
  match: {
    include: "events"
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
          name: "subtitle",
          label: "Subtitle",
          required: true
        },
        {
          type: "string",
          name: "subtitle_tamil",
          label: "Subtitle (Tamil)"
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
      name: "upcoming_events",
      label: "Upcoming Events",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: `${item?.title || "Event"} - ${item?.date || "Date"}`
        }),
        defaultItem: {
          id: "",
          title: "New Event",
          title_tamil: "",
          date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
          time: "6:00 PM - 10:00 PM",
          time_tamil: "",
          location: "",
          location_tamil: "",
          address: "",
          category: "festival",
          category_tamil: "",
          description: "",
          description_tamil: "",
          image_color: "from-blue-500 to-indigo-600",
          price: "Free",
          price_tamil: "\u0B87\u0BB2\u0BB5\u0B9A\u0BAE\u0BCD",
          registration_required: false,
          capacity: 100,
          registered: 0,
          organizer: "",
          contact_email: ""
        }
      },
      fields: [
        {
          type: "string",
          name: "id",
          label: "Event ID",
          required: true
        },
        {
          type: "string",
          name: "title",
          label: "Event Title",
          required: true
        },
        {
          type: "string",
          name: "title_tamil",
          label: "Event Title (Tamil)"
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
          name: "time_tamil",
          label: "Event Time (Tamil)"
        },
        {
          type: "string",
          name: "location",
          label: "Location",
          required: true
        },
        {
          type: "string",
          name: "location_tamil",
          label: "Location (Tamil)"
        },
        {
          type: "string",
          name: "address",
          label: "Address",
          required: true
        },
        {
          type: "string",
          name: "category",
          label: "Category",
          required: true,
          options: [
            { value: "festival", label: "Festival" },
            { value: "education", label: "Education" },
            { value: "workshop", label: "Workshop" },
            { value: "competition", label: "Competition" },
            { value: "community", label: "Community" },
            { value: "cultural", label: "Cultural" },
            { value: "health", label: "Health" },
            { value: "youth", label: "Youth" },
            { value: "arts", label: "Arts" }
          ]
        },
        {
          type: "string",
          name: "category_tamil",
          label: "Category (Tamil)"
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
          name: "description_tamil",
          label: "Description (Tamil)",
          ui: { component: "textarea" }
        },
        {
          type: "string",
          name: "image_color",
          label: "Image Color Gradient",
          options: [
            { value: "from-orange-500 to-red-600", label: "Orange to Red" },
            { value: "from-blue-500 to-indigo-600", label: "Blue to Indigo" },
            { value: "from-green-500 to-teal-600", label: "Green to Teal" },
            { value: "from-purple-500 to-pink-600", label: "Purple to Pink" },
            { value: "from-yellow-500 to-orange-600", label: "Yellow to Orange" },
            { value: "from-teal-500 to-blue-600", label: "Teal to Blue" }
          ]
        },
        {
          type: "string",
          name: "price",
          label: "Price",
          required: true
        },
        {
          type: "string",
          name: "price_tamil",
          label: "Price (Tamil)"
        },
        {
          type: "boolean",
          name: "registration_required",
          label: "Registration Required"
        },
        {
          type: "number",
          name: "capacity",
          label: "Event Capacity"
        },
        {
          type: "number",
          name: "registered",
          label: "Currently Registered"
        },
        {
          type: "string",
          name: "age_limit",
          label: "Age Limit (if applicable)"
        },
        {
          type: "string",
          name: "includes",
          label: "What's Included"
        },
        {
          type: "string",
          name: "organizer",
          label: "Organizer",
          required: true
        },
        {
          type: "string",
          name: "contact_email",
          label: "Contact Email",
          required: true
        }
      ]
    },
    {
      type: "object",
      name: "past_events",
      label: "Past Events",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: `${item?.title || "Event"} - ${item?.date || "Date"}`
        }),
        defaultItem: {
          id: "",
          title: "Past Event",
          title_tamil: "",
          date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
          location: "",
          location_tamil: "",
          attendees: 0,
          category: "festival",
          category_tamil: "",
          highlights: []
        }
      },
      fields: [
        {
          type: "string",
          name: "id",
          label: "Event ID",
          required: true
        },
        {
          type: "string",
          name: "title",
          label: "Event Title",
          required: true
        },
        {
          type: "string",
          name: "title_tamil",
          label: "Event Title (Tamil)"
        },
        {
          type: "datetime",
          name: "date",
          label: "Event Date",
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
          name: "location_tamil",
          label: "Location (Tamil)"
        },
        {
          type: "number",
          name: "attendees",
          label: "Number of Attendees",
          required: true
        },
        {
          type: "string",
          name: "category",
          label: "Category",
          required: true,
          options: [
            { value: "festival", label: "Festival" },
            { value: "education", label: "Education" },
            { value: "workshop", label: "Workshop" },
            { value: "competition", label: "Competition" },
            { value: "community", label: "Community" },
            { value: "cultural", label: "Cultural" },
            { value: "health", label: "Health" },
            { value: "youth", label: "Youth" },
            { value: "arts", label: "Arts" }
          ]
        },
        {
          type: "string",
          name: "category_tamil",
          label: "Category (Tamil)"
        },
        {
          type: "string",
          name: "highlights",
          label: "Event Highlights",
          list: true
        }
      ]
    },
    {
      type: "object",
      name: "event_categories",
      label: "Event Categories",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item?.name || "Category"
        }),
        defaultItem: {
          id: "",
          name: "New Category",
          name_tamil: "",
          description: "",
          description_tamil: "",
          icon: "festival",
          count: 0,
          color: "blue"
        }
      },
      fields: [
        {
          type: "string",
          name: "id",
          label: "Category ID",
          required: true
        },
        {
          type: "string",
          name: "name",
          label: "Category Name",
          required: true
        },
        {
          type: "string",
          name: "name_tamil",
          label: "Category Name (Tamil)"
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
          name: "description_tamil",
          label: "Description (Tamil)",
          ui: { component: "textarea" }
        },
        {
          type: "string",
          name: "icon",
          label: "Icon Name",
          required: true
        },
        {
          type: "number",
          name: "count",
          label: "Event Count",
          required: true
        },
        {
          type: "string",
          name: "color",
          label: "Color Theme",
          required: true,
          options: [
            { value: "orange", label: "Orange" },
            { value: "blue", label: "Blue" },
            { value: "green", label: "Green" },
            { value: "purple", label: "Purple" },
            { value: "pink", label: "Pink" },
            { value: "teal", label: "Teal" },
            { value: "red", label: "Red" },
            { value: "yellow", label: "Yellow" }
          ]
        }
      ]
    },
    {
      type: "object",
      name: "regular_programs",
      label: "Regular Programs Section",
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
          type: "string",
          name: "description_tamil",
          label: "Description (Tamil)",
          ui: { component: "textarea" }
        },
        {
          type: "object",
          name: "programs",
          label: "Programs",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: item?.name || "Program"
            }),
            defaultItem: {
              id: "",
              name: "New Program",
              name_tamil: "",
              schedule: "",
              schedule_tamil: "",
              location: "",
              location_tamil: "",
              instructor: "",
              coordinator: "",
              fee: "Free"
            }
          },
          fields: [
            {
              type: "string",
              name: "id",
              label: "Program ID",
              required: true
            },
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
              name: "schedule",
              label: "Schedule",
              required: true
            },
            {
              type: "string",
              name: "schedule_tamil",
              label: "Schedule (Tamil)"
            },
            {
              type: "string",
              name: "location",
              label: "Location",
              required: true
            },
            {
              type: "string",
              name: "location_tamil",
              label: "Location (Tamil)"
            },
            {
              type: "string",
              name: "instructor",
              label: "Instructor"
            },
            {
              type: "string",
              name: "coordinator",
              label: "Coordinator"
            },
            {
              type: "string",
              name: "fee",
              label: "Fee",
              required: true
            }
          ]
        }
      ]
    },
    {
      type: "object",
      name: "event_calendar",
      label: "Event Calendar Section",
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
          type: "string",
          name: "description_tamil",
          label: "Description (Tamil)",
          ui: { component: "textarea" }
        },
        {
          type: "object",
          name: "subscription",
          label: "Calendar Subscription",
          fields: [
            {
              type: "string",
              name: "title",
              label: "Subscription Title",
              required: true
            },
            {
              type: "string",
              name: "title_tamil",
              label: "Subscription Title (Tamil)"
            },
            {
              type: "string",
              name: "description",
              label: "Subscription Description",
              ui: { component: "textarea" },
              required: true
            },
            {
              type: "string",
              name: "description_tamil",
              label: "Subscription Description (Tamil)",
              ui: { component: "textarea" }
            }
          ]
        }
      ]
    },
    {
      type: "object",
      name: "event_hosting",
      label: "Event Hosting Section",
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
          type: "string",
          name: "description_tamil",
          label: "Description (Tamil)",
          ui: { component: "textarea" }
        },
        {
          type: "string",
          name: "requirements",
          label: "Requirements",
          list: true,
          required: true
        },
        {
          type: "string",
          name: "requirements_tamil",
          label: "Requirements (Tamil)",
          list: true
        },
        {
          type: "string",
          name: "contact_email",
          label: "Contact Email",
          required: true
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
          type: "string",
          name: "description_tamil",
          label: "Description (Tamil)",
          ui: { component: "textarea" }
        },
        {
          type: "object",
          name: "events_coordinator",
          label: "Events Coordinator",
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
              name: "email",
              label: "Email",
              required: true
            },
            {
              type: "string",
              name: "phone",
              label: "Phone"
            }
          ]
        },
        {
          type: "object",
          name: "office_hours",
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
              name: "title_tamil",
              label: "Hours Title (Tamil)"
            },
            {
              type: "string",
              name: "schedule",
              label: "Schedule",
              list: true,
              required: true
            },
            {
              type: "string",
              name: "schedule_tamil",
              label: "Schedule (Tamil)",
              list: true
            }
          ]
        }
      ]
    }
  ],
  ui: {
    router: ({ document }) => {
      const basePath = false ? "/thamizhi-site" : "";
      return `${basePath}/${lang}/events`;
    }
  }
});
var eventsCollections = [
  createEventsCollection("en"),
  createEventsCollection("si"),
  createEventsCollection("ta")
  // Add more languages as needed
];

// tina/collections/pages/gallery.ts
var createGalleryCollection = (lang) => ({
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
          required: true
        },
        {
          type: "string",
          name: "title_tamil",
          label: "Title (Tamil)"
        },
        {
          type: "string",
          name: "subtitle",
          label: "Subtitle"
        },
        {
          type: "string",
          name: "subtitle_tamil",
          label: "Subtitle (Tamil)"
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: { component: "textarea" }
        }
      ]
    },
    {
      type: "object",
      name: "categories",
      label: "Image Categories",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: `${item?.name || "Category"} (${item?.count || 0} photos)`
        }),
        defaultItem: {
          id: "new-category",
          name: "New Category",
          name_tamil: "",
          count: 0,
          description: ""
        }
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
          ui: { component: "textarea" }
        },
        {
          type: "string",
          name: "description_tamil",
          label: "Description (Tamil)",
          ui: { component: "textarea" }
        }
      ]
    },
    {
      type: "object",
      name: "featured_albums",
      label: "Featured Albums",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: `${item?.title || "Album"} - ${item?.date || "Date"}`
        }),
        defaultItem: {
          id: "new-album",
          title: "New Album",
          title_tamil: "",
          date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
          location: "Location",
          image_count: 0,
          description: "",
          cover_image: "",
          images: []
        }
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
          ui: { component: "textarea" }
        },
        {
          type: "string",
          name: "description_tamil",
          label: "Description (Tamil)",
          ui: { component: "textarea" }
        },
        {
          type: "image",
          name: "cover_image",
          label: "Cover Image",
          description: "Main album cover image",
          required: true
        },
        {
          type: "object",
          name: "images",
          label: "Album Images",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: item?.caption || item?.title || "Image"
            }),
            defaultItem: {
              url: "",
              title: "",
              caption: ""
            }
          },
          fields: [
            {
              type: "image",
              name: "url",
              label: "Image",
              required: true
            },
            {
              type: "string",
              name: "title",
              label: "Title"
            },
            {
              type: "string",
              name: "title_tamil",
              label: "Title (Tamil)"
            },
            {
              type: "string",
              name: "caption",
              label: "Caption",
              ui: { component: "textarea" }
            },
            {
              type: "string",
              name: "caption_tamil",
              label: "Caption (Tamil)",
              ui: { component: "textarea" }
            }
          ]
        },
        { type: "string", name: "photographer", label: "Photographer" },
        { type: "string", name: "photographer_tamil", label: "Photographer (Tamil)" }
      ]
    },
    {
      type: "object",
      name: "recent_highlights",
      label: "Recent Highlights",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: `${item?.title || "Highlight"} - ${item?.date || "Date"}`
        }),
        defaultItem: {
          id: "new-highlight",
          title: "New Highlight",
          description: "",
          date: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
          thumbnail: ""
        }
      },
      fields: [
        { type: "string", name: "id", label: "ID", required: true },
        { type: "string", name: "title", label: "Title", required: true },
        { type: "string", name: "title_tamil", label: "Title (Tamil)" },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: { component: "textarea" }
        },
        {
          type: "string",
          name: "description_tamil",
          label: "Description (Tamil)",
          ui: { component: "textarea" }
        },
        {
          type: "image",
          name: "thumbnail",
          label: "Thumbnail Image",
          required: true
        },
        { type: "string", name: "date", label: "Date", required: true },
        { type: "string", name: "date_tamil", label: "Date (Tamil)" },
        { type: "string", name: "album_link", label: "Link to Full Album" }
      ]
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
          ui: { component: "textarea" }
        },
        {
          type: "string",
          name: "description_tamil",
          label: "Description (Tamil)",
          ui: { component: "textarea" }
        },
        { type: "string", name: "contact_email", label: "Contact Email", required: true },
        {
          type: "string",
          name: "guidelines",
          label: "Submission Guidelines",
          list: true,
          description: "List of photo submission guidelines"
        }
      ]
    }
  ],
  ui: {
    router: ({ document }) => {
      const basePath = false ? "/thamizhi-site" : "";
      return `${basePath}/${lang}/gallery`;
    }
  }
});
var galleryCollections = [
  createGalleryCollection("en"),
  createGalleryCollection("ta"),
  createGalleryCollection("si")
];

// tina/collections/pages/contact.ts
var createContactCollection = (lang) => ({
  name: `contact_${lang}`,
  label: `Contact Page Content (${lang.toUpperCase()})`,
  path: `src/content/i18n/${lang}`,
  format: "json",
  match: {
    include: "contact"
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
          name: "description",
          label: "Description",
          ui: { component: "textarea" }
        }
      ]
    },
    {
      type: "object",
      name: "contact_methods",
      label: "Contact Methods Section",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Section Title",
          required: true
        },
        {
          type: "string",
          name: "description",
          label: "Section Description",
          ui: { component: "textarea" }
        },
        {
          type: "object",
          name: "methods",
          label: "Contact Methods",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: item?.title || "New Contact Method"
            })
          },
          fields: [
            { type: "string", name: "title", label: "Method Title", required: true },
            {
              type: "string",
              name: "description",
              label: "Method Description",
              ui: { component: "textarea" }
            },
            { type: "string", name: "contact_info", label: "Contact Information" },
            { type: "string", name: "hours", label: "Available Hours" },
            {
              type: "string",
              name: "color",
              label: "Background Color (Tailwind class)",
              description: "e.g., bg-blue-600, bg-green-600"
            }
          ]
        }
      ]
    },
    {
      type: "object",
      name: "contact_form",
      label: "Contact Form Section",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Form Title",
          required: true
        },
        {
          type: "string",
          name: "description",
          label: "Form Description",
          ui: { component: "textarea" }
        }
      ]
    },
    {
      type: "object",
      name: "emergency_contact",
      label: "Emergency Contact Section",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Section Title",
          required: true
        },
        {
          type: "string",
          name: "description",
          label: "Section Description",
          ui: { component: "textarea" }
        },
        {
          type: "string",
          name: "label",
          label: "Emergency Label"
        },
        {
          type: "string",
          name: "phone",
          label: "Emergency Phone Number"
        },
        {
          type: "string",
          name: "availability",
          label: "Availability"
        }
      ]
    },
    {
      type: "object",
      name: "office_info",
      label: "Office Information",
      fields: [
        {
          type: "object",
          name: "hours",
          label: "Office Hours",
          fields: [
            { type: "string", name: "title", label: "Section Title", required: true },
            {
              type: "object",
              name: "schedule",
              label: "Schedule",
              list: true,
              ui: {
                itemProps: (item) => ({
                  label: item?.day || "New Schedule Item"
                })
              },
              fields: [
                { type: "string", name: "day", label: "Day", required: true },
                { type: "string", name: "time", label: "Time", required: true }
              ]
            },
            {
              type: "string",
              name: "note",
              label: "Additional Note (HTML allowed)",
              ui: { component: "textarea" }
            }
          ]
        },
        {
          type: "object",
          name: "location",
          label: "Office Location",
          fields: [
            { type: "string", name: "title", label: "Section Title", required: true },
            {
              type: "object",
              name: "address",
              label: "Address",
              fields: [
                { type: "string", name: "label", label: "Address Label" },
                {
                  type: "string",
                  name: "lines",
                  label: "Address Lines",
                  list: true
                }
              ]
            },
            {
              type: "object",
              name: "parking",
              label: "Parking Information",
              fields: [
                { type: "string", name: "title", label: "Subsection Title" },
                {
                  type: "string",
                  name: "description",
                  label: "Description",
                  ui: { component: "textarea" }
                }
              ]
            },
            {
              type: "object",
              name: "transport",
              label: "Public Transportation",
              fields: [
                { type: "string", name: "title", label: "Subsection Title" },
                {
                  type: "string",
                  name: "description",
                  label: "Description (HTML allowed)",
                  ui: { component: "textarea" }
                }
              ]
            },
            {
              type: "string",
              name: "security_notice",
              label: "Security Notice (HTML allowed)",
              ui: { component: "textarea" }
            }
          ]
        }
      ]
    },
    {
      type: "object",
      name: "faq_link",
      label: "FAQ Link Section",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Section Title",
          required: true
        },
        {
          type: "string",
          name: "description",
          label: "Section Description",
          ui: { component: "textarea" }
        },
        {
          type: "string",
          name: "button_text",
          label: "Button Text"
        },
        {
          type: "string",
          name: "link",
          label: "FAQ Link URL"
        }
      ]
    }
  ],
  ui: {
    router: ({ document }) => {
      const basePath = false ? "/thamizhi-site" : "";
      return `${basePath}/${lang}/contact`;
    }
  }
});
var contactCollections = [
  createContactCollection("en"),
  createContactCollection("si"),
  createContactCollection("ta")
  // Add more languages as needed
];

// tina/collections/pages/custom-pages.ts
var createCustomPagesCollection = (lang) => ({
  name: `pages_${lang}`,
  label: `Custom Pages (${lang.toUpperCase()})`,
  path: `src/content/pages/${lang}`,
  format: "json",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Page Title",
      required: true
    },
    {
      type: "string",
      name: "slug",
      label: "URL Slug (e.g., 'cultural-programs', 'about-us')",
      required: true
    },
    {
      type: "string",
      name: "description",
      label: "Page Description (for SEO)",
      ui: { component: "textarea" }
    },
    {
      type: "object",
      name: "hero",
      label: "Hero Section",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Hero Title"
        },
        {
          type: "string",
          name: "subtitle",
          label: "Hero Subtitle"
        },
        {
          type: "string",
          name: "description",
          label: "Hero Description",
          ui: { component: "textarea" }
        },
        {
          type: "image",
          name: "background_image",
          label: "Background Image (Optional)"
        }
      ]
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
            }
          },
          fields: [
            {
              type: "string",
              name: "title",
              label: "Section Title"
            },
            {
              type: "rich-text",
              name: "content",
              label: "Content",
              required: true
            },
            {
              type: "string",
              name: "background",
              label: "Background Color",
              options: [
                { label: "White", value: "white" },
                { label: "Light Gray", value: "gray" },
                { label: "Light Blue", value: "blue" }
              ]
            }
          ]
        },
        {
          name: "image_section",
          label: "Image Section",
          ui: {
            itemProps: (item) => {
              return { label: item?.caption || "Image Section" };
            }
          },
          fields: [
            {
              type: "image",
              name: "image",
              label: "Image",
              required: true
            },
            {
              type: "string",
              name: "caption",
              label: "Image Caption"
            },
            {
              type: "string",
              name: "alt_text",
              label: "Alt Text (for accessibility)",
              required: true
            }
          ]
        },
        {
          name: "cards_section",
          label: "Cards Section",
          ui: {
            itemProps: (item) => {
              return { label: item?.section_title || "Cards Section" };
            }
          },
          fields: [
            {
              type: "string",
              name: "section_title",
              label: "Section Title"
            },
            {
              type: "object",
              name: "cards",
              label: "Cards",
              list: true,
              ui: {
                itemProps: (item) => {
                  return { label: item?.title || "Card" };
                }
              },
              fields: [
                {
                  type: "string",
                  name: "title",
                  label: "Card Title",
                  required: true
                },
                {
                  type: "string",
                  name: "description",
                  label: "Description",
                  ui: { component: "textarea" }
                },
                {
                  type: "image",
                  name: "image",
                  label: "Card Image (Optional)"
                },
                {
                  type: "string",
                  name: "link",
                  label: "Link URL (Optional)"
                }
              ]
            }
          ]
        },
        {
          name: "cta_section",
          label: "Call to Action Section",
          ui: {
            itemProps: (item) => {
              return { label: item?.title || "CTA Section" };
            }
          },
          fields: [
            {
              type: "string",
              name: "title",
              label: "CTA Title"
            },
            {
              type: "string",
              name: "description",
              label: "Description",
              ui: { component: "textarea" }
            },
            {
              type: "string",
              name: "button_text",
              label: "Button Text",
              required: true
            },
            {
              type: "string",
              name: "button_link",
              label: "Button Link",
              required: true
            },
            {
              type: "string",
              name: "background_color",
              label: "Background Color",
              options: [
                { label: "Navy Blue", value: "blue" },
                { label: "Light Blue", value: "light-blue" },
                { label: "Gray", value: "gray" }
              ]
            }
          ]
        },
        {
          name: "statistics_section",
          label: "Statistics Section",
          ui: {
            itemProps: (item) => {
              return { label: "Statistics" };
            }
          },
          fields: [
            {
              type: "string",
              name: "section_title",
              label: "Section Title (Optional)"
            },
            {
              type: "object",
              name: "stats",
              label: "Statistics",
              list: true,
              ui: {
                itemProps: (item) => {
                  return { label: `${item?.number || "?"} - ${item?.label || "Stat"}` };
                }
              },
              fields: [
                {
                  type: "string",
                  name: "number",
                  label: "Number",
                  required: true
                },
                {
                  type: "string",
                  name: "label",
                  label: "Label",
                  required: true
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  ui: {
    router: ({ document }) => {
      const basePath = false ? "/thamizhi-site" : "";
      const slug = document._sys.filename.replace(/\.json$/, "");
      return `${basePath}/${lang}/${slug}`;
    }
  }
});
var customPagesCollections = [
  createCustomPagesCollection("en"),
  createCustomPagesCollection("ta"),
  createCustomPagesCollection("si")
];

// tina/collections/pages/blog-page.ts
var createBlogPageCollection = (lang) => ({
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
          required: true
        },
        {
          type: "string",
          name: "title_tamil",
          label: "Title (Tamil)"
        },
        {
          type: "string",
          name: "subtitle",
          label: "Subtitle"
        },
        {
          type: "string",
          name: "subtitle_tamil",
          label: "Subtitle (Tamil)"
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: { component: "textarea" }
        }
      ]
    },
    {
      type: "object",
      name: "categories_section",
      label: "Categories Section",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Section Title"
        },
        {
          type: "string",
          name: "title_tamil",
          label: "Section Title (Tamil)"
        }
      ]
    },
    {
      type: "object",
      name: "featured_section",
      label: "Featured Posts Section",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Section Title"
        },
        {
          type: "string",
          name: "title_tamil",
          label: "Section Title (Tamil)"
        }
      ]
    },
    {
      type: "object",
      name: "all_posts_section",
      label: "All Posts Section",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Section Title"
        },
        {
          type: "string",
          name: "title_tamil",
          label: "Section Title (Tamil)"
        },
        {
          type: "number",
          name: "posts_per_page",
          label: "Posts Per Page",
          description: "Number of posts to show per page"
        }
      ]
    }
  ],
  ui: {
    router: ({ document }) => {
      const basePath = false ? "/thamizhi-site" : "";
      return `${basePath}/${lang}/blog`;
    }
  }
});
var blogPageCollections = [
  createBlogPageCollection("en"),
  createBlogPageCollection("si"),
  createBlogPageCollection("ta")
];

// tina/collections/site/config.ts
var createSiteConfigCollection = (lang) => ({
  name: `site_config_${lang}`,
  label: `Site Configuration (${lang.toUpperCase()})`,
  path: `src/content/i18n/${lang}`,
  format: "json",
  match: {
    include: "site_config"
  },
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  fields: [
    {
      type: "object",
      name: "organization",
      label: "Organization Information",
      fields: [
        {
          type: "string",
          name: "name",
          label: "Organization Name",
          required: true
        },
        {
          type: "string",
          name: "name_local",
          label: "Organization Name (Local Language)",
          required: true
        },
        {
          type: "string",
          name: "tagline",
          label: "Tagline",
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
          name: "mission",
          label: "Mission Statement",
          ui: { component: "textarea" }
        },
        {
          type: "string",
          name: "vision",
          label: "Vision Statement",
          ui: { component: "textarea" }
        },
        {
          type: "string",
          name: "founded",
          label: "Founded Year"
        },
        {
          type: "string",
          name: "registration_number",
          label: "Registration Number"
        }
      ]
    },
    {
      type: "object",
      name: "contact",
      label: "Contact Information",
      fields: [
        {
          type: "string",
          name: "email",
          label: "Email Address",
          required: true
        },
        {
          type: "string",
          name: "phone",
          label: "Phone Number",
          required: true
        },
        {
          type: "object",
          name: "address",
          label: "Address",
          fields: [
            {
              type: "string",
              name: "street",
              label: "Street Address"
            },
            {
              type: "string",
              name: "city",
              label: "City"
            },
            {
              type: "string",
              name: "state",
              label: "State/Province"
            },
            {
              type: "string",
              name: "postal_code",
              label: "Postal Code"
            },
            {
              type: "string",
              name: "country",
              label: "Country"
            }
          ]
        },
        {
          type: "object",
          name: "social_media",
          label: "Social Media Links",
          fields: [
            {
              type: "string",
              name: "facebook",
              label: "Facebook URL"
            },
            {
              type: "string",
              name: "twitter",
              label: "Twitter URL"
            },
            {
              type: "string",
              name: "instagram",
              label: "Instagram URL"
            },
            {
              type: "string",
              name: "youtube",
              label: "YouTube URL"
            }
          ]
        }
      ]
    },
    {
      type: "object",
      name: "navigation",
      label: "Navigation",
      fields: [
        {
          type: "object",
          name: "primary",
          label: "Primary Navigation",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item?.name || "Nav Item" };
            }
          },
          fields: [
            {
              type: "string",
              name: "name",
              label: "Link Text",
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
          name: "footer",
          label: "Footer Navigation",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item?.name || "Footer Link" };
            }
          },
          fields: [
            {
              type: "string",
              name: "name",
              label: "Link Text",
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
      name: "footer",
      label: "Footer Content",
      fields: [
        {
          type: "string",
          name: "copyright",
          label: "Copyright Text",
          required: true
        },
        {
          type: "string",
          name: "description",
          label: "Footer Description",
          ui: { component: "textarea" }
        }
      ]
    },
    {
      type: "object",
      name: "meta",
      label: "SEO & Meta Information",
      fields: [
        {
          type: "string",
          name: "title_suffix",
          label: "Title Suffix",
          description: "Added to page titles (e.g., 'Page Name - Your Suffix')"
        },
        {
          type: "string",
          name: "description",
          label: "Default Meta Description",
          ui: { component: "textarea" }
        },
        {
          type: "string",
          name: "keywords",
          label: "Meta Keywords",
          ui: { component: "textarea" }
        },
        {
          type: "string",
          name: "author",
          label: "Author"
        }
      ]
    }
  ]
});
var siteConfigCollections = [
  createSiteConfigCollection("en"),
  createSiteConfigCollection("ta"),
  createSiteConfigCollection("si")
];

// tina/collections/blog.ts
var createBlogCollection = (lang) => ({
  name: `blog_${lang}`,
  label: `Blog Posts (${lang.toUpperCase()})`,
  path: `src/content/blog/${lang}`,
  format: "json",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true
    },
    {
      type: "string",
      name: "slug",
      label: "URL Slug",
      required: true,
      description: "URL-friendly version of the title (e.g., 'my-first-post')"
    },
    {
      type: "string",
      name: "excerpt",
      label: "Excerpt/Summary",
      ui: { component: "textarea" },
      required: true,
      description: "Brief summary shown in blog listings"
    },
    {
      type: "rich-text",
      name: "content",
      label: "Content",
      required: true,
      isBody: true
    },
    {
      type: "image",
      name: "featured_image",
      label: "Featured Image",
      required: true
    },
    {
      type: "string",
      name: "author",
      label: "Author Name",
      required: true
    },
    {
      type: "string",
      name: "author_role",
      label: "Author Role/Title",
      description: "e.g., 'Club President', 'Cultural Secretary'"
    },
    {
      type: "image",
      name: "author_image",
      label: "Author Image (Optional)"
    },
    {
      type: "datetime",
      name: "published_date",
      label: "Published Date",
      required: true
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
        { label: "Announcements", value: "announcements" }
      ],
      required: true
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      list: true,
      ui: {
        component: "tags"
      }
    },
    {
      type: "boolean",
      name: "featured",
      label: "Featured Post",
      description: "Show this post prominently on homepage"
    }
  ],
  ui: {
    router: ({ document }) => {
      const basePath = false ? "/thamizhi-site" : "";
      const slug = document._sys.filename.replace(/\.json$/, "");
      return `${basePath}/${lang}/blog/${slug}`;
    },
    allowedActions: {
      create: true,
      delete: true
    },
    filename: {
      slugify: (values) => {
        return values.slug || values.title?.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-") || "untitled";
      }
    },
    defaultItem: () => ({
      title: "New Blog Post",
      slug: "new-blog-post",
      excerpt: "Brief summary of the blog post...",
      author: "Thamizhi Team",
      author_role: "Content Writer",
      published_date: (/* @__PURE__ */ new Date()).toISOString(),
      category: "announcements",
      featured: false,
      tags: []
    })
  }
});
var blogCollections = [
  createBlogCollection("en"),
  createBlogCollection("ta"),
  createBlogCollection("si")
];

// tina/config.ts
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var isDev = true;
var config_default = defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
    // Use basePath only in production for GitHub Pages
    basePath: isDev ? void 0 : "thamizhi-site"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      ...siteConfigCollections,
      ...homepageCollections,
      ...aboutCollections,
      ...departmentsCollections,
      ...membershipCollections,
      ...publicationsCollections,
      ...eventsCollections,
      ...galleryCollections,
      ...contactCollections,
      ...customPagesCollections,
      ...blogPageCollections,
      ...blogCollections
    ]
  }
});
export {
  config_default as default
};
