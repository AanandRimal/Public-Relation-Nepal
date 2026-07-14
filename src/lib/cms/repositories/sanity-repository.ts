import type {
  AboutPage,
  Award,
  BlogPost,
  Client,
  Homepage,
  HeroSection,
  Industry,
  PortfolioProject,
  Resource,
  Service,
  SiteSettings,
  TeamMember,
  Testimonial,
} from "@/domain/types";
import type { ContentRepository } from "../interfaces/content-repository";
import { getSanityClient } from "@/lib/sanity/client";
import { toImageAsset, type SanityImage } from "@/lib/sanity/image";
import { mockRepository } from "./mock-repository";

/**
 * Sanity CMS repository implementation.
 * When CMS_PROVIDER=sanity, this repository fetches from Sanity.
 * Falls back to mock data whenever Sanity isn't configured, a document
 * hasn't been written in Studio yet, a fetch fails, or a partially-filled
 * document is missing a field the page needs — so the site never crashes
 * or shows a blank page while content is still being written in Studio.
 */
function isSanityConfigured(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    process.env.NEXT_PUBLIC_SANITY_DATASET
  );
}

/** Recursively fills any null/undefined/empty leaf in `value` with the matching leaf from `mock`. */
function withDefaults<T>(mock: T, value: T): T {
  if (value === null || value === undefined) return mock;
  if (Array.isArray(mock)) {
    return ((Array.isArray(value) && value.length ? value : mock)) as T;
  }
  if (typeof mock !== "object" || mock === null) {
    return value;
  }
  const result: Record<string, unknown> = { ...(mock as Record<string, unknown>) };
  for (const key of Object.keys(mock as Record<string, unknown>)) {
    const mockValue = (mock as Record<string, unknown>)[key];
    const rawValue = (value as Record<string, unknown>)[key];
    result[key] = rawValue === undefined || rawValue === null ? mockValue : withDefaults(mockValue, rawValue);
  }
  return result as T;
}

/** For singleton documents: merges Sanity's result over mock defaults; falls back entirely on error or no document. */
async function fetchSingleton<T>(fetchAndMap: () => Promise<T | null>, mock: () => Promise<T>): Promise<T> {
  const mockValue = await mock();
  try {
    const result = await fetchAndMap();
    return result ? withDefaults(mockValue, result) : mockValue;
  } catch {
    return mockValue;
  }
}

/** For collections: falls back to mock if Sanity has no documents yet, or the fetch throws. */
async function fetchList<T>(fetchAndMap: () => Promise<T[]>, mock: () => Promise<T[]>): Promise<T[]> {
  try {
    const result = await fetchAndMap();
    return result.length ? result : await mock();
  } catch {
    return mock();
  }
}

/** For single-item lookups (by slug, etc.): falls back to mock's lookup if not found in Sanity or the fetch throws. */
async function fetchOne<T>(fetchAndMap: () => Promise<T | null>, mock: () => Promise<T | null>): Promise<T | null> {
  try {
    const result = await fetchAndMap();
    return result ?? (await mock());
  } catch {
    return mock();
  }
}

type RawTestimonial = Omit<Testimonial, "image"> & { image?: SanityImage };
type RawService = Omit<Service, "heroImage"> & { heroImage?: SanityImage };
type RawPortfolioProject = Omit<PortfolioProject, "heroImage" | "gallery" | "testimonial"> & {
  heroImage?: SanityImage;
  gallery?: SanityImage[];
  testimonial?: RawTestimonial | null;
};
type RawBlogPost = Omit<BlogPost, "coverImage" | "author"> & {
  coverImage?: SanityImage;
  author: Omit<BlogPost["author"], "image"> & { image?: SanityImage };
};
type RawTeamMember = Omit<TeamMember, "image"> & { image?: SanityImage };
type RawIndustry = Omit<Industry, "heroImage"> & { heroImage?: SanityImage };
type RawClient = Omit<Client, "logo"> & { logo?: SanityImage };
type RawAward = Omit<Award, "image"> & { image?: SanityImage };
type RawResource = Omit<Resource, "coverImage"> & { coverImage?: SanityImage };
type RawSiteSettings = Omit<SiteSettings, "logo" | "logoLight"> & {
  logo?: SanityImage;
  logoLight?: SanityImage;
};
type RawHomepage = Omit<Homepage, "hero"> & {
  hero: Omit<HeroSection, "backgroundImage"> & { backgroundImage?: SanityImage };
};
type RawAboutPage = Omit<AboutPage, "overview"> & {
  overview: Omit<AboutPage["overview"], "image"> & { image?: SanityImage };
};

