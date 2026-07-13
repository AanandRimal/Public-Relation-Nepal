import { getIndustries, getSettings } from "@/lib/cms/queries";
import { buildMetadata, breadcrumbSchema, jsonLd, SITE_URL } from "@/lib/seo/metadata";
import { PageHero } from "@/components/shared/page-hero";
import { IndustriesSection } from "@/components/sections/home-sections";
import { CTABanner } from "@/components/shared/cms-image";

export async function generateMetadata() {
  const settings = await getSettings();
  return buildMetadata(
    {
      title: "Industries We Serve | Public Relation Nepal",
      description: "Specialized communications expertise for government, education, healthcare, hospitality, finance, and more.",
    },
    settings
  );
}

export const revalidate = 3600;

export default async function IndustriesPage() {
  const industries = await getIndustries();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Industries", url: `${SITE_URL}/industries` },
          ])
        )}
      />

      <PageHero
        title="Industries We Serve"
        description="Deep sector expertise combined with world-class creative execution — trusted by organizations across South Asia."
        breadcrumbs={[{ label: "Industries" }]}
      />

      <IndustriesSection industries={industries} />

      <CTABanner
        title="Don't See Your Industry?"
        description="We adapt our expertise to unique sector challenges. Talk to our team."
        primaryLabel="Talk to Our Team"
        primaryHref="/contact?type=consultation"
      />
    </>
  );
}
