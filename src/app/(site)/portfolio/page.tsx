import { getPortfolio, getSettings } from "@/lib/cms/queries";
import { buildMetadata, breadcrumbSchema, jsonLd, SITE_URL } from "@/lib/seo/metadata";
import { PageHero } from "@/components/shared/page-hero";
import { PortfolioFilterGrid } from "@/components/portfolio/portfolio-filter";
import { CTABanner } from "@/components/shared/cms-image";

export async function generateMetadata() {
  const settings = await getSettings();
  return buildMetadata(
    {
      title: "Portfolio | Public Relation Nepal",
      description: "Explore our portfolio of government campaigns, documentaries, TV commercials, branding, and digital projects.",
    },
    settings
  );
}

export const revalidate = 3600;

export default async function PortfolioPage() {
  const projects = await getPortfolio();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Portfolio", url: `${SITE_URL}/portfolio` },
          ])
        )}
      />

      <PageHero
        title="Our Work"
        description="Premium creative work for government, enterprise, and international organizations — from documentaries to AI advertising."
        breadcrumbs={[{ label: "Portfolio" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <PortfolioFilterGrid projects={projects} />
        </div>
      </section>

      <CTABanner
        title="Have a Project in Mind?"
        description="Let's discuss how we can bring your vision to life."
        primaryLabel="Start Your Project"
        primaryHref="/contact?type=consultation"
      />
    </>
  );
}
