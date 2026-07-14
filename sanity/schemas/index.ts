/**
 * Sanity CMS Schema Definitions
 * These schemas define the content models for Sanity Studio.
 * The frontend never imports these directly — only the sanity repository uses them.
 *
 * Field names here map 1:1 to src/domain/types/index.ts. If you add a field
 * to a domain type, add it here too, then project it in sanity-repository.ts.
 */

const seoFields = [
  { name: "title", title: "SEO Title", type: "string" },
  { name: "description", title: "SEO Description", type: "text", rows: 3 },
  { name: "keywords", title: "Keywords", type: "array", of: [{ type: "string" }] },
  { name: "ogImage", title: "OG Image", type: "image" },
  { name: "noIndex", title: "No Index", type: "boolean", initialValue: false },
];

const imageField = (name = "image", title = "Image") => ({
  name,
  title,
  type: "image",
  options: { hotspot: true },
  fields: [{ name: "alt", title: "Alt Text", type: "string" }],
});

const linkFields = [
  { name: "label", title: "Label", type: "string" },
  { name: "href", title: "URL", type: "string" },
];

const processStepFields = [
  { name: "title", title: "Title", type: "string" },
  { name: "description", title: "Description", type: "text" },
];

export const siteSettings = {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    { name: "siteName", title: "Site Name", type: "string" },
    { name: "tagline", title: "Tagline", type: "string" },
    { name: "description", title: "Description", type: "text" },
    imageField("logo", "Logo"),
    imageField("logoLight", "Logo (light background)"),
    { name: "favicon", title: "Favicon URL", type: "string" },
    {
      name: "contact",
      title: "Contact",
      type: "object",
      fields: [
        { name: "email", type: "string" },
        { name: "phone", type: "string" },
        { name: "whatsapp", type: "string" },
        { name: "address", type: "string" },
        { name: "mapEmbedUrl", type: "url" },
      ],
    },
    {
      name: "social",
      title: "Social Links",
      type: "object",
      fields: [
        { name: "facebook", type: "url" },
        { name: "instagram", type: "url" },
        { name: "linkedin", type: "url" },
        { name: "youtube", type: "url" },
        { name: "twitter", type: "url" },
      ],
    },
    {
      name: "navigation",
      title: "Main Navigation",
      type: "array",
      of: [{
        type: "object",
        fields: [
          ...linkFields,
          {
            name: "children",
            title: "Children",
            type: "array",
            of: [{ type: "object", fields: linkFields }],
          },
        ],
      }],
    },
    {
      name: "footerNavigation",
      title: "Footer Navigation",
      type: "array",
      of: [{ type: "object", fields: linkFields }],
    },
    {
      name: "cta",
      title: "Header CTAs",
      type: "object",
      fields: [
        { name: "primaryLabel", type: "string" },
        { name: "primaryHref", type: "string" },
        { name: "secondaryLabel", type: "string" },
        { name: "secondaryHref", type: "string" },
      ],
    },
    { name: "seo", title: "SEO", type: "object", fields: seoFields },
  ],
};

export const service = {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "shortDescription", title: "Short Description", type: "text" },
    { name: "description", title: "Description", type: "text" },
    { name: "icon", title: "Icon (lucide name)", type: "string" },
    { name: "featured", title: "Featured", type: "boolean" },
    imageField("heroImage", "Hero Image"),
    {
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [{ type: "object", fields: [{ name: "title", type: "string" }, { name: "description", type: "text" }] }],
    },
    {
      name: "process",
      title: "Process Steps",
      type: "array",
      of: [{ type: "object", fields: processStepFields }],
    },
    {
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "question", type: "string" },
          { name: "answer", type: "text" },
        ],
      }],
    },
    {
      name: "relatedServiceSlugs",
      title: "Related Service Slugs",
      type: "array",
      of: [{ type: "string" }],
    },
    { name: "seo", title: "SEO", type: "object", fields: seoFields },
  ],
};

