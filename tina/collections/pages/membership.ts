// tina/collections/pages/membership.ts
import type { Collection } from "tinacms";

const createMembershipCollection = (lang: string): Collection => ({
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
      name: "membership_types",
      label: "Membership Types",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: `${item?.name || "Membership Type"} - ${item?.price || "Price"}`,
        }),
        defaultItem: {
          id: "new_membership",
          name: "New Membership",
          name_tamil: "",
          price: "$0",
          duration: "Annual",
          duration_tamil: "ஆண்டுக்கு",
          benefits: [],
          benefits_tamil: [],
        },
      },
      fields: [
        {
          type: "string",
          name: "id",
          label: "Membership ID",
          required: true,
        },
        {
          type: "string",
          name: "name",
          label: "Membership Name",
          required: true,
        },
        {
          type: "string",
          name: "name_tamil",
          label: "Membership Name (Tamil)",
        },
        {
          type: "string",
          name: "price",
          label: "Price",
          required: true,
        },
        {
          type: "string",
          name: "duration",
          label: "Duration",
          required: true,
        },
        {
          type: "string",
          name: "duration_tamil",
          label: "Duration (Tamil)",
        },
        {
          type: "string",
          name: "benefits",
          label: "Benefits",
          list: true,
          required: true,
        },
        {
          type: "string",
          name: "benefits_tamil",
          label: "Benefits (Tamil)",
          list: true,
        },
      ],
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
          required: true,
        },
        {
          type: "string",
          name: "description_tamil",
          label: "Description (Tamil)",
        },
        {
          type: "object",
          name: "items",
          label: "Benefit Items",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: item?.title || "Benefit",
            }),
            defaultItem: {
              title: "New Benefit",
              title_tamil: "",
              description: "",
            },
          },
          fields: [
            {
              type: "string",
              name: "title",
              label: "Benefit Title",
              required: true,
            },
            {
              type: "string",
              name: "title_tamil",
              label: "Benefit Title (Tamil)",
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
      name: "application_process",
      label: "Application Process Section",
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
          required: true,
        },
        {
          type: "string",
          name: "description_tamil",
          label: "Description (Tamil)",
        },
        {
          type: "object",
          name: "steps",
          label: "Application Steps",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: `Step ${item?.step || "N"} - ${item?.title || "Step"}`,
            }),
            defaultItem: {
              step: 1,
              title: "New Step",
              title_tamil: "",
              description: "",
            },
          },
          fields: [
            {
              type: "number",
              name: "step",
              label: "Step Number",
              required: true,
            },
            {
              type: "string",
              name: "title",
              label: "Step Title",
              required: true,
            },
            {
              type: "string",
              name: "title_tamil",
              label: "Step Title (Tamil)",
            },
            {
              type: "string",
              name: "description",
              label: "Step Description",
              ui: { component: "textarea" },
              required: true,
            },
          ],
        },
      ],
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
          required: true,
        },
        {
          type: "string",
          name: "title_tamil",
          label: "Title (Tamil)",
        },
        {
          type: "string",
          name: "general",
          label: "General Requirements",
          list: true,
          required: true,
        },
        {
          type: "string",
          name: "documents",
          label: "Required Documents",
          list: true,
          required: true,
        },
      ],
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
          required: true,
        },
        {
          type: "string",
          name: "title_tamil",
          label: "Title (Tamil)",
        },
        {
          type: "object",
          name: "testimonials",
          label: "Testimonials",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: `${item?.name || "Member"} - ${item?.membership_type || "Type"}`,
            }),
            defaultItem: {
              name: "New Member",
              name_tamil: "",
              membership_type: "Member",
              quote: "",
              rating: 5,
            },
          },
          fields: [
            {
              type: "string",
              name: "name",
              label: "Member Name",
              required: true,
            },
            {
              type: "string",
              name: "name_tamil",
              label: "Member Name (Tamil)",
            },
            {
              type: "string",
              name: "membership_type",
              label: "Membership Type",
              required: true,
            },
            {
              type: "string",
              name: "quote",
              label: "Testimonial Quote",
              ui: { component: "textarea" },
              required: true,
            },
            {
              type: "number",
              name: "rating",
              label: "Rating (1-5)",
              required: true,
            },
          ],
        },
      ],
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
          required: true,
        },
        {
          type: "string",
          name: "title_tamil",
          label: "Title (Tamil)",
        },
        {
          type: "object",
          name: "items",
          label: "FAQ Items",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: item?.question || "FAQ Question",
            }),
            defaultItem: {
              question: "New Question",
              question_tamil: "",
              answer: "",
            },
          },
          fields: [
            {
              type: "string",
              name: "question",
              label: "Question",
              required: true,
            },
            {
              type: "string",
              name: "question_tamil",
              label: "Question (Tamil)",
            },
            {
              type: "string",
              name: "answer",
              label: "Answer",
              ui: { component: "textarea" },
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
          name: "office_hours",
          label: "Office Hours",
          list: true,
          required: true,
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
        return `${basePath}/membership`;
      }
      return `${basePath}/${lang}/membership`;
    }
  }
});

export const membershipCollections = [
  createMembershipCollection("en"),
  createMembershipCollection("si"),
  createMembershipCollection("ta"),
  // Add more languages as needed
];