import type { Industry, TeamMember, Testimonial, Client, Award, BlogPost, Resource, Homepage, AboutPage } from "@/domain/types";

export const industries: Industry[] = [
  {
    id: "government",
    slug: "government",
    title: "Government",
    shortDescription: "Trusted communications partner for government agencies, municipalities, and public sector organizations.",
    description: "Public Relation Nepal has extensive experience delivering public awareness campaigns, documentary productions, crisis communications, and digital transformation for government bodies at local, provincial, and national levels. We understand the unique requirements of public sector communication — transparency, accessibility, multilingual reach, and stakeholder trust.",
    expertise: ["Public awareness campaigns", "Municipality documentaries", "Policy communication", "Crisis management", "Citizen engagement", "Digital government portals"],
    relatedServiceSlugs: ["government-communication-campaigns", "documentary-production", "public-relations"],
    seo: { title: "Government Communications | Public Relation Nepal", description: "Premier government communications agency in Nepal." },
  },
  {
    id: "education",
    slug: "education",
    title: "Education",
    shortDescription: "Elevating educational institutions through premium branding, profile videos, and digital marketing.",
    description: "We help universities, colleges, and schools build compelling brand narratives that attract students, faculty, and international partnerships. Our education portfolio includes institutional profile films, enrollment campaigns, and comprehensive brand identity systems.",
    expertise: ["Institutional profile videos", "Enrollment marketing", "Brand identity", "Digital presence", "Event coverage"],
    relatedServiceSlugs: ["corporate-profile-videos", "corporate-branding", "digital-marketing"],
    seo: { title: "Education Sector Marketing | Public Relation Nepal", description: "Marketing and branding for educational institutions." },
  },
  {
    id: "healthcare",
    slug: "healthcare",
    title: "Healthcare",
    shortDescription: "Sensitive, compliant communications for healthcare organizations and medical institutions.",
    description: "Healthcare communication requires precision, empathy, and regulatory awareness. We deliver patient education campaigns, hospital branding, medical conference coverage, and public health awareness programs.",
    expertise: ["Public health campaigns", "Hospital branding", "Patient education", "Medical conferences"],
    relatedServiceSlugs: ["public-relations", "content-marketing", "video-editing"],
    seo: { title: "Healthcare Communications | Public Relation Nepal", description: "Healthcare marketing and communications agency." },
  },
  {
    id: "hospitality",
    slug: "hospitality",
    title: "Hospitality",
    shortDescription: "Luxury branding and visual storytelling for hotels, resorts, and hospitality brands.",
    description: "From boutique hotels to international resort chains, we create immersive brand experiences through cinematic videography, premium photography, and integrated marketing campaigns.",
    expertise: ["Hotel branding", "Cinematic videography", "Social media marketing", "Event branding"],
    relatedServiceSlugs: ["commercial-videography", "commercial-photography", "social-media-marketing"],
    seo: { title: "Hospitality Marketing | Public Relation Nepal", description: "Premium hospitality branding and marketing." },
  },
  {
    id: "tourism",
    slug: "tourism",
    title: "Tourism",
    shortDescription: "Destination marketing and tourism promotion with cinematic visual storytelling.",
    description: "Nepal's tourism sector demands world-class creative execution. We produce destination films, tourism campaigns, drone aerial content, and digital marketing programs that inspire travel and drive bookings.",
    expertise: ["Destination films", "Tourism campaigns", "Drone cinematography", "Digital marketing"],
    relatedServiceSlugs: ["film-production", "drone-videography", "digital-marketing"],
    seo: { title: "Tourism Marketing Nepal | Public Relation Nepal", description: "Destination marketing and tourism promotion." },
  },
  {
    id: "manufacturing",
    slug: "manufacturing",
    title: "Manufacturing",
    shortDescription: "Industrial branding and B2B communications for manufacturing enterprises.",
    description: "We help manufacturing companies communicate quality, innovation, and reliability through corporate films, trade show materials, and digital presence optimization.",
    expertise: ["Corporate films", "Trade show branding", "B2B marketing", "Technical documentation"],
    relatedServiceSlugs: ["corporate-profile-videos", "graphic-design", "digital-marketing"],
    seo: { title: "Manufacturing Marketing | Public Relation Nepal", description: "B2B marketing for manufacturing sector." },
  },
  {
    id: "technology",
    slug: "technology",
    title: "Technology",
    shortDescription: "Innovation-focused branding and digital marketing for technology companies.",
    description: "Technology brands need to communicate complexity with clarity. We deliver product launches, AI advertising campaigns, web development, and thought leadership content for tech companies.",
    expertise: ["Product launches", "AI advertising", "Web development", "Content marketing"],
    relatedServiceSlugs: ["ai-advertising", "web-development", "content-marketing"],
    seo: { title: "Technology Marketing | Public Relation Nepal", description: "Marketing and branding for technology companies." },
  },
  {
    id: "finance",
    slug: "finance",
    title: "Finance",
    shortDescription: "Trust-building communications for financial services and investment firms.",
    description: "Financial services demand credibility and compliance. We produce annual report videos, investor communications, and brand campaigns that build trust with stakeholders.",
    expertise: ["Annual reports", "Investor communications", "Regulatory compliance", "Brand trust"],
    relatedServiceSlugs: ["corporate-profile-videos", "graphic-design", "public-relations"],
    seo: { title: "Financial Services Marketing | Public Relation Nepal", description: "Communications for financial services sector." },
  },
  {
    id: "banking",
    slug: "banking",
    title: "Banking",
    shortDescription: "Secure, professional communications for banking and financial institutions.",
    description: "Banking communication requires the highest standards of professionalism and security awareness. We deliver branch branding, customer education campaigns, and digital banking promotions.",
    expertise: ["Branch branding", "Customer education", "Digital banking", "Corporate communications"],
    relatedServiceSlugs: ["corporate-branding", "advertisement", "digital-marketing"],
    seo: { title: "Banking Communications | Public Relation Nepal", description: "Marketing for banking and financial institutions." },
  },
  {
    id: "retail",
    slug: "retail",
    title: "Retail",
    shortDescription: "High-impact retail marketing from TV commercials to digital campaigns.",
    description: "Retail brands compete for attention. We deliver TV commercials, in-store branding, social media campaigns, and e-commerce optimization that drive foot traffic and online sales.",
    expertise: ["TV commercials", "Retail branding", "E-commerce marketing", "Seasonal campaigns"],
    relatedServiceSlugs: ["television-commercial-production", "advertisement", "digital-marketing"],
    seo: { title: "Retail Marketing | Public Relation Nepal", description: "Retail advertising and marketing agency." },
  },
  {
    id: "construction",
    slug: "construction",
    title: "Construction",
    shortDescription: "Visual documentation and branding for construction and infrastructure projects.",
    description: "Construction projects benefit from professional drone surveys, progress documentation, corporate profiles, and tender presentation materials.",
    expertise: ["Drone surveys", "Progress documentation", "Tender presentations", "Corporate profiles"],
    relatedServiceSlugs: ["drone-videography", "corporate-profile-videos", "graphic-design"],
    seo: { title: "Construction Marketing | Public Relation Nepal", description: "Marketing for construction and infrastructure." },
  },
  {
    id: "real-estate",
    slug: "real-estate",
    title: "Real Estate",
    shortDescription: "Premium visual marketing for real estate developers and property brands.",
    description: "Real estate marketing demands stunning visuals. We produce aerial drone tours, property films, brochure design, and digital marketing campaigns that sell properties faster.",
    expertise: ["Property films", "Aerial tours", "Brochure design", "Digital marketing"],
    relatedServiceSlugs: ["drone-videography", "commercial-photography", "digital-marketing"],
    seo: { title: "Real Estate Marketing | Public Relation Nepal", description: "Real estate marketing and visual production." },
  },
  {
    id: "ngos",
    slug: "ngos",
    title: "NGOs",
    shortDescription: "Impactful storytelling for NGOs, development organizations, and social enterprises.",
    description: "NGOs need to communicate impact to donors, beneficiaries, and policymakers. We produce documentaries, fundraising videos, annual reports, and digital campaigns that drive engagement and funding.",
    expertise: ["Impact documentaries", "Fundraising videos", "Donor communications", "Social campaigns"],
    relatedServiceSlugs: ["documentary-production", "content-marketing", "graphic-design"],
    seo: { title: "NGO Communications | Public Relation Nepal", description: "Communications and storytelling for NGOs." },
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "ceo",
    name: "Leadership Team",
    role: "Chief Executive Officer",
    bio: "Visionary leader with 15+ years in strategic communications and brand management across South Asia.",
    department: "leadership",
    featured: true,
  },
  {
    id: "coo",
    name: "Operations Director",
    role: "Chief Operating Officer",
    bio: "Enterprise operations expert ensuring flawless project delivery for government and corporate clients.",
    department: "executive",
    featured: true,
  },
  {
    id: "creative-director",
    name: "Creative Director",
    role: "Executive Creative Director",
    bio: "Award-winning creative director with international agency experience in film, branding, and advertising.",
    department: "creative",
    featured: true,
  },
  {
    id: "pr-director",
    name: "PR Director",
    role: "Director of Public Relations",
    bio: "Media relations specialist with deep connections across national and international press.",
    department: "executive",
    featured: true,
  },
  {
    id: "film-director",
    name: "Film Director",
    role: "Head of Film Production",
    bio: "Cinematographer and director with broadcast-quality production expertise.",
    department: "creative",
    featured: false,
  },
  {
    id: "digital-lead",
    name: "Digital Lead",
    role: "Head of Digital",
    bio: "Digital transformation strategist specializing in SEO, web development, and performance marketing.",
    department: "creative",
    featured: false,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Public Relation Nepal transformed our municipal communication strategy. Their documentary series reached millions and fundamentally changed how citizens engage with local government.",
    author: "Municipal Official",
    role: "Chief Administrative Officer",
    company: "Municipal Government",
    rating: 5,
  },
  {
    id: "2",
    quote: "The level of creative excellence and strategic thinking rivals international agencies we've worked with in London and Singapore. Exceptional partner for enterprise branding.",
    author: "Corporate Executive",
    role: "Chief Marketing Officer",
    company: "Corporate Enterprise",
    rating: 5,
  },
  {
    id: "3",
    quote: "Their AI advertising campaign reduced our production costs by 70% while improving performance metrics. Truly innovative approach to modern marketing.",
    author: "Technology Leader",
    role: "VP Marketing",
    company: "Technology Company",
    rating: 5,
  },
  {
    id: "4",
    quote: "From concept to broadcast, the TV commercial production was flawless. Professional crew, cinematic quality, and delivered on time and budget.",
    author: "Brand Manager",
    role: "Marketing Director",
    company: "FMCG Brand",
    rating: 5,
  },
];

