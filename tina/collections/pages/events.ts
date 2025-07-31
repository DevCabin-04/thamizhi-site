// tina/collections/pages/events.ts
import type { Collection } from "tinacms";

const createEventsCollection = (lang: string): Collection => ({
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
      name: "upcoming_events",
      label: "Upcoming Events",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: `${item?.title || "Event"} - ${item?.date || "Date"}`,
        }),
        defaultItem: {
          id: "",
          title: "New Event",
          title_tamil: "",
          date: new Date().toISOString().split('T')[0],
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
          price_tamil: "இலவசம்",
          registration_required: false,
          capacity: 100,
          registered: 0,
          organizer: "",
          contact_email: "",
        },
      },
      fields: [
        {
          type: "string",
          name: "id",
          label: "Event ID",
          required: true,
        },
        {
          type: "string",
          name: "title",
          label: "Event Title",
          required: true,
        },
        {
          type: "string",
          name: "title_tamil",
          label: "Event Title (Tamil)",
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
          name: "time_tamil",
          label: "Event Time (Tamil)",
        },
        {
          type: "string",
          name: "location",
          label: "Location",
          required: true,
        },
        {
          type: "string",
          name: "location_tamil",
          label: "Location (Tamil)",
        },
        {
          type: "string",
          name: "address",
          label: "Address",
          required: true,
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
            { value: "arts", label: "Arts" },
          ],
        },
        {
          type: "string",
          name: "category_tamil",
          label: "Category (Tamil)",
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
          name: "image_color",
          label: "Image Color Gradient",
          options: [
            { value: "from-orange-500 to-red-600", label: "Orange to Red" },
            { value: "from-blue-500 to-indigo-600", label: "Blue to Indigo" },
            { value: "from-green-500 to-teal-600", label: "Green to Teal" },
            { value: "from-purple-500 to-pink-600", label: "Purple to Pink" },
            { value: "from-yellow-500 to-orange-600", label: "Yellow to Orange" },
            { value: "from-teal-500 to-blue-600", label: "Teal to Blue" },
          ],
        },
        {
          type: "string",
          name: "price",
          label: "Price",
          required: true,
        },
        {
          type: "string",
          name: "price_tamil",
          label: "Price (Tamil)",
        },
        {
          type: "boolean",
          name: "registration_required",
          label: "Registration Required",
        },
        {
          type: "number",
          name: "capacity",
          label: "Event Capacity",
        },
        {
          type: "number",
          name: "registered",
          label: "Currently Registered",
        },
        {
          type: "string",
          name: "age_limit",
          label: "Age Limit (if applicable)",
        },
        {
          type: "string",
          name: "includes",
          label: "What's Included",
        },
        {
          type: "string",
          name: "organizer",
          label: "Organizer",
          required: true,
        },
        {
          type: "string",
          name: "contact_email",
          label: "Contact Email",
          required: true,
        },
      ],
    },
    {
      type: "object",
      name: "past_events",
      label: "Past Events",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: `${item?.title || "Event"} - ${item?.date || "Date"}`,
        }),
        defaultItem: {
          id: "",
          title: "Past Event",
          title_tamil: "",
          date: new Date().toISOString().split('T')[0],
          location: "",
          location_tamil: "",
          attendees: 0,
          category: "festival",
          category_tamil: "",
          highlights: [],
        },
      },
      fields: [
        {
          type: "string",
          name: "id",
          label: "Event ID",
          required: true,
        },
        {
          type: "string",
          name: "title",
          label: "Event Title",
          required: true,
        },
        {
          type: "string",
          name: "title_tamil",
          label: "Event Title (Tamil)",
        },
        {
          type: "datetime",
          name: "date",
          label: "Event Date",
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
          name: "location_tamil",
          label: "Location (Tamil)",
        },
        {
          type: "number",
          name: "attendees",
          label: "Number of Attendees",
          required: true,
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
            { value: "arts", label: "Arts" },
          ],
        },
        {
          type: "string",
          name: "category_tamil",
          label: "Category (Tamil)",
        },
        {
          type: "string",
          name: "highlights",
          label: "Event Highlights",
          list: true,
        },
      ],
    },
    {
      type: "object",
      name: "event_categories",
      label: "Event Categories",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item?.name || "Category",
        }),
        defaultItem: {
          id: "",
          name: "New Category",
          name_tamil: "",
          description: "",
          description_tamil: "",
          icon: "festival",
          count: 0,
          color: "blue",
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
          type: "string",
          name: "icon",
          label: "Icon Name",
          required: true,
        },
        {
          type: "number",
          name: "count",
          label: "Event Count",
          required: true,
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
            { value: "yellow", label: "Yellow" },
          ],
        },
      ],
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
          name: "programs",
          label: "Programs",
          list: true,
          ui: {
            itemProps: (item) => ({
              label: item?.name || "Program",
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
              fee: "Free",
            },
          },
          fields: [
            {
              type: "string",
              name: "id",
              label: "Program ID",
              required: true,
            },
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
              name: "schedule",
              label: "Schedule",
              required: true,
            },
            {
              type: "string",
              name: "schedule_tamil",
              label: "Schedule (Tamil)",
            },
            {
              type: "string",
              name: "location",
              label: "Location",
              required: true,
            },
            {
              type: "string",
              name: "location_tamil",
              label: "Location (Tamil)",
            },
            {
              type: "string",
              name: "instructor",
              label: "Instructor",
            },
            {
              type: "string",
              name: "coordinator",
              label: "Coordinator",
            },
            {
              type: "string",
              name: "fee",
              label: "Fee",
              required: true,
            },
          ],
        },
      ],
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
          name: "subscription",
          label: "Calendar Subscription",
          fields: [
            {
              type: "string",
              name: "title",
              label: "Subscription Title",
              required: true,
            },
            {
              type: "string",
              name: "title_tamil",
              label: "Subscription Title (Tamil)",
            },
            {
              type: "string",
              name: "description",
              label: "Subscription Description",
              ui: { component: "textarea" },
              required: true,
            },
            {
              type: "string",
              name: "description_tamil",
              label: "Subscription Description (Tamil)",
              ui: { component: "textarea" },
            },
          ],
        },
      ],
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
          name: "requirements",
          label: "Requirements",
          list: true,
          required: true,
        },
        {
          type: "string",
          name: "requirements_tamil",
          label: "Requirements (Tamil)",
          list: true,
        },
        {
          type: "string",
          name: "contact_email",
          label: "Contact Email",
          required: true,
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
          name: "events_coordinator",
          label: "Events Coordinator",
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
              name: "email",
              label: "Email",
              required: true,
            },
            {
              type: "string",
              name: "phone",
              label: "Phone",
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
              label: "Hours Title",
              required: true,
            },
            {
              type: "string",
              name: "title_tamil",
              label: "Hours Title (Tamil)",
            },
            {
              type: "string",
              name: "schedule",
              label: "Schedule",
              list: true,
              required: true,
            },
            {
              type: "string",
              name: "schedule_tamil",
              label: "Schedule (Tamil)",
              list: true,
            },
          ],
        },
      ],
    },
  ],
  ui: {
    router: ({ document }) => {
      // Return the path that matches your site's routing
      if (lang === 'en') {
        return '/events';
      }
      return `/${lang}/events`;
    }
  }
});

export const eventsCollections = [
  createEventsCollection("en"),
  createEventsCollection("si"),
  createEventsCollection("ta"),
  // Add more languages as needed
];