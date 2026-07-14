import type { PortfolioProject } from "@/domain/types";

const placeholderImage = (alt: string, seed: number) => ({
  url: `https://images.unsplash.com/photo-${seed}?w=1600&q=80&auto=format&fit=crop`,
  alt,
  width: 1600,
  height: 900,
});

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "municipality-documentary-series",
    slug: "municipality-documentary-series",
    title: "Municipality Documentary Series",
    excerpt:
      "A cinematic documentary series showcasing municipal governance, infrastructure development, and citizen services across Nepal.",
    category: "documentaries",
    client: "Municipal Government",
    industry: "Government",
    featured: true,
    heroImage: placeholderImage("Municipality documentary filming", 1486401976900),
    gallery: [
      placeholderImage("Municipal building aerial shot", 1449824913935),
      placeholderImage("Community interview setup", 1521737711861),
      placeholderImage("Infrastructure development", 1504307651254),
    ],
    videos: [
      {
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        title: "Municipality Documentary — Episode 1",
        poster: placeholderImage("Documentary poster", 1486401976900).url,
      },
    ],
    challenge:
      "The municipality needed to communicate complex governance initiatives to diverse citizen demographics while building trust in local government institutions.",
    solution:
      "We produced a multi-episode documentary series combining aerial cinematography, citizen interviews, and data visualization to tell compelling stories of municipal progress and transparency.",
    creativeProcess: [
      { id: "1", title: "Research", description: "Extensive stakeholder interviews and on-ground research across wards." },
      { id: "2", title: "Scripting", description: "Narrative frameworks balancing policy communication with human stories." },
      { id: "3", title: "Production", description: "Multi-camera shoots with drone coverage and professional lighting." },
      { id: "4", title: "Post-Production", description: "Cinematic editing, color grading, and multilingual subtitles." },
    ],
    deliverables: [
      "6-episode documentary series",
      "Social media cutdowns (30+ assets)",
      "Broadcast-ready masters",
      "Press kit and media assets",
    ],
    results: [
      { label: "Total Views", value: "2.5M+" },
      { label: "Media Coverage", value: "45+" },
      { label: "Citizen Engagement", value: "340%" },
    ],
    relatedProjectSlugs: ["government-awareness-campaign", "education-institution-profile"],
    seo: {
      title: "Municipality Documentary Series | Public Relation Nepal",
      description: "Cinematic documentary production for municipal government showcasing governance and citizen services.",
    },
    completedAt: "2025-06-01",
  },
  {
    id: "government-awareness-campaign",
    slug: "government-awareness-campaign",
    title: "National Government Awareness Campaign",
    excerpt:
      "Multi-channel public awareness campaign reaching millions of citizens across Nepal with unified messaging.",
    category: "advertisements",
    client: "Government Agency",
    industry: "Government",
    featured: true,
    heroImage: placeholderImage("Government awareness campaign", 1557804506),
    gallery: [
      placeholderImage("Campaign billboard", 1563986768609),
      placeholderImage("Social media campaign assets", 1611165474720),
      placeholderImage("TV broadcast still", 1573164574579),
    ],
    challenge:
      "A critical national initiative required coordinated messaging across TV, radio, digital, and outdoor media to reach rural and urban populations simultaneously.",
    solution:
      "We developed an integrated communication strategy with culturally adapted creative assets, media buying across 50+ channels, and real-time performance monitoring.",
    creativeProcess: [
      { id: "1", title: "Strategy", description: "Audience segmentation and channel mapping for maximum reach." },
      { id: "2", title: "Creative", description: "Culturally resonant visuals and messaging in multiple languages." },
      { id: "3", title: "Media", description: "Strategic media buying across TV, radio, digital, and OOH." },
      { id: "4", title: "Analytics", description: "Real-time tracking and optimization throughout the campaign." },
    ],
    deliverables: [
      "Integrated campaign strategy",
      "TV and radio commercials",
      "Digital advertising suite",
      "Print and outdoor materials",
      "Social media content calendar",
    ],
    results: [
      { label: "Reach", value: "8M+" },
      { label: "Awareness Lift", value: "67%" },
      { label: "Channels", value: "50+" },
    ],
    relatedProjectSlugs: ["municipality-documentary-series", "television-commercial-fmcg"],
    seo: {
      title: "Government Awareness Campaign | Public Relation Nepal",
      description: "Multi-channel government communication campaign with national reach across Nepal.",
    },
    completedAt: "2025-03-15",
  },
  {
    id: "television-commercial-fmcg",
    slug: "television-commercial-fmcg",
    title: "National Television Commercial — FMCG Brand",
    excerpt:
      "Broadcast-quality TV commercial production for a leading FMCG brand with nationwide media placement.",
    category: "television-commercials",
    client: "FMCG Brand",
    industry: "Retail",
    featured: true,
    heroImage: placeholderImage("TV commercial production set", 1574717363580),
    gallery: [
      placeholderImage("Commercial filming", 1492691527719),
      placeholderImage("Product shot", 1556740758),
      placeholderImage("Post production", 1536240529661),
    ],
    challenge:
      "The brand needed a high-impact TV commercial that could compete with international campaigns while resonating with Nepali audiences.",
    solution:
      "Full-service TVC production with celebrity talent, cinematic cinematography, original music composition, and strategic media buying for prime-time placement.",
    creativeProcess: [
      { id: "1", title: "Concept", description: "Creative concepting with mood boards and storyboards." },
      { id: "2", title: "Pre-Production", description: "Casting, location scouting, and production design." },
      { id: "3", title: "Filming", description: "Multi-day shoot with professional crew and equipment." },
      { id: "4", title: "Post", description: "Editing, VFX, color grading, and audio mastering." },
    ],
    deliverables: [
      "30-second TV commercial",
      "15-second cutdown",
      "Social media variants",
      "Behind-the-scenes content",
    ],
    results: [
      { label: "Brand Recall", value: "+52%" },
      { label: "Sales Impact", value: "+28%" },
      { label: "Awards", value: "3" },
    ],
    relatedProjectSlugs: ["advertisement-campaign-launch", "corporate-brand-identity"],
    seo: {
      title: "Television Commercial Production | Public Relation Nepal",
      description: "Broadcast-quality TV commercial production for leading FMCG brand in Nepal.",
    },
    completedAt: "2025-01-20",
  },
  {
    id: "education-institution-profile",
    slug: "education-institution-profile",
    title: "Educational Institution Profile Video",
    excerpt:
      "Premium institutional profile film showcasing academic excellence, campus life, and student achievements.",
    category: "corporate-videos",
    client: "Leading Educational Institution",
    industry: "Education",
    featured: true,
    heroImage: placeholderImage("University campus aerial view", 1523050854057),
    gallery: [
      placeholderImage("Campus life", 1523240795612),
      placeholderImage("Classroom scene", 1503676260728),
      placeholderImage("Graduation ceremony", 1524178307211),
    ],
    challenge:
      "The institution needed a compelling profile video to attract international students and corporate partnerships while showcasing academic credibility.",
    solution:
      "A narrative-driven profile film combining drone aerials, student testimonials, faculty interviews, and dynamic campus footage with professional narration.",
    creativeProcess: [
      { id: "1", title: "Discovery", description: "Campus tours and stakeholder interviews." },
      { id: "2", title: "Storyboarding", description: "Narrative arc highlighting unique institutional strengths." },
      { id: "3", title: "Production", description: "Multi-day campus shoot with drone and ground crews." },
      { id: "4", title: "Delivery", description: "Master film plus social cutdowns and presentation version." },
    ],
    deliverables: [
      "5-minute profile film",
      "60-second promotional cut",
      "Social media clips (10+)",
      "Presentation deck integration",
    ],
    results: [
      { label: "Enrollment Inquiries", value: "+85%" },
      { label: "Video Views", value: "500K+" },
      { label: "Partnership Leads", value: "12" },
    ],
    relatedProjectSlugs: ["municipality-documentary-series", "corporate-brand-identity"],
    seo: {
      title: "Educational Institution Profile Video | Public Relation Nepal",
      description: "Premium profile video production for leading educational institution in Nepal.",
    },
    completedAt: "2024-11-10",
  },
  {
    id: "advertisement-campaign-launch",
    slug: "advertisement-campaign-launch",
    title: "Multi-Platform Advertisement Campaign",
    excerpt:
      "Integrated advertisement campaign spanning digital, print, outdoor, and broadcast channels for product launch.",
    category: "advertisements",
    client: "Consumer Brand",
    industry: "Retail",
    featured: true,
    heroImage: placeholderImage("Advertisement campaign creative", 1558651715),
    gallery: [
      placeholderImage("Digital ad creative", 1460925895917),
      placeholderImage("Billboard design", 1563986768609),
      placeholderImage("Print advertisement", 1557804506),
    ],
    challenge:
      "Launch a new product in a competitive market with limited budget but high visibility expectations across multiple channels.",
    solution:
      "Strategic creative development with channel-specific asset optimization, influencer partnerships, and performance-driven media buying.",
    creativeProcess: [
      { id: "1", title: "Brief", description: "Market analysis and competitive positioning." },
      { id: "2", title: "Creative", description: "Multi-format creative development and testing." },
      { id: "3", title: "Launch", description: "Coordinated multi-channel campaign deployment." },
      { id: "4", title: "Optimize", description: "Performance monitoring and creative optimization." },
    ],
    deliverables: [
      "Campaign creative suite (20+ assets)",
      "Digital advertising campaigns",
      "Print and OOH materials",
      "Influencer content package",
      "Performance report",
    ],
    results: [
      { label: "Impressions", value: "15M+" },
      { label: "Conversion Rate", value: "4.2%" },
      { label: "ROI", value: "320%" },
    ],
    relatedProjectSlugs: ["television-commercial-fmcg", "ai-advertisement-campaign"],
    seo: {
      title: "Advertisement Campaign Launch | Public Relation Nepal",
      description: "Multi-platform advertisement campaign for consumer brand product launch.",
    },
    completedAt: "2024-09-05",
  },
  {
    id: "ai-advertisement-campaign",
    slug: "ai-advertisement-campaign",
    title: "AI-Powered Advertisement Campaign",
    excerpt:
      "Innovative AI-generated advertising campaign demonstrating the future of scalable creative production.",
    category: "ai-advertisements",
    client: "Technology Company",
    industry: "Technology",
    featured: true,
    heroImage: placeholderImage("AI advertising creative", 1677442136019),
    gallery: [
      placeholderImage("AI generated visuals", 1620712943543),
      placeholderImage("Campaign dashboard", 1551288049),
      placeholderImage("Social variants", 1611165474720),
    ],
    challenge:
      "Produce dozens of personalized ad variants for A/B testing while maintaining brand consistency and reducing production timelines.",
    solution:
      "AI-assisted creative production pipeline combining generative AI tools with human creative direction for rapid, scalable ad variant generation.",
    creativeProcess: [
      { id: "1", title: "Setup", description: "AI pipeline configuration and brand guardrails." },
      { id: "2", title: "Generate", description: "AI-powered variant creation with creative oversight." },
      { id: "3", title: "Refine", description: "Human refinement and brand compliance review." },
      { id: "4", title: "Deploy", description: "Automated deployment with performance tracking." },
    ],
    deliverables: [
      "50+ ad variants",
      "AI production pipeline",
      "Performance dashboard",
      "Best practice documentation",
    ],
    results: [
      { label: "Production Time", value: "-70%" },
      { label: "Variants Tested", value: "50+" },
      { label: "CTR Improvement", value: "+45%" },
    ],
    relatedProjectSlugs: ["advertisement-campaign-launch", "corporate-brand-identity"],
    seo: {
      title: "AI Advertisement Campaign | Public Relation Nepal",
      description: "AI-powered advertising campaign with scalable creative production.",
    },
    completedAt: "2025-02-28",
  },
  {
    id: "corporate-brand-identity",
    slug: "corporate-brand-identity",
    title: "Corporate Brand Identity System",
    excerpt:
      "Complete brand identity redesign for a major corporate enterprise — from strategy to implementation.",
    category: "branding",
    client: "Corporate Enterprise",
    industry: "Corporate",
    featured: true,
    heroImage: placeholderImage("Brand identity design", 1561070791),
    gallery: [
      placeholderImage("Logo design process", 1558655148),
      placeholderImage("Brand guidelines", 1586281380117),
      placeholderImage("Brand applications", 1559021310),
    ],
    challenge:
      "A legacy corporate brand needed modernization while preserving decades of brand equity and stakeholder recognition.",
    solution:
      "Comprehensive brand audit, stakeholder workshops, and phased identity evolution with detailed brand guidelines and rollout support.",
    creativeProcess: [
      { id: "1", title: "Audit", description: "Brand audit and stakeholder alignment workshops." },
      { id: "2", title: "Design", description: "Identity system design with multiple concept directions." },
      { id: "3", title: "Guidelines", description: "Comprehensive brand book and asset library." },
      { id: "4", title: "Rollout", description: "Phased implementation across all touchpoints." },
    ],
    deliverables: [
      "Brand strategy document",
      "Logo and identity system",
      "Brand guidelines (100+ pages)",
      "Template library",
      "Rollout support",
    ],
    results: [
      { label: "Brand Perception", value: "+40%" },
      { label: "Touchpoints Updated", value: "200+" },
      { label: "Employee Adoption", value: "95%" },
    ],
    relatedProjectSlugs: ["corporate-video-annual-report", "web-development-portal"],
    seo: {
      title: "Corporate Brand Identity | Public Relation Nepal",
      description: "Complete corporate brand identity redesign and implementation.",
    },
    completedAt: "2024-07-15",
  },
  {
    id: "corporate-video-annual-report",
    slug: "corporate-video-annual-report",
    title: "Corporate Annual Report Video",
    excerpt:
      "Executive-led annual report video combining financial highlights with strategic vision storytelling.",
    category: "corporate-videos",
    client: "Financial Services Company",
    industry: "Finance",
    featured: false,
    heroImage: placeholderImage("Corporate annual report video", 1556761175),
    gallery: [
      placeholderImage("Executive interview", 1560250097),
      placeholderImage("Data visualization", 1551288049),
    ],
    challenge: "Transform dense financial data into an engaging visual narrative for investors and stakeholders.",
    solution: "Motion graphics-driven video with executive interviews, animated data visualization, and cinematic b-roll.",
    creativeProcess: defaultProcess(),
    deliverables: ["Annual report video", "Investor presentation cut", "Social media snippets"],
    results: [
      { label: "Investor Engagement", value: "+60%" },
      { label: "Views", value: "150K+" },
    ],
    seo: {
      title: "Corporate Annual Report Video | Public Relation Nepal",
      description: "Premium corporate annual report video production.",
    },
    completedAt: "2024-05-20",
  },
  {
    id: "web-development-portal",
    slug: "web-development-portal",
    title: "Enterprise Web Portal Development",
    excerpt:
      "Custom enterprise web portal with CMS integration, user authentication, and multilingual support.",
    category: "web-development",
    client: "Government Agency",
    industry: "Government",
    featured: false,
    heroImage: placeholderImage("Web development project", 1460925895917),
    gallery: [placeholderImage("Portal dashboard", 1551288049)],
    challenge: "Replace legacy systems with a modern, accessible, multilingual web portal serving millions of users.",
    solution: "Next.js enterprise portal with headless CMS, WCAG 2.1 compliance, and performance optimization.",
    creativeProcess: defaultProcess(),
    deliverables: ["Enterprise web portal", "CMS integration", "Admin dashboard", "Documentation"],
    results: [
      { label: "Page Load", value: "<1.2s" },
      { label: "Accessibility", value: "WCAG 2.1 AA" },
      { label: "Uptime", value: "99.9%" },
    ],
    seo: {
      title: "Enterprise Web Portal | Public Relation Nepal",
      description: "Custom enterprise web portal development with CMS integration.",
    },
    completedAt: "2024-10-01",
  },
  {
    id: "drone-infrastructure-survey",
    slug: "drone-infrastructure-survey",
    title: "Infrastructure Drone Survey Project",
    excerpt:
      "Large-scale drone aerial survey and videography for infrastructure development documentation.",
    category: "drone-projects",
    client: "Infrastructure Developer",
    industry: "Construction",
    featured: false,
    heroImage: placeholderImage("Drone infrastructure survey", 1473960968644),
    gallery: [placeholderImage("Aerial infrastructure shot", 1504307651254)],
    challenge: "Document extensive infrastructure development across challenging terrain with precision aerial coverage.",
    solution: "Licensed drone operations with 4K aerial cinematography, photogrammetry, and progress documentation.",
    creativeProcess: defaultProcess(),
    deliverables: ["Aerial footage library", "Progress documentation", "GIS-ready imagery"],
    results: [
      { label: "Area Covered", value: "500+ acres" },
      { label: "Flight Hours", value: "120+" },
    ],
    seo: {
      title: "Drone Infrastructure Survey | Public Relation Nepal",
      description: "Professional drone aerial survey for infrastructure development.",
    },
    completedAt: "2024-08-12",
  },
  {
    id: "ngo-awareness-documentary",
    slug: "ngo-awareness-documentary",
    title: "NGO Social Impact Documentary",
    excerpt:
      "Emotional documentary showcasing NGO social impact programs and community transformation stories.",
    category: "documentaries",
    client: "International NGO",
    industry: "NGOs",
    featured: false,
    heroImage: placeholderImage("NGO documentary", 1488523789246),
    gallery: [placeholderImage("Community program", 1521737711861)],
    challenge: "Communicate complex social impact to international donors with authentic, emotionally resonant storytelling.",
    solution: "Documentary-style film with community voices, impact data visualization, and multilingual distribution.",
    creativeProcess: defaultProcess(),
    deliverables: ["Documentary film", "Fundraising presentation cut", "Social media campaign"],
    results: [
      { label: "Donor Engagement", value: "+45%" },
      { label: "Fundraising Impact", value: "$2M+" },
    ],
    seo: {
      title: "NGO Social Impact Documentary | Public Relation Nepal",
      description: "Documentary production for international NGO social impact programs.",
    },
    completedAt: "2024-06-30",
  },
  {
    id: "digital-marketing-enterprise",
    slug: "digital-marketing-enterprise",
    title: "Enterprise Digital Marketing Transformation",
    excerpt:
      "Full-funnel digital marketing strategy and execution for enterprise client across South Asian markets.",
    category: "digital-marketing",
    client: "Enterprise Client",
    industry: "Corporate",
    featured: false,
    heroImage: placeholderImage("Digital marketing dashboard", 1460925895917),
    gallery: [placeholderImage("Campaign analytics", 1551288049)],
    challenge: "Build digital presence from scratch and compete with established international brands online.",
    solution: "Integrated digital strategy with SEO, paid media, content marketing, and marketing automation.",
    creativeProcess: defaultProcess(),
    deliverables: ["Digital strategy", "SEO program", "Paid media campaigns", "Content calendar"],
    results: [
      { label: "Organic Traffic", value: "+280%" },
      { label: "Lead Generation", value: "+190%" },
      { label: "ROAS", value: "4.8x" },
    ],
    seo: {
      title: "Enterprise Digital Marketing | Public Relation Nepal",
      description: "Full-funnel digital marketing transformation for enterprise client.",
    },
    completedAt: "2024-04-18",
  },
  {
    id: "graphic-design-annual-report",
    slug: "graphic-design-annual-report",
    title: "Annual Report Design & Production",
    excerpt:
      "Premium annual report design combining data visualization, photography, and editorial excellence.",
    category: "graphic-design",
    client: "Public Corporation",
    industry: "Corporate",
    featured: false,
    heroImage: placeholderImage("Annual report design", 1586281380117),
    gallery: [placeholderImage("Report spread design", 1559021310)],
    challenge: "Transform complex annual financial and operational data into an engaging, premium publication.",
    solution: "Editorial design with custom infographics, professional photography, and print-ready production.",
    creativeProcess: defaultProcess(),
    deliverables: ["Annual report (120 pages)", "Digital interactive version", "Executive summary"],
    results: [
      { label: "Distribution", value: "10,000+" },
      { label: "Design Awards", value: "2" },
    ],
    seo: {
      title: "Annual Report Design | Public Relation Nepal",
      description: "Premium annual report design and production services.",
    },
    completedAt: "2024-03-22",
  },
];

function defaultProcess() {
  return [
    { id: "1", title: "Discover", description: "Research and stakeholder alignment." },
    { id: "2", title: "Create", description: "Creative development and production." },
    { id: "3", title: "Deliver", description: "Final delivery and deployment." },
  ];
}

export const portfolioCategories = [
  { slug: "documentaries", label: "Documentaries" },
  { slug: "television-commercials", label: "Television Commercials" },
  { slug: "advertisements", label: "Advertisements" },
  { slug: "ai-advertisements", label: "AI Advertisements" },
  { slug: "corporate-videos", label: "Corporate Videos" },
  { slug: "branding", label: "Branding" },
  { slug: "graphic-design", label: "Graphic Design" },
  { slug: "digital-marketing", label: "Digital Marketing" },
  { slug: "web-development", label: "Web Development" },
  { slug: "drone-projects", label: "Drone Projects" },
] as const;