export const clients: Client[] = [
  { id: "1", name: "Government Agency", industry: "Government", featured: true },
  { id: "2", name: "Municipal Corporation", industry: "Government", featured: true },
  { id: "3", name: "Educational Institution", industry: "Education", featured: true },
  { id: "4", name: "FMCG Brand", industry: "Retail", featured: true },
  { id: "5", name: "Financial Services", industry: "Finance", featured: true },
  { id: "6", name: "Technology Company", industry: "Technology", featured: true },
  { id: "7", name: "International NGO", industry: "NGOs", featured: true },
  { id: "8", name: "Hospitality Group", industry: "Hospitality", featured: true },
  { id: "9", name: "Infrastructure Developer", industry: "Construction", featured: false },
  { id: "10", name: "Healthcare Provider", industry: "Healthcare", featured: false },
];

export const awards: Award[] = [
  { id: "1", title: "Best Documentary Production", organization: "South Asian Media Awards", year: "2025" },
  { id: "2", title: "Excellence in Government Communication", organization: "Communication Summit Asia", year: "2024" },
  { id: "3", title: "Creative Agency of the Year", organization: "Nepal Marketing Association", year: "2024" },
  { id: "4", title: "Best TV Commercial", organization: "Advertising Club Nepal", year: "2023" },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "future-of-ai-advertising-south-asia",
    title: "The Future of AI Advertising in South Asia",
    excerpt: "How artificial intelligence is revolutionizing creative production and enabling scalable, personalized advertising campaigns.",
    content: `## The AI Creative Revolution

Artificial intelligence is transforming how agencies produce advertising content. From generative visuals to automated variant testing, AI tools are enabling creative teams to work faster and smarter.

## Key Trends

### Generative Creative Production
AI-powered tools now enable rapid concept generation, allowing creative directors to explore dozens of directions before committing to production.

### Personalized Ad Variants
Machine learning algorithms analyze audience segments and automatically generate tailored creative variants for A/B testing at scale.

### Cost Efficiency
Production timelines that once took weeks can now be compressed to days, dramatically reducing costs while maintaining quality.

## What This Means for Brands

Enterprise and government brands in South Asia can now access international-caliber creative production at a fraction of traditional costs. The key is combining AI efficiency with human creative direction.

## Getting Started

Organizations looking to adopt AI advertising should start with pilot campaigns, establish brand guardrails, and partner with agencies experienced in both AI tools and strategic creative direction.`,
    author: { id: "1", name: "Creative Team", role: "Public Relation Nepal" },
    category: "AI & Innovation",
    tags: ["AI", "Advertising", "Innovation", "Digital Marketing"],
    publishedAt: "2025-06-15",
    readingTime: 5,
    featured: true,
    seo: {
      title: "Future of AI Advertising in South Asia | Public Relation Nepal",
      description: "How AI is revolutionizing advertising production in South Asia.",
    },
  },
  {
    id: "2",
    slug: "government-communication-best-practices",
    title: "Government Communication Best Practices for 2025",
    excerpt: "Essential strategies for effective public sector communication in the digital age.",
    content: `## Building Trust Through Communication

Government communication has evolved dramatically. Citizens expect transparency, accessibility, and engagement across digital and traditional channels.

## Core Principles

### Transparency First
Open communication builds citizen trust. Regular updates, accessible language, and multi-channel distribution are essential.

### Multilingual Reach
South Asia's linguistic diversity demands content in multiple languages, adapted culturally — not just translated.

### Visual Storytelling
Documentary-style content and data visualization make complex policy accessible to broad audiences.

## Digital Transformation

Modern government communication requires integrated digital platforms, social media engagement, and mobile-first content delivery.

## Measuring Impact

Define clear KPIs: reach, engagement, awareness lift, and behavioral change. Regular reporting ensures accountability and continuous improvement.`,
    author: { id: "2", name: "PR Team", role: "Public Relation Nepal" },
    category: "Public Relations",
    tags: ["Government", "PR", "Communication", "Public Sector"],
    publishedAt: "2025-05-20",
    readingTime: 4,
    featured: true,
    seo: {
      title: "Government Communication Best Practices 2025",
      description: "Essential government communication strategies for the digital age.",
    },
  },
  {
    id: "3",
    slug: "brand-strategy-enterprise-growth",
    title: "Brand Strategy as a Driver of Enterprise Growth",
    excerpt: "Why strategic branding is the foundation of sustainable business growth in competitive markets.",
    content: `## Beyond Visual Identity

Brand strategy encompasses positioning, messaging, audience mapping, and competitive differentiation — far beyond logos and color palettes.

## Strategic Framework

### Market Positioning
Define where your brand sits in the competitive landscape and why customers should choose you.

### Brand Architecture
For enterprise organizations with multiple products or divisions, clear brand architecture prevents confusion and maximizes equity.

### Employee Alignment
Internal brand adoption is as critical as external communication. Employees are your most authentic brand ambassadors.

## ROI of Brand Strategy

Organizations investing in strategic branding see measurable improvements in customer acquisition, pricing power, and employee retention.`,
    author: { id: "3", name: "Strategy Team", role: "Public Relation Nepal" },
    category: "Branding",
    tags: ["Branding", "Strategy", "Enterprise", "Growth"],
    publishedAt: "2025-04-10",
    readingTime: 6,
    featured: false,
    seo: {
      title: "Brand Strategy for Enterprise Growth",
      description: "How strategic branding drives sustainable enterprise growth.",
    },
  },
];

