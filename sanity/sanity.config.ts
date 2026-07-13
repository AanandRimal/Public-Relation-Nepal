import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import type { StructureBuilder } from "sanity/structure";
import { schemas } from "./schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

const SINGLETONS = ["siteSettings", "homepage", "aboutPage"];

const structure = (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      ...SINGLETONS.map((type) =>
        S.listItem()
          .title(schemas.find((s) => s.name === type)?.title ?? type)
          .child(S.document().schemaType(type).documentId(type))
      ),
      S.divider(),
      ...S.documentTypeListItems().filter((item) => !SINGLETONS.includes(item.getId() ?? "")),
    ]);

export default defineConfig({
  name: "public-relation-nepal",
  title: "Public Relation Nepal",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [structureTool({ structure })],
  schema: { types: schemas },
});
