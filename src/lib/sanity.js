import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "8d1i38xm",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});