import type { Metadata } from "next";
import type { SEO, SiteSettings } from "@/domain/types";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://publicrelationnepal.com";

export function buildMetadata(seo: SEO, settings?: SiteSettings): Metadata {
  const title = seo.title || settings?.seo.title || settings?.siteName || "Public Relation Nepal";
  const description = seo.description || settings?.seo.description || settings?.description || "";
  const canonical = seo.canonicalUrl ?? SITE_URL;
  const ogImage = seo.ogImage ?? `${SITE_URL}/og-default.jpg`;

  return {
    title,
    description,
    keywords: seo.keywords ?? settings?.seo.keywords,
    robots: seo.noIndex ? { index: false, follow: false } : { index: true, follow: true },
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: settings?.siteName ?? "Public Relation Nepal",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function organizationSchema(settings: SiteSettings) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: settings.siteName,
    description: settings.description,
    url: SITE_URL,
    ...(settings.logo ? { logo: settings.logo.url } : {}),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: settings.contact.phone,
      email: settings.contact.email,
      contactType: "customer service",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: settings.contact.address,
      addressCountry: "NP",
    },
    sameAs: Object.values(settings.social).filter(Boolean),
  };
}

export function localBusinessSchema(settings: SiteSettings) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: settings.siteName,
    description: settings.description,
    url: SITE_URL,
    telephone: settings.contact.phone,
    email: settings.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: settings.contact.address,
      addressCountry: "NP",
    },
    priceRange: "$$$$",
    areaServed: ["Nepal", "South Asia"],
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleSchema(post: {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  author: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    url: post.url,
    datePublished: post.publishedAt,
    author: { "@type": "Person", name: post.author },
    image: post.image,
    publisher: {
      "@type": "Organization",
      name: "Public Relation Nepal",
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function serviceSchema(service: {
  title: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: service.url,
    provider: {
      "@type": "Organization",
      name: "Public Relation Nepal",
    },
  };
}

export function creativeWorkSchema(project: {
  title: string;
  description: string;
  url: string;
  client: string;
  dateCreated?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: project.url,
    creator: {
      "@type": "Organization",
      name: "Public Relation Nepal",
    },
    client: project.client,
    dateCreated: project.dateCreated,
    image: project.image,
  };
}

export function jsonLd(data: Record<string, unknown>) {
  return { __html: JSON.stringify(data) };
}

export { SITE_URL };