export const portfolioProject = {
  name: "portfolioProject",
  title: "Portfolio Project",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "excerpt", title: "Excerpt", type: "text" },
    {
      name: "category",
      title: "Category",
      type: "string",
      description: "What kind of work this is — not who the client is (see Industry below).",
      options: {
        list: [
          "documentaries", "television-commercials", "advertisements", "ai-advertisements",
          "corporate-videos", "branding", "graphic-design", "digital-marketing",
          "web-development", "drone-projects",
        ],
      },
    },
    { name: "client", title: "Client", type: "string" },
    {
      name: "industry",
      title: "Industry",
      type: "string",
      description: "The client's sector — used as a filter on the portfolio page, so pick from the list rather than typing to keep values consistent.",
      options: {
        list: [
          "Government", "Education", "Healthcare", "Hospitality", "Tourism",
          "Manufacturing", "Technology", "Finance", "Banking", "Retail",
          "Construction", "Real Estate", "NGOs",
        ],
      },
    },
    { name: "featured", title: "Featured", type: "boolean" },
    imageField("heroImage", "Hero Image"),
    { name: "gallery", title: "Gallery", type: "array", of: [imageField()] },
    {
      name: "videos",
      title: "Videos",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "url", title: "URL", type: "url" },
          { name: "poster", title: "Poster URL", type: "string" },
          { name: "title", title: "Title", type: "string" },
          { name: "duration", title: "Duration", type: "string" },
        ],
      }],
    },
    { name: "challenge", title: "Challenge", type: "text" },
    { name: "solution", title: "Solution", type: "text" },
    {
      name: "creativeProcess",
      title: "Creative Process",
      type: "array",
      of: [{ type: "object", fields: processStepFields }],
    },
    { name: "deliverables", title: "Deliverables", type: "array", of: [{ type: "string" }] },
    {
      name: "results",
      title: "Results",
      type: "array",
      of: [{ type: "object", fields: [{ name: "label", type: "string" }, { name: "value", type: "string" }] }],
    },
    { name: "testimonial", title: "Testimonial", type: "reference", to: [{ type: "testimonial" }] },
    { name: "relatedProjectSlugs", title: "Related Project Slugs", type: "array", of: [{ type: "string" }] },
    { name: "completedAt", title: "Completed Date", type: "date" },
    { name: "seo", title: "SEO", type: "object", fields: seoFields },
  ],
};

export const blogPost = {
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "excerpt", title: "Excerpt", type: "text" },
    { name: "content", title: "Content", type: "text", rows: 20 },
    imageField("coverImage", "Cover Image"),
    {
      name: "author",
      title: "Author",
      type: "object",
      fields: [
        { name: "name", title: "Name", type: "string" },
        { name: "role", title: "Role", type: "string" },
        { name: "bio", title: "Bio", type: "text" },
        imageField("image", "Photo"),
      ],
    },
    { name: "category", title: "Category", type: "string" },
    { name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] },
    { name: "publishedAt", title: "Published At", type: "datetime" },
    { name: "readingTime", title: "Reading Time (minutes)", type: "number" },
    { name: "featured", title: "Featured", type: "boolean" },
    { name: "seo", title: "SEO", type: "object", fields: seoFields },
  ],
};

export const teamMember = {
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "role", title: "Role", type: "string" },
    { name: "bio", title: "Bio", type: "text" },
    imageField(),
    {
      name: "department",
      title: "Department",
      type: "string",
      options: { list: ["leadership", "executive", "creative", "operations"] },
    },
    { name: "linkedIn", title: "LinkedIn URL", type: "url" },
    { name: "featured", title: "Featured", type: "boolean" },
  ],
};

export const industry = {
  name: "industry",
  title: "Industry",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "shortDescription", title: "Short Description", type: "text" },
    { name: "description", title: "Description", type: "text" },
    imageField("heroImage", "Hero Image"),
    { name: "expertise", title: "Expertise", type: "array", of: [{ type: "string" }] },
    { name: "relatedServiceSlugs", title: "Related Service Slugs", type: "array", of: [{ type: "string" }] },
    { name: "seo", title: "SEO", type: "object", fields: seoFields },
  ],
};

export const testimonial = {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    { name: "quote", title: "Quote", type: "text" },
    { name: "author", title: "Author", type: "string" },
    { name: "role", title: "Role", type: "string" },
    { name: "company", title: "Company", type: "string" },
    imageField(),
    { name: "rating", title: "Rating (1-5)", type: "number", validation: (Rule: { min: (n: number) => { max: (n: number) => unknown } }) => Rule.min(1).max(5) },
  ],
};

export const client = {
  name: "client",
  title: "Client",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    imageField("logo", "Logo"),
    { name: "industry", title: "Industry", type: "string" },
    { name: "featured", title: "Featured", type: "boolean" },
  ],
};

export const award = {
  name: "award",
  title: "Award",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "organization", title: "Organization", type: "string" },
    { name: "year", title: "Year", type: "string" },
    imageField(),
  ],
};

export const resource = {
  name: "resource",
  title: "Resource",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: { list: ["case-study", "download", "media-kit", "whitepaper", "press-release"] },
    },
    { name: "excerpt", title: "Excerpt", type: "text" },
    { name: "fileUrl", title: "File URL", type: "url" },
    imageField("coverImage", "Cover Image"),
    { name: "publishedAt", title: "Published At", type: "datetime" },
  ],
};

const showcaseFields = [
  { name: "title", title: "Title", type: "string" },
  { name: "description", title: "Description", type: "text" },
  { name: "projects", title: "Projects", type: "array", of: [{ type: "reference", to: [{ type: "portfolioProject" }] }] },
];