const mapTestimonial = (raw: RawTestimonial): Testimonial => ({
  ...raw,
  image: toImageAsset(raw.image),
});

/** GROQ projects an unset array field as null, not [] — this normalizes it back for any array field a page maps over directly. */
const arr = <T,>(value: T[] | null | undefined): T[] => value ?? [];

const mapService = (raw: RawService): Service => ({
  ...raw,
  heroImage: toImageAsset(raw.heroImage),
  benefits: arr(raw.benefits),
  process: arr(raw.process),
  faqs: arr(raw.faqs),
  relatedServiceSlugs: raw.relatedServiceSlugs ?? undefined,
});

const mapPortfolioProject = (raw: RawPortfolioProject): PortfolioProject => ({
  ...raw,
  heroImage: toImageAsset(raw.heroImage) ?? { url: "", alt: raw.title },
  gallery: (raw.gallery ?? []).map((img) => toImageAsset(img)).filter((img) => !!img),
  creativeProcess: arr(raw.creativeProcess),
  deliverables: arr(raw.deliverables),
  results: arr(raw.results),
  relatedProjectSlugs: raw.relatedProjectSlugs ?? undefined,
  testimonial: raw.testimonial ? mapTestimonial(raw.testimonial) : undefined,
});

const mapBlogPost = (raw: RawBlogPost): BlogPost => ({
  ...raw,
  coverImage: toImageAsset(raw.coverImage),
  tags: arr(raw.tags),
  author: { ...raw.author, id: "author", image: toImageAsset(raw.author.image) },
});

const mapTeamMember = (raw: RawTeamMember): TeamMember => ({
  ...raw,
  image: toImageAsset(raw.image),
});

const mapIndustry = (raw: RawIndustry): Industry => ({
  ...raw,
  heroImage: toImageAsset(raw.heroImage),
  expertise: arr(raw.expertise),
  relatedServiceSlugs: raw.relatedServiceSlugs ?? undefined,
});

const mapClient = (raw: RawClient): Client => ({
  ...raw,
  logo: toImageAsset(raw.logo),
});

const mapAward = (raw: RawAward): Award => ({
  ...raw,
  image: toImageAsset(raw.image),
});

const mapResource = (raw: RawResource): Resource => ({
  ...raw,
  coverImage: toImageAsset(raw.coverImage),
});

const mapSiteSettings = (raw: RawSiteSettings): SiteSettings => ({
  ...raw,
  logo: toImageAsset(raw.logo),
  logoLight: toImageAsset(raw.logoLight),
});

const mapHomepage = (raw: RawHomepage): Homepage => ({
  ...raw,
  hero: { ...raw.hero, backgroundImage: toImageAsset(raw.hero.backgroundImage) },
});

const mapAboutPage = (raw: RawAboutPage): AboutPage => ({
  ...raw,
  overview: { ...raw.overview, image: toImageAsset(raw.overview.image) },
});

const nestedIdFields = `"id": _key`;
const showcaseProjection = `{title, description, "projectIds": projects[]->_id}`;

