// tina/collections/site/config.ts
import type { Collection } from "tinacms";

const createSiteConfigCollection = (lang: string): Collection => ({
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
      delete: false,
    },
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
          required: true,
        },
        {
          type: "string",
          name: "name_local",
          label: "Organization Name (Local Language)",
          required: true,
        },
        {
          type: "string",
          name: "tagline",
          label: "Tagline",
          required: true,
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
          name: "mission",
          label: "Mission Statement",
          ui: { component: "textarea" },
        },
        {
          type: "string",
          name: "vision",
          label: "Vision Statement",
          ui: { component: "textarea" },
        },
        {
          type: "string",
          name: "founded",
          label: "Founded Year",
        },
        {
          type: "string",
          name: "registration_number",
          label: "Registration Number",
        },
      ],
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
          required: true,
        },
        {
          type: "string",
          name: "phone",
          label: "Phone Number",
          required: true,
        },
        {
          type: "object",
          name: "address",
          label: "Address",
          fields: [
            {
              type: "string",
              name: "street",
              label: "Street Address",
            },
            {
              type: "string",
              name: "city",
              label: "City",
            },
            {
              type: "string",
              name: "state",
              label: "State/Province",
            },
            {
              type: "string",
              name: "postal_code",
              label: "Postal Code",
            },
            {
              type: "string",
              name: "country",
              label: "Country",
            },
          ],
        },
        {
          type: "object",
          name: "social_media",
          label: "Social Media Links",
          fields: [
            {
              type: "string",
              name: "facebook",
              label: "Facebook URL",
            },
            {
              type: "string",
              name: "twitter",
              label: "Twitter URL",
            },
            {
              type: "string",
              name: "instagram",
              label: "Instagram URL",
            },
            {
              type: "string",
              name: "youtube",
              label: "YouTube URL",
            },
          ],
        },
      ],
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
            },
          },
          fields: [
            {
              type: "string",
              name: "name",
              label: "Link Text",
              required: true,
            },
            {
              type: "string",
              name: "href",
              label: "Link URL",
              required: true,
            },
          ],
        },
        {
          type: "object",
          name: "footer",
          label: "Footer Navigation",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item?.name || "Footer Link" };
            },
          },
          fields: [
            {
              type: "string",
              name: "name",
              label: "Link Text",
              required: true,
            },
            {
              type: "string",
              name: "href",
              label: "Link URL",
              required: true,
            },
          ],
        },
      ],
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
          required: true,
        },
        {
          type: "string",
          name: "description",
          label: "Footer Description",
          ui: { component: "textarea" },
        },
      ],
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
          description: "Added to page titles (e.g., 'Page Name - Your Suffix')",
        },
        {
          type: "string",
          name: "description",
          label: "Default Meta Description",
          ui: { component: "textarea" },
        },
        {
          type: "string",
          name: "keywords",
          label: "Meta Keywords",
          ui: { component: "textarea" },
        },
        {
          type: "string",
          name: "author",
          label: "Author",
        },
      ],
    },
  ],
});

export const siteConfigCollections = [
  createSiteConfigCollection("en"),
  createSiteConfigCollection("ta"),
  createSiteConfigCollection("si"),
];
