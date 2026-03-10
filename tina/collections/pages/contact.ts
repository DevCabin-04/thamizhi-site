// tina/collections/pages/contact.ts
import type { Collection } from "tinacms";

const createContactCollection = (lang: string): Collection => ({
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
    {
      type: "object",
      name: "contact_methods",
      label: "Contact Methods Section",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Section Title",
          required: true,
        },
        {
          type: "string",
          name: "description",
          label: "Section Description",
          ui: { component: "textarea" },
        },
        {
          type: "object",
          name: "methods",
          label: "Contact Methods",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: item?.title || "New Contact Method",
            }),
          },
          fields: [
            { type: "string", name: "title", label: "Method Title", required: true },
            {
              type: "string",
              name: "description",
              label: "Method Description",
              ui: { component: "textarea" },
            },
            { type: "string", name: "contact_info", label: "Contact Information" },
            { type: "string", name: "hours", label: "Available Hours" },
            {
              type: "string",
              name: "color",
              label: "Background Color (Tailwind class)",
              description: "e.g., bg-blue-600, bg-green-600",
            },
          ],
        },
      ],
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
          required: true,
        },
        {
          type: "string",
          name: "description",
          label: "Form Description",
          ui: { component: "textarea" },
        },
      ],
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
          required: true,
        },
        {
          type: "string",
          name: "description",
          label: "Section Description",
          ui: { component: "textarea" },
        },
        {
          type: "string",
          name: "label",
          label: "Emergency Label",
        },
        {
          type: "string",
          name: "phone",
          label: "Emergency Phone Number",
        },
        {
          type: "string",
          name: "availability",
          label: "Availability",
        },
      ],
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
                  label: item?.day || "New Schedule Item",
                }),
              },
              fields: [
                { type: "string", name: "day", label: "Day", required: true },
                { type: "string", name: "time", label: "Time", required: true },
              ],
            },
            {
              type: "string",
              name: "note",
              label: "Additional Note (HTML allowed)",
              ui: { component: "textarea" },
            },
          ],
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
                  list: true,
                },
              ],
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
                  ui: { component: "textarea" },
                },
              ],
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
                  ui: { component: "textarea" },
                },
              ],
            },
            {
              type: "string",
              name: "security_notice",
              label: "Security Notice (HTML allowed)",
              ui: { component: "textarea" },
            },
          ],
        },
      ],
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
          required: true,
        },
        {
          type: "string",
          name: "description",
          label: "Section Description",
          ui: { component: "textarea" },
        },
        {
          type: "string",
          name: "button_text",
          label: "Button Text",
        },
        {
          type: "string",
          name: "link",
          label: "FAQ Link URL",
        },
      ],
    },
  ],
  ui: {
    router: ({ document }) => {
      const basePath = process.env.NODE_ENV === 'production' ? '/thamizhi-site' : '';
      return `${basePath}/${lang}/contact`;
    }
  }
});

export const contactCollections = [
  createContactCollection("en"),
  createContactCollection("si"),
  createContactCollection("ta"),
  // Add more languages as needed
];