export const sanityRepository: ContentRepository = {
  async getSettings() {
    if (!isSanityConfigured()) return mockRepository.getSettings();
    return fetchSingleton(
      async () => {
        const raw = await getSanityClient().fetch<RawSiteSettings | null>(`*[_type == "siteSettings"][0]{
          siteName, tagline, description, logo, logoLight, favicon,
          contact, social, navigation, footerNavigation, cta, seo
        }`);
        return raw ? mapSiteSettings(raw) : null;
      },
      () => mockRepository.getSettings()
    );
  },

  async getHomepage() {
    if (!isSanityConfigured()) return mockRepository.getHomepage();
    return fetchSingleton(
      async () => {
        const raw = await getSanityClient().fetch<RawHomepage | null>(`*[_type == "homepage"][0]{
          hero{eyebrow, headline, subheadline, ctaPrimary, ctaSecondary, backgroundImage, backgroundVideo, "stats": stats[]{${nestedIdFields}, value, label, suffix}},
          "featuredServiceIds": featuredServices[]->_id,
          "featuredPortfolioIds": featuredPortfolio[]->_id,
          governmentExperience${showcaseProjection},
          corporateExperience${showcaseProjection},
          creativeShowcase${showcaseProjection},
          aiShowcase${showcaseProjection},
          filmShowcase${showcaseProjection},
          "industryIds": industries[]->_id,
          "statistics": statistics[]{${nestedIdFields}, value, label, suffix},
          "awardIds": awards[]->_id,
          "clientIds": clients[]->_id,
          "testimonialIds": testimonials[]->_id,
          "processSteps": processSteps[]{${nestedIdFields}, title, description},
          "whyChooseUs": whyChooseUs[]{${nestedIdFields}, title, description},
          "featuredBlogIds": featuredBlogs[]->_id,
          "faqs": faqs[]{${nestedIdFields}, question, answer},
          newsletter, seo
        }`);
        return raw ? mapHomepage(raw) : null;
      },
      () => mockRepository.getHomepage()
    );
  },

  async getAbout() {
    if (!isSanityConfigured()) return mockRepository.getAbout();
    return fetchSingleton(
      async () => {
        const raw = await getSanityClient().fetch<RawAboutPage | null>(`*[_type == "aboutPage"][0]{
          overview{title, content, image},
          story{title, content},
          mission, vision,
          "values": values[]{${nestedIdFields}, title, description},
          "timeline": timeline[]{${nestedIdFields}, year, title, description},
          csr{title, content},
          culture{title, content},
          careers{title, content, ctaLabel, ctaHref},
          seo
        }`);
        return raw ? mapAboutPage(raw) : null;
      },
      () => mockRepository.getAbout()
    );
  },

  async getServices() {
    if (!isSanityConfigured()) return mockRepository.getServices();
    return fetchList(
      async () => (await getSanityClient().fetch<RawService[]>(serviceQuery())).map(mapService),
      () => mockRepository.getServices()
    );
  },

  async getServiceBySlug(slug: string) {
    if (!isSanityConfigured()) return mockRepository.getServiceBySlug(slug);
    return fetchOne(
      async () => {
        const raw = await getSanityClient().fetch<RawService | null>(serviceQuery("slug.current == $slug"), { slug });
        return raw ? mapService(raw) : null;
      },
      () => mockRepository.getServiceBySlug(slug)
    );
  },

  async getPortfolio() {
    if (!isSanityConfigured()) return mockRepository.getPortfolio();
    return fetchList(
      async () => (await getSanityClient().fetch<RawPortfolioProject[]>(portfolioQuery())).map(mapPortfolioProject),
      () => mockRepository.getPortfolio()
    );
  },

  async getPortfolioBySlug(slug: string) {
    if (!isSanityConfigured()) return mockRepository.getPortfolioBySlug(slug);
    return fetchOne(
      async () => {
        const raw = await getSanityClient().fetch<RawPortfolioProject | null>(
          portfolioQuery("slug.current == $slug"),
          { slug }
        );
        return raw ? mapPortfolioProject(raw) : null;
      },
      () => mockRepository.getPortfolioBySlug(slug)
    );
  },

  async getPortfolioByCategory(category: string) {
    if (!isSanityConfigured()) return mockRepository.getPortfolioByCategory(category);
    return fetchList(
      async () =>
        (
          await getSanityClient().fetch<RawPortfolioProject[]>(portfolioQuery("category == $category"), { category })
        ).map(mapPortfolioProject),
      () => mockRepository.getPortfolioByCategory(category)
    );
  },

  async getIndustries() {
    if (!isSanityConfigured()) return mockRepository.getIndustries();
    return fetchList(
      async () =>
        (
          await getSanityClient().fetch<RawIndustry[]>(`*[_type == "industry"]{
            "id": _id, "slug": slug.current, title, shortDescription, description,
            heroImage, expertise, relatedServiceSlugs, seo
          }`)
        ).map(mapIndustry),
      () => mockRepository.getIndustries()
    );
  },

  async getIndustryBySlug(slug: string) {
    if (!isSanityConfigured()) return mockRepository.getIndustryBySlug(slug);
    return fetchOne(
      async () => {
        const raw = await getSanityClient().fetch<RawIndustry | null>(
          `*[_type == "industry" && slug.current == $slug][0]{
            "id": _id, "slug": slug.current, title, shortDescription, description,
            heroImage, expertise, relatedServiceSlugs, seo
          }`,
          { slug }
        );
        return raw ? mapIndustry(raw) : null;
      },
      () => mockRepository.getIndustryBySlug(slug)
    );
  },

  async getBlogs() {
    if (!isSanityConfigured()) return mockRepository.getBlogs();
    return fetchList(
      async () => (await getSanityClient().fetch<RawBlogPost[]>(blogQuery())).map(mapBlogPost),
      () => mockRepository.getBlogs()
    );
  },

  async getBlogBySlug(slug: string) {
    if (!isSanityConfigured()) return mockRepository.getBlogBySlug(slug);
    return fetchOne(
      async () => {
        const raw = await getSanityClient().fetch<RawBlogPost | null>(blogQuery("slug.current == $slug"), { slug });
        return raw ? mapBlogPost(raw) : null;
      },
      () => mockRepository.getBlogBySlug(slug)
    );
  },

  async getTeam() {
    if (!isSanityConfigured()) return mockRepository.getTeam();
    return fetchList(
      async () =>
        (
          await getSanityClient().fetch<RawTeamMember[]>(`*[_type == "teamMember"]{
            "id": _id, name, role, bio, image, department, linkedIn, featured
          }`)
        ).map(mapTeamMember),
      () => mockRepository.getTeam()
    );
  },

  async getTestimonials() {
    if (!isSanityConfigured()) return mockRepository.getTestimonials();
    return fetchList(
      async () =>
        (
          await getSanityClient().fetch<RawTestimonial[]>(`*[_type == "testimonial"]{
            "id": _id, quote, author, role, company, image, rating
          }`)
        ).map(mapTestimonial),
      () => mockRepository.getTestimonials()
    );
  },

  async getClients() {
    if (!isSanityConfigured()) return mockRepository.getClients();
    return fetchList(
      async () =>
        (
          await getSanityClient().fetch<RawClient[]>(`*[_type == "client"]{
            "id": _id, name, logo, industry, featured
          }`)
        ).map(mapClient),
      () => mockRepository.getClients()
    );
  },

  async getAwards() {
    if (!isSanityConfigured()) return mockRepository.getAwards();
    return fetchList(
      async () =>
        (
          await getSanityClient().fetch<RawAward[]>(`*[_type == "award"]{
            "id": _id, title, organization, year, image
          }`)
        ).map(mapAward),
      () => mockRepository.getAwards()
    );
  },

  async getResources() {
    if (!isSanityConfigured()) return mockRepository.getResources();
    return fetchList(
      async () => (await getSanityClient().fetch<RawResource[]>(resourceQuery())).map(mapResource),
      () => mockRepository.getResources()
    );
  },

  async getResourceBySlug(slug: string) {
    if (!isSanityConfigured()) return mockRepository.getResourceBySlug(slug);
    return fetchOne(
      async () => {
        const raw = await getSanityClient().fetch<RawResource | null>(resourceQuery("slug.current == $slug"), { slug });
        return raw ? mapResource(raw) : null;
      },
      () => mockRepository.getResourceBySlug(slug)
    );
  },
};

