import Link from "next/link";
import { getResources, getSettings } from "@/lib/cms/queries";
import { buildMetadata, breadcrumbSchema, jsonLd, SITE_URL } from "@/lib/seo/metadata";
import { PageHero } from "@/components/shared/page-hero";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { FAQSection } from "@/components/sections/faq-section";
import { CTABanner } from "@/components/shared/cms-image";
import { formatDate } from "@/lib/utils";
import { Download, FileText, BookOpen, Megaphone } from "lucide-react";

const typeIcons = {
  "case-study": FileText,
  download: Download,
  "media-kit": Megaphone,
  whitepaper: BookOpen,
  "press-release": Megaphone,
};

const typeLabels = {
  "case-study": "Case Study",
  download: "Download",
  "media-kit": "Media Kit",
  whitepaper: "Whitepaper",
  "press-release": "Press Release",
};

const resourceFaqs = [
  {
    id: "1",
    question: "How do I download the company profile?",
    answer: "Visit our Resources page and click on Company Profile 2025, or contact us directly and we'll send it to your email within 24 hours.",
  },
  {
    id: "2",
    question: "Can I use your logo and brand assets?",
    answer: "Media partners can download our official Media Kit which includes logos, brand guidelines, and executive bios. For other uses, please contact our PR team.",
  },
  {
    id: "3",
    question: "Do you publish case studies?",
    answer: "Yes. We regularly publish detailed case studies showcasing our work across government, corporate, and international projects.",
  },
];

export async function generateMetadata() {
  const settings = await getSettings();
  return buildMetadata(
    {
      title: "Resources | Public Relation Nepal",
      description: "Downloads, case studies, media kit, whitepapers, and press releases.",
    },
    settings
  );
}

export const revalidate = 3600;

export default async function ResourcesPage() {
  const resources = await getResources();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Resources", url: `${SITE_URL}/resources` },
          ])
        )}
      />

      <PageHero
        title="Resources"
        description="Company profile, media kit, whitepapers, case studies, and press releases."
        breadcrumbs={[{ label: "Resources" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource) => {
              const Icon = typeIcons[resource.type];
              return (
                <StaggerItem key={resource.id}>
                  <Link
                    href={`/resources/${resource.slug}`}
                    className="group flex gap-5 p-6 rounded-xl border border-slate-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-800 group-hover:bg-blue-800 group-hover:text-white transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-green-600">
                        {typeLabels[resource.type]}
                      </span>
                      <h2 className="mt-1 font-display text-lg font-bold text-slate-900 group-hover:text-blue-800 transition-colors">
                        {resource.title}
                      </h2>
                      <p className="mt-2 text-sm text-slate-500">{resource.excerpt}</p>
                      <p className="mt-3 text-xs text-slate-400">{formatDate(resource.publishedAt)}</p>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <FAQSection faqs={resourceFaqs} title="Resources FAQ" />

      <CTABanner
        title="Download Our Company Profile"
        description="Get a comprehensive overview of our capabilities, case studies, and client testimonials."
        primaryLabel="Download Company Profile"
        primaryHref="/resources/company-profile-2025"
      />
    </>
  );
}
