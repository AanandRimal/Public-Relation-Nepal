import { createClient, type SanityClient } from "@sanity/client";

let client: SanityClient | null = null;

/** Lazy so importing this module doesn't throw when no project is configured yet (mock mode). */
export function getSanityClient(): SanityClient {
  if (!client) {
    client = createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
      apiVersion: "2024-01-01",
      useCdn: process.env.NODE_ENV === "production",
      token: process.env.SANITY_API_TOKEN,
    });
  }
  return client;
}
