import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getIndustryBySlug,
  getIndustries,
  getServices,
  getSettings,
} from "@/lib/cms/queries";
import {
  buildMetadata,
  breadcrumbSchema,
  jsonLd,
  SITE_URL,
} from "@/lib/seo/metadata";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { CTABanner } from "@/components/shared/cms-image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const revalidate = 3600;

export async function generateStaticParams() {
  const industries = await getIndustries();
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [industry, settings] = await Promise.all([
    getIndustryBySlug(slug),
    getSettings(),
  ]);
  if (!industry) return {};
  return buildMetadata(industry.seo, settings);
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = await getIndustryBySlug(slug);
  if (!industry) notFound();

  const allServices = await getServices();
  const relatedServices = allServices.filter((s) =>
    industry.relatedServiceSlugs?.includes(s.slug)
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Industries", url: `${SITE_URL}/industries` },
            { name: industry.title, url: `${SITE_URL}/industries/${industry.slug}` },
          ])
        )}
      />

      <PageHero
        title={industry.title}
        description={industry.shortDescription}
        breadcrumbs={[
          { label: "Industries", href: "/industries" },
          { label: industry.title },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-lg text-slate-600 leading-relaxed">{industry.description}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <FadeIn>
            <SectionHeader eyebrow="Expertise" title={`Our ${industry.title} Capabilities`} align="center" />
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {industry.expertise.map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-100">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-wide">
            <FadeIn>
              <SectionHeader eyebrow="Services" title="Relevant Services" />
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedServices.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group flex items-center justify-between p-6 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all"
                >
                  <div>
                    <h3 className="font-display font-semibold text-slate-900 group-hover:text-blue-800 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500 line-clamp-2">{service.shortDescription}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-blue-800 shrink-0 ml-4" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title={`Partner With Us for ${industry.title}`}
        description="Industry-specific strategies backed by proven results."
        primaryLabel="Request Proposal"
        primaryHref="/contact?type=proposal"
      />
    </>
  );
}
