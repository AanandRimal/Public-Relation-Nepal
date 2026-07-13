import type { ContentRepository } from "./interfaces/content-repository";
import { mockRepository } from "./repositories/mock-repository";
import { sanityRepository } from "./repositories/sanity-repository";

let repository: ContentRepository | null = null;

export function getContentRepository(): ContentRepository {
  if (repository) return repository;

  const provider = process.env.CMS_PROVIDER ?? "mock";

  switch (provider) {
    case "sanity":
      repository = sanityRepository;
      break;
    case "mock":
    default:
      repository = mockRepository;
      break;
  }

  return repository;
}
