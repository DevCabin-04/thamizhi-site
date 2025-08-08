import { defineConfig } from "tinacms";
import { homepageCollections } from "./collections/pages/home";
import { aboutCollections } from "./collections/pages/about";
import { departmentsCollections } from "./collections/pages/departments";
import { membershipCollections } from "./collections/pages/membership";
import { publicationsCollections } from "./collections/pages/publications";
import { eventsCollections } from "./collections/pages/events";
import { galleryCollections } from "./collections/pages/gallery";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
    // This is the corrected line.
    // Setting a fixed basePath is more reliable for GitHub Pages.
    basePath: "thamizhi-site",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  
  ui: {
    // Preview URL configuration for both local and production environments
    // This looks correct and will work as expected.
    previewUrl: (context) => {
      if (process.env.NODE_ENV == 'production') {
        return { url: 'https://devcabin-04.github.io/thamizhi-site' };
      }
      // Local development
      return { url: 'http://localhost:4321' };
    },
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
      ...galleryCollections,
    ],
  },
});
