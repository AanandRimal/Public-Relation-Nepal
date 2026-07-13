import { getSettings } from "@/lib/cms/queries";
import { buildMetadata, breadcrumbSchema, jsonLd, SITE_URL } from "@/lib/seo/metadata";
import { PageHero } from "@/components/shared/page-hero";
import { ContactPageClient } from "@/components/contact/contact-page-client";

export async function generateMetadata() {
  const settings = await getSettings();
  return buildMetadata(
    {
      title: "Contact Us | Public Relation Nepal",
      description: "Book a consultation, request a proposal, or get in touch with our team.",
    },
    settings
  );
}

export const revalidate = 3600;

export default async function ContactPage() {
  const settings = await getSettings();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Contact", url: `${SITE_URL}/contact` },
          ])
        )}
      />

      <PageHero
        title="Get in Touch"
        description="Book a consultation, request a proposal, or start a conversation with our team."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <ContactPageClient settings={settings} />
    </>
  );
}
