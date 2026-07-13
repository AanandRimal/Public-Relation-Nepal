import type {
  AboutPage,
  Award,
  BlogPost,
  Client,
  Homepage,
  Industry,
  PortfolioProject,
  Resource,
  Service,
  SiteSettings,
  TeamMember,
  Testimonial,
} from "@/domain/types";

export interface ContentRepository {
  getSettings(): Promise<SiteSettings>;
  getHomepage(): Promise<Homepage>;
  getAbout(): Promise<AboutPage>;
  getServices(): Promise<Service[]>;
  getServiceBySlug(slug: string): Promise<Service | null>;
  getPortfolio(): Promise<PortfolioProject[]>;
  getPortfolioBySlug(slug: string): Promise<PortfolioProject | null>;
  getPortfolioByCategory(category: string): Promise<PortfolioProject[]>;
  getIndustries(): Promise<Industry[]>;
  getIndustryBySlug(slug: string): Promise<Industry | null>;
  getBlogs(): Promise<BlogPost[]>;
  getBlogBySlug(slug: string): Promise<BlogPost | null>;
  getTeam(): Promise<TeamMember[]>;
  getTestimonials(): Promise<Testimonial[]>;
  getClients(): Promise<Client[]>;
  getAwards(): Promise<Award[]>;
  getResources(): Promise<Resource[]>;
  getResourceBySlug(slug: string): Promise<Resource | null>;
}
