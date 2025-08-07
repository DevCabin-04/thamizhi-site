// tina/collections/pages/departments.ts
import type { Collection } from "tinacms";

const createDepartmentsCollection = (lang: string): Collection => ({
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
      name: "departments",
      label: "Departments",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: `${item?.name || "Department"} - ${item?.id || "ID"}`,
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
        },
      },
      fields: [
        {
          type: "string",
          name: "id",
          label: "Department ID",
          required: true,
        },
        {
          type: "string",
          name: "name",
          label: "Department Name",
          required: true,
        },
        {
          type: "string",
          name: "name_tamil",
          label: "Department Name (Tamil)",
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
          required: true,
        },
        {
          type: "string",
          name: "color",
          label: "Color Gradient Classes",
          description: "Tailwind gradient classes (e.g., from-blue-500 to-indigo-600)",
          required: true,
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
          ],
        },
        {
          type: "object",
          name: "programs",
          label: "Programs",
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
          ],
        },
        {
          type: "string",
          name: "achievements",
          label: "Achievements",
          list: true,
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
              required: true,
            },
            {
              type: "string",
              name: "phone",
              label: "Phone",
              required: true,
            },
          ],
        },
      ],
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
          name: "positions",
          label: "Volunteer Positions",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: `${item?.role || "Role"} - ${item?.commitment || "Commitment"}`,
            }),
            defaultItem: {
              role: "New Role",
              role_tamil: "",
              commitment: "Hours/week",
              description: "",
            },
          },
          fields: [
            {
              type: "string",
              name: "role",
              label: "Role",
              required: true,
            },
            {
              type: "string",
              name: "role_tamil",
              label: "Role (Tamil)",
            },
            {
              type: "string",
              name: "commitment",
              label: "Time Commitment",
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
      name: "contact_info",
      label: "Contact Information Section",
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
          name: "general",
          label: "General Contact",
          fields: [
            {
              type: "string",
              name: "email",
              label: "General Email",
              required: true,
            },
            {
              type: "string",
              name: "phone",
              label: "General Phone",
              required: true,
            },
            {
              type: "string",
              name: "address",
              label: "Address Lines",
              list: true,
              required: true,
            },
          ],
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
              required: true,
            },
            {
              type: "string",
              name: "title_tamil",
              label: "Office Hours Title (Tamil)",
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
      const basePath = process.env.NODE_ENV === 'production' ? '/thamizhi-site' : '';
      
      // Return the path that matches your site's routing
      if (lang === 'en') {
        return `${basePath}/departments`;
      }
      return `${basePath}/${lang}/departments`;
    }
  }
});

export const departmentsCollections = [
  createDepartmentsCollection("en"),
  createDepartmentsCollection("si"),
  createDepartmentsCollection("ta"),
  // Add more languages as needed
];