export const resources: Resource[] = [
  {
    id: "1",
    slug: "company-profile-2025",
    title: "Company Profile 2025",
    type: "download",
    excerpt: "Download our comprehensive company profile showcasing capabilities, case studies, and client testimonials.",
    publishedAt: "2025-01-01",
  },
  {
    id: "2",
    slug: "media-kit",
    title: "Media Kit",
    type: "media-kit",
    excerpt: "Official media kit with logos, brand assets, executive bios, and company fact sheet.",
    publishedAt: "2025-01-01",
  },
  {
    id: "3",
    slug: "government-communications-whitepaper",
    title: "Government Communications in the Digital Age",
    type: "whitepaper",
    excerpt: "Whitepaper on modern government communication strategies, best practices, and case studies.",
    publishedAt: "2024-11-15",
  },
  {
    id: "4",
    slug: "agency-expansion-press-release",
    title: "Public Relation Nepal Expands Enterprise Services",
    type: "press-release",
    excerpt: "Press release announcing expanded AI advertising and digital transformation capabilities.",
    publishedAt: "2025-03-01",
  },
];

export const homepage: Homepage = {
  hero: {
    eyebrow: "South Asia's Premier Communications Agency",
    headline: "We Shape Narratives That Move Nations & Markets",
    subheadline:
      "Strategic public relations, cinematic film production, and AI-powered advertising for government, enterprise, and global organizations.",
    ctaPrimary: { label: "Book Consultation", href: "/contact?type=consultation" },
    ctaSecondary: { label: "Explore Our Work", href: "/portfolio" },
    stats: [
      { id: "1", value: "100", label: "Projects Delivered", suffix: "+" },
      { id: "2", value: "50", label: "Enterprise Clients", suffix: "+" },
      { id: "3", value: "2", label: "Years of Excellence", suffix: "+" },
      { id: "4", value: "1", label: "Industry Awards", suffix: "+" },
    ],
  },
  featuredServiceIds: [
    "public-relations",
    "corporate-branding",
    "digital-marketing",
    "film-production",
    "ai-advertising",
    "web-development",
  ],
  featuredPortfolioIds: [
    "municipality-documentary-series",
    "government-awareness-campaign",
    "television-commercial-fmcg",
    "education-institution-profile",
    "ai-advertisement-campaign",
    "corporate-brand-identity",
  ],
  governmentExperience: {
    title: "Trusted by Government",
    description: "From municipality documentaries to national awareness campaigns, we deliver communications that serve the public interest with excellence.",
    projectIds: ["municipality-documentary-series", "government-awareness-campaign", "web-development-portal"],
  },
  corporateExperience: {
    title: "Enterprise Excellence",
    description: "Fortune-caliber branding, corporate films, and digital transformation for leading enterprises across South Asia.",
    projectIds: ["corporate-brand-identity", "corporate-video-annual-report", "digital-marketing-enterprise"],
  },
  creativeShowcase: {
    title: "Creative Showcase",
    description: "Award-winning creative work that pushes boundaries and delivers measurable business impact.",
    projectIds: ["advertisement-campaign-launch", "graphic-design-annual-report", "corporate-brand-identity"],
  },
  aiShowcase: {
    title: "AI Advertising Innovation",
    description: "Pioneering AI-powered creative production that reduces costs and accelerates campaign deployment.",
    projectIds: ["ai-advertisement-campaign"],
  },
  filmShowcase: {
    title: "Cinematic Film Production",
    description: "Broadcast-quality documentaries, TV commercials, and corporate films with international production standards.",
    projectIds: ["municipality-documentary-series", "television-commercial-fmcg", "ngo-awareness-documentary"],
  },
  industryIds: ["government", "education", "technology", "healthcare", "tourism", "finance"],
  statistics: [
    { id: "1", value: "100", label: "Projects Delivered", suffix: "+" },
    { id: "2", value: "50", label: "Clients Served", suffix: "+" },
    { id: "3", value: "8", label: "Team Members", suffix: "+" },
    { id: "4", value: "2", label: "Years Experience", suffix: "+" },
  ],
  awardIds: ["1", "2", "3", "4"],
  clientIds: ["1", "2", "3", "4", "5", "6", "7", "8"],
  testimonialIds: ["1", "2", "3", "4"],
  processSteps: [
    { id: "1", title: "Discovery", description: "Deep immersion into your brand, audience, and strategic objectives." },
    { id: "2", title: "Strategy", description: "Insight-driven planning aligned with measurable business outcomes." },
    { id: "3", title: "Creation", description: "Premium creative execution with cinematic quality and precision." },
    { id: "4", title: "Deployment", description: "Flawless multi-channel launch with enterprise project management." },
    { id: "5", title: "Optimization", description: "Continuous measurement, reporting, and performance improvement." },
  ],
  whyChooseUs: [
    { id: "1", title: "Government-Ready", description: "Proven track record with government tenders, municipalities, and public sector organizations." },
    { id: "2", title: "International Standards", description: "Creative and strategic excellence that competes with global agencies like Ogilvy and AKQA." },
    { id: "3", title: "Full-Service Integration", description: "PR, branding, film, digital, and AI — one partner for your entire communication ecosystem." },
    { id: "4", title: "Measurable Results", description: "Data-driven approach with transparent reporting and ROI-focused deliverables." },
  ],
  featuredBlogIds: ["1", "2", "3"],
  faqs: [
    { id: "1", question: "What industries does Public Relation Nepal serve?", answer: "We serve government, corporate, education, healthcare, hospitality, tourism, finance, NGOs, and international organizations across South Asia." },
    { id: "2", question: "Do you handle government tenders and RFPs?", answer: "Yes. We have extensive experience responding to government tenders and RFPs, with dedicated teams for proposal development and compliance." },
    { id: "3", question: "What is your typical project timeline?", answer: "Timelines vary by scope. A branding project may take 6-8 weeks, while a documentary production may take 8-12 weeks. We provide detailed timelines during consultation." },
    { id: "4", question: "Do you offer AI advertising services?", answer: "Yes. We are pioneers in AI-powered advertising production in South Asia, combining generative AI tools with human creative direction." },
    { id: "5", question: "How do I request a proposal?", answer: "Visit our contact page to book a consultation, request a proposal, or request a quotation. Our team responds within 24 hours." },
  ],
  newsletter: {
    title: "Stay Ahead of the Curve",
    description: "Insights on PR, branding, film production, and digital innovation delivered to your inbox.",
  },
  seo: {
    title: "Best PR Agency in Nepal | Public Relation Nepal — Branding & Digital Marketing",
    description: "Nepal's top PR agency for public relations, branding, and digital marketing — award-winning work for government, enterprise, and international clients.",
    keywords: [
      "best PR agency in Nepal",
      "top PR agency in Nepal",
      "branding agency Nepal",
      "branding and marketing company in Nepal",
      "best digital marketing agency in Nepal",
    ],
  },
};

