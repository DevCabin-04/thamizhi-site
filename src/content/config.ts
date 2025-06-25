import { z, defineCollection } from "astro:content";

// Define flexible schema for i18n content - allows any structure
const i18nCollection = defineCollection({
  type: "data",
  schema: z.any(),
});

// Export collections
export const collections = {
  i18n: i18nCollection,
};
