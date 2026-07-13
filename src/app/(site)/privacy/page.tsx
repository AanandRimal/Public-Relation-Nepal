import { getSettings } from "@/lib/cms/queries";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/shared/page-hero";

export async function generateMetadata() {
  const settings = await getSettings();
  return buildMetadata(
    { title: "Privacy Policy | Public Relation Nepal", description: "Privacy policy for Public Relation Nepal website." },
    settings
  );
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" breadcrumbs={[{ label: "Privacy Policy" }]} />
      <section className="section-padding bg-white">
        <div className="container-wide max-w-3xl prose-custom">
          <p>Public Relation Nepal respects your privacy. This policy describes how we collect, use, and protect personal information submitted through our website.</p>
          <h2>Information We Collect</h2>
          <p>We collect information you provide through contact forms, newsletter subscriptions, and career applications — including name, email, phone number, company, and message content.</p>
          <h2>How We Use Information</h2>
          <p>We use your information to respond to inquiries, provide services, send requested materials, and improve our communications.</p>
          <h2>Data Protection</h2>
          <p>We implement appropriate security measures to protect your personal information against unauthorized access or disclosure.</p>
          <h2>Contact</h2>
          <p>For privacy-related questions, contact us at info@publicrelationnepal.com.</p>
        </div>
      </section>
    </>
  );
}
