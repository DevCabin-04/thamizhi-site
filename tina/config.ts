import { defineConfig } from "tinacms";
import { homepageCollections } from "./collections/pages/home";
import { aboutCollections } from "./collections/pages/about";
import { departmentsCollections } from "./collections/pages/departments";
import { membershipCollections } from "./collections/pages/membership";
import { publicationsCollections } from "./collections/pages/publications";
import { eventsCollections } from "./collections/pages/events";
import { galleryCollections } from "./collections/pages/gallery";
import { contactCollections } from "./collections/pages/contact";
import { customPagesCollections } from "./collections/pages/custom-pages";
import { blogPageCollections } from "./collections/pages/blog-page";
import { siteConfigCollections } from "./collections/site/config";
import { blogCollections } from "./collections/blog";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

const isDev = process.env.NODE_ENV !== 'production';

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
    // basePath only needed for GitHub Pages, not Vercel
    // basePath: isDev ? undefined : "thamizhi-site",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
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
      ...blogCollections,
    ],
  },
});
