import { getSettings } from "@/lib/cms/queries";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/shared/page-hero";

export async function generateMetadata() {
  const settings = await getSettings();
  return buildMetadata(
    { title: "Terms of Service | Public Relation Nepal", description: "Terms of service for Public Relation Nepal website." },
    settings
  );
}

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms of Service" breadcrumbs={[{ label: "Terms of Service" }]} />
      <section className="section-padding bg-white">
        <div className="container-wide max-w-3xl prose-custom">
          <p>By accessing and using the Public Relation Nepal website, you agree to these terms of service.</p>
          <h2>Use of Website</h2>
          <p>This website is provided for informational purposes. Content may not be reproduced without written permission.</p>
          <h2>Intellectual Property</h2>
          <p>All content, branding, and creative work displayed on this website is the property of Public Relation Nepal or its clients and is protected by applicable copyright laws.</p>
          <h2>Limitation of Liability</h2>
          <p>Public Relation Nepal is not liable for any damages arising from the use of this website or reliance on its content.</p>
          <h2>Contact</h2>
          <p>For questions about these terms, contact info@publicrelationnepal.com.</p>
        </div>
      </section>
    </>
  );
}
