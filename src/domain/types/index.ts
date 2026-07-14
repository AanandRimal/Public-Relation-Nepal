export interface SEO {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export interface ImageAsset {
  url: string;
  alt: string;
  width?: number;
  height?: number;
  blurDataURL?: string;
}

export interface VideoAsset {
  url: string;
  poster?: string;
  title?: string;
  duration?: string;
}

export interface Link {
  label: string;
  href: string;
  external?: boolean;
}

export interface Statistic {
  id: string;
  value: string;
  label: string;
  suffix?: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
  image?: ImageAsset;
}

export interface Client {
  id: string;
  name: string;
  logo?: ImageAsset;
  industry?: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: ImageAsset;
  rating?: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  image?: ImageAsset;
  department: "leadership" | "executive" | "creative" | "operations";
  linkedIn?: string;
  featured?: boolean;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface Value {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon?: string;
  featured?: boolean;
  heroImage?: ImageAsset;
  benefits: { id: string; title: string; description: string }[];
  process: ProcessStep[];
  faqs: FAQ[];
  relatedServiceSlugs?: string[];
  seo: SEO;
}

export type PortfolioCategory =
  | "documentaries"
  | "television-commercials"
  | "advertisements"
  | "ai-advertisements"
  | "corporate-videos"
  | "branding"
  | "graphic-design"
  | "digital-marketing"
  | "web-development"
  | "drone-projects";

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: PortfolioCategory;
  client: string;
  industry: string;
  featured?: boolean;
  heroImage: ImageAsset;
  gallery: ImageAsset[];
  videos?: VideoAsset[];
  challenge: string;
  solution: string;
  creativeProcess: ProcessStep[];
  deliverables: string[];
  results: { label: string; value: string }[];
  testimonial?: Testimonial;
  relatedProjectSlugs?: string[];
  seo: SEO;
  completedAt?: string;
}

export interface Industry {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  heroImage?: ImageAsset;
  expertise: string[];
  relatedServiceSlugs?: string[];
  seo: SEO;
}

export interface BlogAuthor {
  id: string;
  name: string;
  role?: string;
  bio?: string;
  image?: ImageAsset;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage?: ImageAsset;
  author: BlogAuthor;
  category: string;
  tags: string[];
  publishedAt: string;
  readingTime: number;
  featured?: boolean;
  seo: SEO;
}

export interface Resource {
  id: string;
  slug: string;
  title: string;
  type: "case-study" | "download" | "media-kit" | "whitepaper" | "press-release";
  excerpt: string;
  fileUrl?: string;
  coverImage?: ImageAsset;
  publishedAt: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface SiteSettings {
  siteName: string;
  tagline: string;
  description: string;
  logo?: ImageAsset;
  logoLight?: ImageAsset;
  favicon?: string;
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
    address: string;
    mapEmbedUrl?: string;
  };
  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
    twitter?: string;
  };
  navigation: NavigationItem[];
  footerNavigation: NavigationItem[];
  cta: {
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
  seo: SEO;
}

export interface HeroSection {
  eyebrow: string;
  headline: string;
  subheadline: string;
  ctaPrimary: Link;
  ctaSecondary: Link;
  backgroundImage?: ImageAsset;
  backgroundVideo?: string;
  stats?: Statistic[];
}

export interface Homepage {
  hero: HeroSection;
  featuredServiceIds: string[];
  featuredPortfolioIds: string[];
  governmentExperience: {
    title: string;
    description: string;
    projectIds: string[];
  };
  corporateExperience: {
    title: string;
    description: string;
    projectIds: string[];
  };
  creativeShowcase: {
    title: string;
    description: string;
    projectIds: string[];
  };
  aiShowcase: {
    title: string;
    description: string;
    projectIds: string[];
  };
  filmShowcase: {
    title: string;
    description: string;
    projectIds: string[];
  };
  industryIds: string[];
  statistics: Statistic[];
  awardIds: string[];
  clientIds: string[];
  testimonialIds: string[];
  processSteps: ProcessStep[];
  whyChooseUs: { id: string; title: string; description: string }[];
  featuredBlogIds: string[];
  faqs: FAQ[];
  newsletter: {
    title: string;
    description: string;
  };
  seo: SEO;
}

export interface AboutPage {
  overview: {
    title: string;
    content: string;
    image?: ImageAsset;
  };
  story: {
    title: string;
    content: string;
  };
  mission: string;
  vision: string;
  values: Value[];
  timeline: TimelineEvent[];
  csr: {
    title: string;
    content: string;
  };
  culture: {
    title: string;
    content: string;
  };
  careers: {
    title: string;
    content: string;
    ctaLabel: string;
    ctaHref: string;
  };
  seo: SEO;
}

export interface ContactFormType {
  type: "consultation" | "proposal" | "quotation" | "career" | "general";
  title: string;
  description: string;
}