const statFields = [
  { name: "value", title: "Value", type: "string" },
  { name: "label", title: "Label", type: "string" },
  { name: "suffix", title: "Suffix", type: "string" },
];

export const homepage = {
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    {
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        { name: "headline", title: "Headline", type: "string" },
        { name: "subheadline", title: "Subheadline", type: "text" },
        { name: "ctaPrimary", title: "Primary CTA", type: "object", fields: linkFields },
        { name: "ctaSecondary", title: "Secondary CTA", type: "object", fields: linkFields },
        imageField("backgroundImage", "Background Image"),
        { name: "backgroundVideo", title: "Background Video URL", type: "url" },
        { name: "stats", title: "Stats", type: "array", of: [{ type: "object", fields: statFields }] },
      ],
    },
    { name: "featuredServices", title: "Featured Services", type: "array", of: [{ type: "reference", to: [{ type: "service" }] }] },
    { name: "featuredPortfolio", title: "Featured Portfolio", type: "array", of: [{ type: "reference", to: [{ type: "portfolioProject" }] }] },
    { name: "governmentExperience", title: "Government Experience", type: "object", fields: showcaseFields },
    { name: "corporateExperience", title: "Corporate Experience", type: "object", fields: showcaseFields },
    { name: "creativeShowcase", title: "Creative Showcase", type: "object", fields: showcaseFields },
    { name: "aiShowcase", title: "AI Showcase", type: "object", fields: showcaseFields },
    { name: "filmShowcase", title: "Film Showcase", type: "object", fields: showcaseFields },
    { name: "industries", title: "Industries", type: "array", of: [{ type: "reference", to: [{ type: "industry" }] }] },
    { name: "statistics", title: "Statistics", type: "array", of: [{ type: "object", fields: statFields }] },
    { name: "awards", title: "Awards", type: "array", of: [{ type: "reference", to: [{ type: "award" }] }] },
    { name: "clients", title: "Clients", type: "array", of: [{ type: "reference", to: [{ type: "client" }] }] },
    { name: "testimonials", title: "Testimonials", type: "array", of: [{ type: "reference", to: [{ type: "testimonial" }] }] },
    { name: "processSteps", title: "Process Steps", type: "array", of: [{ type: "object", fields: processStepFields }] },
    {
      name: "whyChooseUs",
      title: "Why Choose Us",
      type: "array",
      of: [{ type: "object", fields: [{ name: "title", type: "string" }, { name: "description", type: "text" }] }],
    },
    { name: "featuredBlogs", title: "Featured Blog Posts", type: "array", of: [{ type: "reference", to: [{ type: "blogPost" }] }] },
    {
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [{ type: "object", fields: [{ name: "question", type: "string" }, { name: "answer", type: "text" }] }],
    },
    {
      name: "newsletter",
      title: "Newsletter",
      type: "object",
      fields: [{ name: "title", type: "string" }, { name: "description", type: "text" }],
    },
    { name: "seo", title: "SEO", type: "object", fields: seoFields },
  ],
};

export const aboutPage = {
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    {
      name: "overview",
      title: "Overview",
      type: "object",
      fields: [{ name: "title", type: "string" }, { name: "content", type: "text" }, imageField()],
    },
    {
      name: "story",
      title: "Story",
      type: "object",
      fields: [{ name: "title", type: "string" }, { name: "content", type: "text" }],
    },
    { name: "mission", title: "Mission", type: "text" },
    { name: "vision", title: "Vision", type: "text" },
    {
      name: "values",
      title: "Values",
      type: "array",
      of: [{ type: "object", fields: [{ name: "title", type: "string" }, { name: "description", type: "text" }] }],
    },
    {
      name: "timeline",
      title: "Timeline",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "year", type: "string" },
          { name: "title", type: "string" },
          { name: "description", type: "text" },
        ],
      }],
    },
    {
      name: "csr",
      title: "CSR",
      type: "object",
      fields: [{ name: "title", type: "string" }, { name: "content", type: "text" }],
    },
    {
      name: "culture",
      title: "Culture",
      type: "object",
      fields: [{ name: "title", type: "string" }, { name: "content", type: "text" }],
    },
    {
      name: "careers",
      title: "Careers",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        { name: "content", type: "text" },
        { name: "ctaLabel", type: "string" },
        { name: "ctaHref", type: "string" },
      ],
    },
    { name: "seo", title: "SEO", type: "object", fields: seoFields },
  ],
};

export const schemas = [
  siteSettings,
  homepage,
  aboutPage,
  service,
  portfolioProject,
  blogPost,
  teamMember,
  industry,
  testimonial,
  client,
  award,
  resource,
];
