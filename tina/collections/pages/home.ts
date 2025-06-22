// tina/collections/pages/home.ts
import type { Collection } from "tinacms";

const createHomepageCollection = (lang: string): Collection => ({
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
          required: true,
        },
        {
          type: "string",
          name: "subtitle",
          label: "Subtitle",
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          ui: { component: "textarea" },
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
          name: "cta_secondary",
          label: "Secondary Button",
          fields: [
            {
              type: "string",
              name: "text",
              label: "Button Text",
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
      name: "mission_statement",
      label: "Mission Statement",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true,
        },
        {
          type: "string",
          name: "content",
          label: "Content",
          ui: { component: "textarea" },
          required: true,
        },
      ],
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
          name: "icon",
          label: "Icon Name",
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
      name: "recent_events",
      label: "Recent Events",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Event Title",
          required: true,
        },
        {
          type: "datetime",
          name: "date",
          label: "Event Date",
          required: true,
        },
        {
          type: "string",
          name: "time",
          label: "Event Time",
          required: true,
        },
        {
          type: "string",
          name: "location",
          label: "Location",
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
          type: "image",
          name: "image",
          label: "Event Image",
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
            { label: "Youth", value: "youth" },
          ],
        },
      ],
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
          required: true,
        },
        {
          type: "datetime",
          name: "date",
          label: "Date",
          required: true,
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
          name: "priority",
          label: "Priority",
          options: [
            { label: "High", value: "high" },
            { label: "Medium", value: "medium" },
            { label: "Low", value: "low" },
          ],
        },
        {
          type: "string",
          name: "category",
          label: "Category",
          options: [
            { label: "Education", value: "education" },
            { label: "Membership", value: "membership" },
            { label: "Community", value: "community" },
            { label: "Events", value: "events" },
          ],
        },
      ],
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
          required: true,
        },
        {
          type: "string",
          name: "description",
          label: "Description",
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
          name: "href",
          label: "Link URL",
          required: true,
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
            { label: "Yellow", value: "yellow" },
          ],
        },
      ],
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
          name: "placeholder",
          label: "Input Placeholder",
          required: true,
        },
        {
          type: "string",
          name: "button",
          label: "Button Text",
          required: true,
        },
        {
          type: "string",
          name: "privacy",
          label: "Privacy Text",
          ui: { component: "textarea" },
        },
      ],
    },
  ],
  ui: {
    router: ({ document }) => {
      return lang === 'en' ? '/' : `/${lang}`;
    }
  }
});

export const homepageCollections = [
  createHomepageCollection("en"),
  createHomepageCollection("si"),
  createHomepageCollection("ta"),
  // Add more languages as needed
];