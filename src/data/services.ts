import type { Service, SEO } from "@/domain/types";

const defaultProcess = [
  {
    id: "discover",
    title: "Discover",
    description: "Deep research into your brand, audience, and strategic objectives.",
  },
  {
    id: "strategize",
    title: "Strategize",
    description: "Develop insight-driven strategies aligned with measurable business goals.",
  },
  {
    id: "create",
    title: "Create",
    description: "Craft premium creative assets with cinematic quality and precision.",
  },
  {
    id: "deliver",
    title: "Deliver",
    description: "Execute flawlessly across channels with enterprise-grade project management.",
  },
  {
    id: "measure",
    title: "Measure",
    description: "Track performance, optimize outcomes, and report transparent results.",
  },
];

function createService(
  slug: string,
  title: string,
  shortDescription: string,
  description: string,
  featured = false,
  seoOverride?: Partial<SEO>
): Service {
  return {
    id: slug,
    slug,
    title,
    shortDescription,
    description,
    featured,
    benefits: [
      {
        id: "1",
        title: "Strategic Excellence",
        description: `Enterprise-grade ${title.toLowerCase()} strategies designed for measurable impact.`,
      },
      {
        id: "2",
        title: "Creative Distinction",
        description: "Award-caliber creative execution that elevates your brand above competitors.",
      },
      {
        id: "3",
        title: "Proven Results",
        description: "Track record of success with government, corporate, and international clients.",
      },
    ],
    process: defaultProcess,
    faqs: [
      {
        id: "1",
        question: `What makes Public Relation Nepal's ${title.toLowerCase()} services different?`,
        answer: `We combine strategic rigor with cinematic creative execution, backed by deep expertise in South Asian markets and international standards.`,
      },
      {
        id: "2",
        question: "How do we get started?",
        answer: "Book a consultation and our team will assess your needs, share relevant case studies, and propose a tailored approach.",
      },
    ],
    seo: {
      title: `${title} | Public Relation Nepal`,
      description: shortDescription,
      ...seoOverride,
    },
  };
}

