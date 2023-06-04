import { createClient } from "next-sanity";

// import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  dataset: "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_API_KEY,
});
