import type { SiteSettings } from "@/domain/types";

export const siteSettings: SiteSettings = {
  siteName: "Public Relation Nepal",
  tagline: "Strategic Communications. Creative Excellence. Digital Innovation.",
  description:
    "Public Relation Nepal is South Asia's premier integrated communications agency — delivering public relations, branding, film production, AI advertising, and digital transformation for government, enterprise, and global organizations.",
  contact: {
    email: "info@publicrelationnepal.com",
    phone: "+977-1-XXXXXXX",
    whatsapp: "+977-98XXXXXXXX",
    address: "Kathmandu, Nepal",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.27495865489!2d85.3239605!3d27.7172453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a3078bcf5%3A0xb5137c1bf18be1b0!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
  },
  social: {
    facebook: "https://facebook.com/publicrelationnepal",
    instagram: "https://instagram.com/publicrelationnepal",
    linkedin: "https://linkedin.com/company/publicrelationnepal",
    youtube: "https://youtube.com/@publicrelationnepal",
  },
  navigation: [
    { label: "Home", href: "/" },
    {
      label: "About",
      href: "/about",
      children: [
        { label: "Our Story", href: "/about#story" },
        { label: "Leadership", href: "/about#leadership" },
        { label: "Careers", href: "/about#careers" },
      ],
    },
    {
      label: "Services",
      href: "/services",
      children: [
        { label: "Public Relations", href: "/services/public-relations" },
        { label: "Corporate Branding", href: "/services/corporate-branding" },
        { label: "Digital Marketing", href: "/services/digital-marketing" },
        { label: "Film Production", href: "/services/film-production" },
        { label: "AI Advertising", href: "/services/ai-advertising" },
        { label: "View All Services", href: "/services" },
      ],
    },
    {
      label: "Work",
      href: "/portfolio",
      children: [
        { label: "Government", href: "/portfolio?category=government" },
        { label: "Corporate", href: "/portfolio?category=corporate" },
        { label: "Documentaries", href: "/portfolio?category=documentaries" },
        { label: "TV Commercials", href: "/portfolio?category=television-commercials" },
      ],
    },
    { label: "Industries", href: "/industries" },
    { label: "Insights", href: "/blog" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
  footerNavigation: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Industries", href: "/industries" },
    { label: "Blog", href: "/blog" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
  cta: {
    primaryLabel: "Book Consultation",
    primaryHref: "/contact?type=consultation",
    secondaryLabel: "View Our Work",
    secondaryHref: "/portfolio",
  },
  seo: {
    title: "Best PR Agency in Nepal | Branding & Digital Marketing — Public Relation Nepal",
    description:
      "Public Relation Nepal is Nepal's top PR agency for branding, public relations, and digital marketing — trusted by government, enterprise, and international organizations across South Asia.",
    keywords: [
      "best PR agency in Nepal",
      "top PR agency in Nepal",
      "PR agency Nepal",
      "branding agency Nepal",
      "branding and marketing company in Nepal",
      "best digital marketing agency in Nepal",
      "digital marketing company Nepal",
      "public relations Kathmandu",
    ],
  },
};