export const services: Service[] = [
  createService(
    "public-relations",
    "Public Relations",
    "Strategic PR campaigns that build reputation, manage crises, and amplify your narrative across media and stakeholders.",
    "Public Relation Nepal delivers comprehensive public relations services for government bodies, multinational corporations, NGOs, and international organizations. From media relations and press conferences to crisis communication and stakeholder engagement, we protect and elevate your reputation with precision and authority.",
    true,
    {
      title: "Best PR Agency in Nepal | Public Relations Services — Public Relation Nepal",
      description: "Nepal's top PR agency for media relations, crisis communication, and stakeholder engagement — trusted by government, enterprise, and international clients.",
      keywords: ["best PR agency in Nepal", "top PR agency in Nepal", "PR agency Nepal", "public relations services Nepal", "PR agency Kathmandu"],
    }
  ),
  createService(
    "corporate-branding",
    "Corporate Branding",
    "Transform your identity with premium brand systems that communicate trust, authority, and innovation.",
    "We architect complete brand ecosystems — from visual identity and brand guidelines to brand architecture and repositioning strategies. Our branding work has helped municipalities, enterprises, and institutions establish commanding market presence.",
    true,
    {
      title: "Branding Agency in Nepal | Corporate Branding & Identity — Public Relation Nepal",
      description: "Nepal's leading branding and marketing company — brand identity, brand strategy, and repositioning for enterprises and institutions.",
      keywords: ["branding agency Nepal", "branding company Nepal", "branding and marketing company in Nepal", "corporate branding Nepal", "brand identity Kathmandu"],
    }
  ),
  createService(
    "brand-strategy",
    "Brand Strategy",
    "Insight-driven brand strategies that align business objectives with audience expectations.",
    "Our brand strategists conduct deep market research, competitive analysis, and audience mapping to develop positioning strategies that drive long-term growth and market leadership.",
    false,
    {
      keywords: ["brand strategy agency Nepal", "branding and marketing company in Nepal", "brand positioning Nepal"],
    }
  ),
  createService(
    "digital-marketing",
    "Digital Marketing",
    "Data-driven digital campaigns that generate leads, build awareness, and deliver measurable ROI.",
    "From performance marketing and programmatic advertising to email campaigns and analytics, we execute full-funnel digital strategies for enterprise and government clients.",
    true,
    {
      title: "Best Digital Marketing Agency in Nepal | Public Relation Nepal",
      description: "Nepal's best digital marketing agency — performance marketing, SEO, social media, and full-funnel digital strategy for enterprise and government clients.",
      keywords: ["best digital marketing agency in Nepal", "digital marketing company Nepal", "digital marketing Kathmandu", "digital marketing agency Nepal"],
    }
  ),
  createService(
    "seo",
    "Search Engine Optimization",
    "Enterprise SEO strategies that dominate search rankings and drive qualified organic traffic.",
    "Technical SEO audits, content optimization, link building, and local SEO — engineered for sustainable search visibility and lead generation.",
    false,
    {
      keywords: ["SEO agency Nepal", "SEO company Nepal", "SEO services Kathmandu"],
    }
  ),
  createService(
    "social-media-marketing",
    "Social Media Marketing",
    "Engaging social strategies that build communities and convert followers into customers.",
    "Platform-specific content strategies, community management, paid social campaigns, and influencer partnerships across all major platforms."
  ),
  createService(
    "social-media-management",
    "Social Media Management",
    "End-to-end social media management with content calendars, publishing, and performance reporting.",
    "Our social media team manages your brand presence daily — creating content, engaging audiences, and optimizing for growth."
  ),
  createService(
    "website-design",
    "Website Design",
    "Premium web experiences that combine stunning design with conversion-focused UX architecture.",
    "We design enterprise websites that communicate authority, guide users intuitively, and convert visitors into qualified leads."
  ),
  createService(
    "web-development",
    "Web Development",
    "High-performance websites and web applications built with modern, scalable technology.",
    "Custom web development with Next.js, React, and enterprise CMS integrations — optimized for speed, security, and SEO.",
    true
  ),
  createService(
    "mobile-app-development",
    "Mobile App Development",
    "Native and cross-platform mobile applications for iOS and Android.",
    "From concept to deployment, we build mobile apps that deliver exceptional user experiences and business value."
  ),
  createService(
    "business-consultancy",
    "Business Consultancy",
    "Strategic business advisory services for growth, transformation, and operational excellence.",
    "Our consultants partner with leadership teams to solve complex business challenges and unlock new opportunities."
  ),
  createService(
    "business-management",
    "Business Management",
    "Comprehensive business management solutions for operational efficiency and growth.",
    "Strategic planning, process optimization, and management consulting tailored to your organization's needs."
  ),
  createService(
    "ai-advertising",
    "AI Advertisement Production",
    "Cutting-edge AI-powered advertising that pushes creative boundaries and reduces production costs.",
    "Leverage artificial intelligence for rapid ad concepting, personalized creative variants, and scalable campaign production.",
    true
  ),
  createService(
    "ai-video-production",
    "AI Video Production",
    "Next-generation video content created with AI tools for speed, scale, and creative innovation.",
    "AI-assisted video production combining human creative direction with machine efficiency for compelling visual storytelling."
  ),
  createService(
    "television-commercial-production",
    "Television Commercial Production",
    "Broadcast-quality TV commercials that capture attention and drive action.",
    "Full-service TVC production from concept development through filming, post-production, and media placement.",
    true
  ),
  createService(
    "documentary-production",
    "Documentary Production",
    "Compelling documentary films that tell authentic stories with cinematic excellence.",
    "We produce documentaries for municipalities, government agencies, NGOs, and corporations — capturing stories that matter.",
    true
  ),
  createService(
    "corporate-profile-videos",
    "Corporate Profile Videos",
    "Premium corporate films that showcase your organization with authority and elegance.",
    "Executive interviews, facility tours, and narrative-driven profile videos for investor relations, recruitment, and brand building."
  ),
  createService(
    "film-production",
    "Film Production",
    "Full-service film production with broadcast and cinematic quality standards.",
    "From pre-production planning to final delivery, our film team handles every aspect of production with international-grade expertise.",
    true
  ),
  createService(
    "event-coverage",
    "Event Coverage",
    "Professional event photography and videography for conferences, launches, and ceremonies.",
    "Multi-camera event coverage, live streaming, and same-day highlight reels for maximum event impact."
  ),
  createService(
    "event-branding",
    "Event Branding",
    "Complete event identity systems from concept to on-site environmental branding.",
    "Stage design, signage, digital assets, and experiential branding that transforms events into memorable brand moments."
  ),
  createService(
    "government-communication-campaigns",
    "Government Communication Campaigns",
    "Public awareness campaigns designed for government agencies and municipalities.",
    "Citizen engagement, public health campaigns, policy communication, and civic awareness programs with proven reach and impact.",
    true
  ),
  createService(
    "political-campaign-branding",
    "Political Campaign Branding",
    "Strategic political branding and communication for electoral campaigns.",
    "Campaign identity, messaging frameworks, media strategy, and voter engagement programs."
  ),
  createService(
    "commercial-photography",
    "Commercial Photography",
    "High-end commercial photography for brands, products, and corporate communications.",
    "Studio and location photography with professional lighting, styling, and post-production."
  ),
  createService(
    "commercial-videography",
    "Commercial Videography",
    "Professional videography services for marketing, corporate, and promotional content.",
    "Brand films, product videos, testimonial videos, and promotional content with cinematic quality."
  ),
  createService(
    "drone-photography",
    "Drone Photography",
    "Aerial photography that reveals scale, beauty, and perspective.",
    "Licensed drone pilots capture stunning aerial imagery for real estate, tourism, infrastructure, and events."
  ),
  createService(
    "drone-videography",
    "Drone Videography",
    "Cinematic aerial videography for films, commercials, and corporate projects.",
    "4K and beyond aerial footage with professional color grading and seamless integration."
  ),
  createService(
    "drone-flight-training",
    "Drone Flight Training",
    "Professional drone pilot training and certification programs.",
    "Comprehensive flight training covering regulations, safety, cinematography techniques, and commercial operations."
  ),
  createService(
    "graphic-design",
    "Graphic Design",
    "Premium graphic design for print, digital, and environmental applications.",
    "Brochures, annual reports, infographics, packaging, and marketing collateral with meticulous attention to detail."
  ),
  createService(
    "graphics-designing",
    "Graphics Designing",
    "Creative graphics design services for all brand and marketing touchpoints.",
    "Visual communication design that strengthens brand identity across every channel."
  ),
  createService(
    "motion-graphics",
    "Motion Graphics",
    "Dynamic motion graphics and animated content that captivates audiences.",
    "Explainer videos, title sequences, social media animations, and broadcast graphics."
  ),
  createService(
    "video-editing",
    "Video Editing",
    "Professional video editing with color grading, sound design, and visual effects.",
    "Post-production services for commercials, documentaries, corporate videos, and social content."
  ),
  createService(
    "photography",
    "Photography",
    "Professional photography services for corporate, editorial, and commercial needs.",
    "Portrait, product, event, and architectural photography with premium production values."
  ),
  createService(
    "media-buying",
    "Media Buying",
    "Strategic media planning and buying across TV, digital, print, and outdoor channels.",
    "Maximize reach and ROI with data-driven media strategies and negotiated rates."
  ),
  createService(
    "creative-direction",
    "Creative Direction",
    "Visionary creative direction that unifies campaigns across all touchpoints.",
    "Our creative directors ensure every asset aligns with brand strategy and delivers maximum impact."
  ),
  createService(
    "content-marketing",
    "Content Marketing",
    "Strategic content programs that educate, engage, and convert your target audience.",
    "Content strategy, creation, distribution, and performance optimization across all digital channels."
  ),
  createService(
    "content-creation",
    "Content Creation",
    "Premium content production for social media, websites, and marketing campaigns.",
    "Written, visual, and video content crafted to resonate with your audience and drive engagement."
  ),
  createService(
    "advertisement",
    "Advertisement",
    "Full-service advertising campaigns from concept to multi-channel deployment.",
    "Creative advertising that breaks through the noise and drives measurable business results.",
    true
  ),
  createService(
    "podcast-production",
    "Podcast Production",
    "Professional podcast recording, editing, and distribution services.",
    "Studio-quality podcast production with professional audio engineering and branding."
  ),
  createService(
    "studio-rental",
    "Studio Rental Services",
    "Professional studio spaces equipped for photography, video, and podcast production.",
    "State-of-the-art studio facilities with professional lighting, backdrops, and equipment."
  ),
  createService(
    "digital-transformation",
    "Digital Transformation",
    "End-to-end digital transformation consulting and implementation for modern enterprises.",
    "Technology strategy, process digitization, CMS migration, and digital experience optimization.",
    true
  ),
];