export const aboutPage: AboutPage = {
  overview: {
    title: "Crafting Narratives That Define Nations & Brands",
    content: "Public Relation Nepal is South Asia's leading integrated communications agency. For over 2 years, we have partnered with government bodies, multinational corporations, NGOs, educational institutions, and international organizations to deliver strategic communications, premium branding, cinematic film production, and digital innovation.\n\nOur team of 50+ strategists, creatives, filmmakers, and digital experts combines local market expertise with international standards — delivering work that competes with the world's best agencies.",
  },
  story: {
    title: "Our Story",
    content: "Founded in Kathmandu with a vision to elevate South Asian communications to international standards, Public Relation Nepal began as a boutique PR firm and has evolved into a full-service integrated agency.\n\nFrom our first municipality documentary to national government campaigns, TV commercials for leading brands, and AI-powered advertising innovations — every project has reinforced our commitment to excellence, integrity, and measurable impact.",
  },
  mission: "To empower organizations with strategic communications and creative excellence that build trust, drive growth, and create lasting impact across South Asia and beyond.",
  vision: "To be recognized as South Asia's most trusted and innovative integrated communications agency — setting the global standard for creative excellence in emerging markets.",
  values: [
    { id: "1", title: "Excellence", description: "We pursue the highest standards in every deliverable, every interaction, every project." },
    { id: "2", title: "Integrity", description: "Transparency and ethical practice guide every client relationship and campaign." },
    { id: "3", title: "Innovation", description: "We embrace emerging technologies and creative approaches to stay ahead of the curve." },
    { id: "4", title: "Impact", description: "We measure success by the tangible results we deliver for our clients and communities." },
  ],
  timeline: [
    { id: "1", year: "2024", title: "Foundation", description: "Public Relation Nepal founded in Kathmandu as a boutique PR agency." },
    { id: "2", year: "2025", title: "Film Production", description: "Launched film production division with first municipality documentary." },
    { id: "3", year: "2025", title: "Digital Expansion", description: "Added digital marketing, web development, and SEO services." },
    { id: "4", year: "2025", title: "Enterprise Growth", description: "Expanded to serve multinational and government enterprise clients." },
    { id: "5", year: "2025", title: "AI Innovation", description: "Pioneered AI advertising and video production capabilities in South Asia." },
    { id: "6", year: "2025", title: "Regional Leadership", description: "Recognized as South Asia's premier integrated communications agency." },
  ],
  csr: {
    title: "Corporate Social Responsibility",
  content: "We believe in giving back to the communities we serve. Through pro-bono communications support for NGOs, media literacy programs, and environmental sustainability initiatives, we contribute to positive social change across Nepal and South Asia.",
  },
  culture: {
    title: "Our Culture",
    content: "Creativity thrives in an environment of trust, collaboration, and continuous learning. Our team culture celebrates diverse perspectives, encourages bold ideas, and maintains an unwavering commitment to client success.",
  },
  careers: {
    title: "Join Our Team",
    content: "We're always looking for exceptional strategists, creatives, filmmakers, and digital experts who share our passion for excellence. Explore career opportunities at one of South Asia's most dynamic agencies.",
    ctaLabel: "View Open Positions",
    ctaHref: "/contact?type=career",
  },
  seo: {
    title: "About Public Relation Nepal | Our Story, Mission & Team",
    description: "Learn about Public Relation Nepal — South Asia's premier integrated communications agency.",
  },
};
