import {
  getHomepage,
  getServices,
  getPortfolio,
  getIndustries,
  getTestimonials,
  getClients,
  getAwards,
  getBlogs,
  getSettings,
} from "@/lib/cms/queries";
import { buildMetadata, faqSchema, jsonLd } from "@/lib/seo/metadata";
import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import {
  StatsSection,
  ProcessSection,
  WhyChooseUsSection,
  TestimonialsSection,
  ClientsSection,
  AwardsSection,
  IndustriesSection,
  BlogPreviewSection,
} from "@/components/sections/home-sections";
import { FAQSection } from "@/components/sections/faq-section";
import { Newsletter } from "@/components/sections/newsletter";
import { CTABanner } from "@/components/shared/cms-image";

export async function generateMetadata() {
  const [homepage, settings] = await Promise.all([getHomepage(), getSettings()]);
  return buildMetadata(homepage.seo, settings);
}

export const revalidate = 3600;

export default async function HomePage() {
  const homepage = await getHomepage();
  const [allServices, allPortfolio, allIndustries, allTestimonials, allClients, allAwards, allBlogs] =
    await Promise.all([
      getServices(),
      getPortfolio(),
      getIndustries(),
      getTestimonials(),
      getClients(),
      getAwards(),
      getBlogs(),
    ]);

  const featuredServices = allServices.filter((s) =>
    homepage.featuredServiceIds.includes(s.id)
  );
  const featuredPortfolio = allPortfolio.filter((p) =>
    homepage.featuredPortfolioIds.includes(p.id)
  );
  const govProjects = allPortfolio.filter((p) =>
    homepage.governmentExperience.projectIds.includes(p.id)
  );
  const corpProjects = allPortfolio.filter((p) =>
    homepage.corporateExperience.projectIds.includes(p.id)
  );
  const aiProjects = allPortfolio.filter((p) =>
    homepage.aiShowcase.projectIds.includes(p.id)
  );
  const filmProjects = allPortfolio.filter((p) =>
    homepage.filmShowcase.projectIds.includes(p.id)
  );
  const industries = allIndustries.filter((i) =>
    homepage.industryIds.includes(i.id)
  );
  const testimonials = allTestimonials.filter((t) =>
    homepage.testimonialIds.includes(t.id)
  );
  const clients = allClients.filter((c) => homepage.clientIds.includes(c.id));
  const awards = allAwards.filter((a) => homepage.awardIds.includes(a.id));
  const blogs = allBlogs.filter((b) => homepage.featuredBlogIds.includes(b.id));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(faqSchema(homepage.faqs))}
      />

      <Hero data={homepage.hero} />

      <ServicesGrid services={featuredServices} />

      <PortfolioGrid projects={featuredPortfolio} />

      <PortfolioGrid
        projects={govProjects}
        title={homepage.governmentExperience.title}
        description={homepage.governmentExperience.description}
        eyebrow="Government"
      />

      <PortfolioGrid
        projects={corpProjects}
        title={homepage.corporateExperience.title}
        description={homepage.corporateExperience.description}
        eyebrow="Corporate"
        dark
      />

      <PortfolioGrid
        projects={aiProjects}
        title={homepage.aiShowcase.title}
        description={homepage.aiShowcase.description}
        eyebrow="AI Innovation"
      />

      <PortfolioGrid
        projects={filmProjects}
        title={homepage.filmShowcase.title}
        description={homepage.filmShowcase.description}
        eyebrow="Film Production"
        dark
      />

      <IndustriesSection industries={industries} />

      <StatsSection statistics={homepage.statistics} />

      <AwardsSection awards={awards} />

      <ClientsSection clients={clients} />

      <TestimonialsSection testimonials={testimonials} />

      <ProcessSection steps={homepage.processSteps} />

      <WhyChooseUsSection items={homepage.whyChooseUs} />

      <BlogPreviewSection posts={blogs} />

      <FAQSection faqs={homepage.faqs} />

      <Newsletter
        title={homepage.newsletter.title}
        description={homepage.newsletter.description}
      />

      <CTABanner
        title="Ready to Elevate Your Brand?"
        description="Partner with South Asia's premier communications agency. Book a consultation today."
        primaryLabel="Book Consultation"
        primaryHref="/contact?type=consultation"
        secondaryLabel="Request Proposal"
        secondaryHref="/contact?type=proposal"
      />
    </>
  );
}
