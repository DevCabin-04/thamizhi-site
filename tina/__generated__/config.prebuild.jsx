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
      if (lang === "en") {
        return "/departments";
      }
      return `/${lang}/departments`;
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
      if (lang === "en") {
        return "/membership";
      }
      return `/${lang}/membership`;
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
      label: "Publication Categories",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: `${item?.name || "Category"} (${item?.count || 0} items)`
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
          label: "Item Count",
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
      name: "featured_publications",
      label: "Featured Publications",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: `${item?.title || "Publication"} (${item?.year || "Year"})`
        }),
        defaultItem: {
          id: "new_publication",
          title: "New Publication",
          title_tamil: "",
          author: "Author Name",
          author_tamil: "",
          category: "Category",
          category_tamil: "",
          year: (/* @__PURE__ */ new Date()).getFullYear().toString(),
          pages: 0,
          isbn: "",
          description: "",
          description_tamil: "",
          cover_color: "from-blue-500 to-blue-700",
          available: true,
          price: "$0.00",
          format: ["Paperback"]
        }
      },
      fields: [
        {
          type: "string",
          name: "id",
          label: "Publication ID",
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
          label: "Author",
          required: true
        },
        {
          type: "string",
          name: "author_tamil",
          label: "Author (Tamil)"
        },
        {
          type: "string",
          name: "category",
          label: "Category",
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
          label: "Number of Pages",
          required: true
        },
        {
          type: "string",
          name: "isbn",
          label: "ISBN"
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
          name: "cover_color",
          label: "Cover Color (Tailwind gradient classes)",
          required: true
        },
        {
          type: "boolean",
          name: "available",
          label: "Available"
        },
        {
          type: "string",
          name: "price",
          label: "Price",
          required: true
        },
        {
          type: "string",
          name: "format",
          label: "Available Formats",
          list: true,
          required: true
        },
        {
          type: "string",
          name: "release_date",
          label: "Release Date (if not available yet)"
        }
      ]
    },
    {
      type: "object",
      name: "magazines",
      label: "Magazines",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: `${item?.name || "Magazine"} (${item?.frequency || "Frequency"})`
        }),
        defaultItem: {
          id: "new_magazine",
          name: "New Magazine",
          name_tamil: "",
          subtitle: "Subtitle",
          subtitle_tamil: "",
          frequency: "Monthly",
          frequency_tamil: "",
          description: "",
          description_tamil: "",
          subscription_price: "$0/year",
          editor: "Editor Name",
          editor_tamil: ""
        }
      },
      fields: [
        {
          type: "string",
          name: "id",
          label: "Magazine ID",
          required: true
        },
        {
          type: "string",
          name: "name",
          label: "Magazine Name",
          required: true
        },
        {
          type: "string",
          name: "name_tamil",
          label: "Magazine Name (Tamil)"
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
          name: "frequency",
          label: "Publication Frequency",
          required: true
        },
        {
          type: "string",
          name: "frequency_tamil",
          label: "Publication Frequency (Tamil)"
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
          name: "subscription_price",
          label: "Subscription Price",
          required: true
        },
        {
          type: "string",
          name: "editor",
          label: "Editor Name",
          required: true
        },
        {
          type: "string",
          name: "editor_tamil",
          label: "Editor Name (Tamil)"
        }
      ]
    },
    {
      type: "object",
      name: "digital_resources",
      label: "Digital Resources Section",
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
          name: "items",
          label: "Digital Resource Items",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: `${item?.name || "Resource"} (${item?.access || "Access"})`
            }),
            defaultItem: {
              name: "New Resource",
              name_tamil: "",
              description: "",
              access: "Free"
            }
          },
          fields: [
            {
              type: "string",
              name: "name",
              label: "Resource Name",
              required: true
            },
            {
              type: "string",
              name: "name_tamil",
              label: "Resource Name (Tamil)"
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
              name: "access",
              label: "Access Type",
              options: ["Free", "Members Only", "Premium"],
              required: true
            }
          ]
        }
      ]
    },
    {
      type: "object",
      name: "research_publications",
      label: "Research Publications Section",
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
          name: "recent_papers",
          label: "Recent Research Papers",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: `${item?.title || "Paper"} (${item?.year || "Year"})`
            }),
            defaultItem: {
              title: "New Research Paper",
              title_tamil: "",
              author: "Author Name",
              journal: "Journal Name",
              year: (/* @__PURE__ */ new Date()).getFullYear().toString(),
              pages: "1-20"
            }
          },
          fields: [
            {
              type: "string",
              name: "title",
              label: "Paper Title",
              required: true
            },
            {
              type: "string",
              name: "title_tamil",
              label: "Paper Title (Tamil)"
            },
            {
              type: "string",
              name: "author",
              label: "Author",
              required: true
            },
            {
              type: "string",
              name: "journal",
              label: "Journal Name",
              required: true
            },
            {
              type: "string",
              name: "year",
              label: "Publication Year",
              required: true
            },
            {
              type: "string",
              name: "pages",
              label: "Page Range",
              required: true
            }
          ]
        }
      ]
    },
    {
      type: "object",
      name: "submission_guidelines",
      label: "Submission Guidelines Section",
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
          name: "requirements",
          label: "Requirements Categories",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: item?.category || "Category"
            }),
            defaultItem: {
              category: "New Category",
              category_tamil: "",
              items: ["New requirement"]
            }
          },
          fields: [
            {
              type: "string",
              name: "category",
              label: "Category Name",
              required: true
            },
            {
              type: "string",
              name: "category_tamil",
              label: "Category Name (Tamil)"
            },
            {
              type: "string",
              name: "items",
              label: "Requirements List",
              list: true,
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
          type: "object",
          name: "editorial_office",
          label: "Editorial Office",
          fields: [
            {
              type: "string",
              name: "title",
              label: "Office Title",
              required: true
            },
            {
              type: "string",
              name: "title_tamil",
              label: "Office Title (Tamil)"
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
              name: "editor_in_chief",
              label: "Editor in Chief",
              required: true
            },
            {
              type: "string",
              name: "editor_in_chief_tamil",
              label: "Editor in Chief (Tamil)"
            }
          ]
        },
        {
          type: "object",
          name: "distribution",
          label: "Distribution & Sales",
          fields: [
            {
              type: "string",
              name: "title",
              label: "Department Title",
              required: true
            },
            {
              type: "string",
              name: "title_tamil",
              label: "Department Title (Tamil)"
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
            }
          ]
        },
        {
          type: "object",
          name: "submissions",
          label: "Manuscript Submissions",
          fields: [
            {
              type: "string",
              name: "title",
              label: "Department Title",
              required: true
            },
            {
              type: "string",
              name: "title_tamil",
              label: "Department Title (Tamil)"
            },
            {
              type: "string",
              name: "email",
              label: "Email",
              required: true
            },
            {
              type: "string",
              name: "guidelines_url",
              label: "Guidelines URL",
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
        return "/publications";
      }
      return `/${lang}/publications`;
    }
  }
});
var publicationsCollections = [
  createPublicationsCollection("en"),
  createPublicationsCollection("si"),
  createPublicationsCollection("ta")
  // Add more languages as needed
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
      if (lang === "en") {
        return "/events";
      }
      return `/${lang}/events`;
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
          label: item?.name || "New Category"
        })
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
          label: item?.title || "New Album"
        })
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
          ui: { component: "textarea" }
        },
        {
          type: "string",
          name: "description_tamil",
          label: "Description (Tamil)",
          ui: { component: "textarea" }
        },
        { type: "string", name: "cover_color", label: "Cover Color" },
        { type: "string", name: "photographer", label: "Photographer" },
        {
          type: "string",
          name: "highlights",
          label: "Highlights",
          list: true
        }
      ]
    },
    {
      type: "object",
      name: "recent_highlights",
      label: "Recent Highlights",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item?.title || "New Highlight"
        })
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
        { type: "string", name: "date", label: "Date" },
        { type: "string", name: "date_tamil", label: "Date (Tamil)" },
        { type: "number", name: "image_count", label: "Image Count" }
      ]
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
          ui: { component: "textarea" }
        },
        {
          type: "string",
          name: "description_tamil",
          label: "Description (Tamil)",
          ui: { component: "textarea" }
        },
        {
          type: "object",
          name: "categories",
          label: "Contest Categories",
          list: true,
          fields: [
            { type: "string", name: "name", label: "Category Name" },
            { type: "string", name: "name_tamil", label: "Category Name (Tamil)" },
            { type: "string", name: "prize", label: "Prize" }
          ]
        },
        { type: "string", name: "deadline", label: "Deadline" },
        { type: "string", name: "rules", label: "Rules", list: true, ui: { component: "textarea" } }
      ]
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
          ui: { component: "textarea" }
        },
        {
          type: "object",
          name: "requirements",
          label: "Requirements",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: item?.title || "New Requirement Set"
            })
          },
          fields: [
            { type: "string", name: "title", label: "Title", required: true },
            { type: "string", name: "title_tamil", label: "Title (Tamil)" },
            { type: "string", name: "items", label: "Items", list: true }
          ]
        }
      ]
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
          ui: { component: "textarea" }
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
            { type: "string", name: "position_tamil", label: "Position (Tamil)" }
          ]
        },
        {
          type: "string",
          name: "office_hours",
          label: "Office Hours",
          list: true
        }
      ]
    }
  ],
  ui: {
    router: ({ document }) => {
      if (lang === "en") {
        return "/gallery";
      }
      return `/${lang}/gallery`;
    }
  }
});
var galleryCollections = [
  createGalleryCollection("en"),
  createGalleryCollection("si"),
  createGalleryCollection("ta")
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
      ...aboutCollections,
      ...departmentsCollections,
      ...membershipCollections,
      ...publicationsCollections,
      ...eventsCollections,
      ...galleryCollections
    ]
  }
});
export {
  config_default as default
};