function serviceQuery(filter?: string) {
  const match = filter ? ` && ${filter}` : "";
  const suffix = filter ? "[0]" : "";
  return `*[_type == "service"${match}]${suffix}{
    "id": _id, "slug": slug.current, title, shortDescription, description, icon, featured,
    heroImage,
    "benefits": benefits[]{${nestedIdFields}, title, description},
    "process": process[]{${nestedIdFields}, title, description},
    "faqs": faqs[]{${nestedIdFields}, question, answer},
    relatedServiceSlugs, seo
  }`;
}

function portfolioQuery(filter?: string) {
  const match = filter ? ` && ${filter}` : "";
  const suffix = filter ? "[0]" : "";
  return `*[_type == "portfolioProject"${match}]${suffix}{
    "id": _id, "slug": slug.current, title, excerpt, category, client, industry, featured,
    heroImage, gallery, videos, challenge, solution,
    "creativeProcess": creativeProcess[]{${nestedIdFields}, title, description},
    deliverables, results,
    "testimonial": testimonial->{"id": _id, quote, author, role, company, image, rating},
    relatedProjectSlugs, completedAt, seo
  }`;
}

function blogQuery(filter?: string) {
  const match = filter ? ` && ${filter}` : "";
  const suffix = filter ? "[0]" : "";
  return `*[_type == "blogPost"${match}]${suffix}{
    "id": _id, "slug": slug.current, title, excerpt, content, coverImage,
    author, category, tags, publishedAt, readingTime, featured, seo
  }`;
}

function resourceQuery(filter?: string) {
  const match = filter ? ` && ${filter}` : "";
  const suffix = filter ? "[0]" : "";
  return `*[_type == "resource"${match}]${suffix}{
    "id": _id, "slug": slug.current, title, type, excerpt, fileUrl, coverImage, publishedAt
  }`;
}
