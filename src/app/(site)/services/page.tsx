import { getServices, getSettings } from "@/lib/cms/queries";
import { buildMetadata, breadcrumbSchema, jsonLd, SITE_URL } from "@/lib/seo/metadata";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Breadcrumbs, CTABanner } from "@/components/shared/cms-image";

export async function generateMetadata() {
  const settings = await getSettings();
  return buildMetadata(
    {
      title: "Our Services | Public Relation Nepal",
      description: "Comprehensive PR, branding, film production, digital marketing, AI advertising, and digital transformation services.",
    },
    settings
  );
}

export const revalidate = 3600;

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Services", url: `${SITE_URL}/services` },
          ])
        )}
      />

      <section className="pt-32 pb-16 bg-charcoal">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: "Services" }]} />
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl">
            Integrated Communications Services
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl">
            From strategic public relations to cinematic film production and AI-powered advertising — one partner for your entire communication ecosystem.
          </p>
        </div>
      </section>

      <ServicesGrid
        services={services}
        title="All Services"
        description="Every service backed by strategic rigor and creative excellence."
        showAll={false}
      />

      <CTABanner
        title="Need a Custom Solution?"
        description="Our team designs bespoke communication strategies for unique challenges."
        primaryLabel="Request Proposal"
        primaryHref="/contact?type=proposal"
      />
    </>
  );
}
