import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '21e25873934e8741e0ca8a009bd0c4709f87c98a', queries,  });
export default client;
  