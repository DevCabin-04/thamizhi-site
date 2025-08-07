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
      label: "Publication Categories",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: `${item?.name || "Category"} (${item?.count || 0} items)`,
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
          label: "Item Count",
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
      name: "featured_publications",
      label: "Featured Publications",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: `${item?.title || "Publication"} (${item?.year || "Year"})`,
        }),
        defaultItem: {
          id: "new_publication",
          title: "New Publication",
          title_tamil: "",
          author: "Author Name",
          author_tamil: "",
          category: "Category",
          category_tamil: "",
          year: new Date().getFullYear().toString(),
          pages: 0,
          isbn: "",
          description: "",
          description_tamil: "",
          cover_color: "from-blue-500 to-blue-700",
          available: true,
          price: "$0.00",
          format: ["Paperback"],
        },
      },
      fields: [
        {
          type: "string",
          name: "id",
          label: "Publication ID",
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
          label: "Author",
          required: true,
        },
        {
          type: "string",
          name: "author_tamil",
          label: "Author (Tamil)",
        },
        {
          type: "string",
          name: "category",
          label: "Category",
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
          required: true,
        },
        {
          type: "string",
          name: "isbn",
          label: "ISBN",
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
          name: "cover_color",
          label: "Cover Color (Tailwind gradient classes)",
          required: true,
        },
        {
          type: "boolean",
          name: "available",
          label: "Available",
        },
        {
          type: "string",
          name: "price",
          label: "Price",
          required: true,
        },
        {
          type: "string",
          name: "format",
          label: "Available Formats",
          list: true,
          required: true,
        },
        {
          type: "string",
          name: "release_date",
          label: "Release Date (if not available yet)",
        },
      ],
    },
    {
      type: "object",
      name: "magazines",
      label: "Magazines",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: `${item?.name || "Magazine"} (${item?.frequency || "Frequency"})`,
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
          editor_tamil: "",
        },
      },
      fields: [
        {
          type: "string",
          name: "id",
          label: "Magazine ID",
          required: true,
        },
        {
          type: "string",
          name: "name",
          label: "Magazine Name",
          required: true,
        },
        {
          type: "string",
          name: "name_tamil",
          label: "Magazine Name (Tamil)",
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
          name: "frequency",
          label: "Publication Frequency",
          required: true,
        },
        {
          type: "string",
          name: "frequency_tamil",
          label: "Publication Frequency (Tamil)",
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
          name: "subscription_price",
          label: "Subscription Price",
          required: true,
        },
        {
          type: "string",
          name: "editor",
          label: "Editor Name",
          required: true,
        },
        {
          type: "string",
          name: "editor_tamil",
          label: "Editor Name (Tamil)",
        },
      ],
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
          type: "object",
          name: "items",
          label: "Digital Resource Items",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: `${item?.name || "Resource"} (${item?.access || "Access"})`,
            }),
            defaultItem: {
              name: "New Resource",
              name_tamil: "",
              description: "",
              access: "Free",
            },
          },
          fields: [
            {
              type: "string",
              name: "name",
              label: "Resource Name",
              required: true,
            },
            {
              type: "string",
              name: "name_tamil",
              label: "Resource Name (Tamil)",
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
              name: "access",
              label: "Access Type",
              options: ["Free", "Members Only", "Premium"],
              required: true,
            },
          ],
        },
      ],
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
          type: "object",
          name: "recent_papers",
          label: "Recent Research Papers",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: `${item?.title || "Paper"} (${item?.year || "Year"})`,
            }),
            defaultItem: {
              title: "New Research Paper",
              title_tamil: "",
              author: "Author Name",
              journal: "Journal Name",
              year: new Date().getFullYear().toString(),
              pages: "1-20",
            },
          },
          fields: [
            {
              type: "string",
              name: "title",
              label: "Paper Title",
              required: true,
            },
            {
              type: "string",
              name: "title_tamil",
              label: "Paper Title (Tamil)",
            },
            {
              type: "string",
              name: "author",
              label: "Author",
              required: true,
            },
            {
              type: "string",
              name: "journal",
              label: "Journal Name",
              required: true,
            },
            {
              type: "string",
              name: "year",
              label: "Publication Year",
              required: true,
            },
            {
              type: "string",
              name: "pages",
              label: "Page Range",
              required: true,
            },
          ],
        },
      ],
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
          type: "object",
          name: "requirements",
          label: "Requirements Categories",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: item?.category || "Category",
            }),
            defaultItem: {
              category: "New Category",
              category_tamil: "",
              items: ["New requirement"],
            },
          },
          fields: [
            {
              type: "string",
              name: "category",
              label: "Category Name",
              required: true,
            },
            {
              type: "string",
              name: "category_tamil",
              label: "Category Name (Tamil)",
            },
            {
              type: "string",
              name: "items",
              label: "Requirements List",
              list: true,
              required: true,
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
          type: "string",
          name: "description_tamil",
          label: "Description (Tamil)",
          ui: { component: "textarea" },
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
              required: true,
            },
            {
              type: "string",
              name: "title_tamil",
              label: "Office Title (Tamil)",
            },
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
            {
              type: "string",
              name: "editor_in_chief",
              label: "Editor in Chief",
              required: true,
            },
            {
              type: "string",
              name: "editor_in_chief_tamil",
              label: "Editor in Chief (Tamil)",
            },
          ],
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
              required: true,
            },
            {
              type: "string",
              name: "title_tamil",
              label: "Department Title (Tamil)",
            },
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
        {
          type: "object",
          name: "submissions",
          label: "Manuscript Submissions",
          fields: [
            {
              type: "string",
              name: "title",
              label: "Department Title",
              required: true,
            },
            {
              type: "string",
              name: "title_tamil",
              label: "Department Title (Tamil)",
            },
            {
              type: "string",
              name: "email",
              label: "Email",
              required: true,
            },
            {
              type: "string",
              name: "guidelines_url",
              label: "Guidelines URL",
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
        return `${basePath}/publications`;
      }
      return `${basePath}/${lang}/publications`;
    }
  }
});

export const publicationsCollections = [
  createPublicationsCollection("en"),
  createPublicationsCollection("si"),
  createPublicationsCollection("ta"),
  // Add more languages as needed
];