import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getServiceBySlug,
  getServices,
  getPortfolio,
  getTestimonials,
  getSettings,
} from "@/lib/cms/queries";
import {
  buildMetadata,
  breadcrumbSchema,
  serviceSchema,
  faqSchema,
  jsonLd,
  SITE_URL,
} from "@/lib/seo/metadata";
import { PageHero } from "@/components/shared/page-hero";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { FAQSection } from "@/components/sections/faq-section";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { CTABanner, CmsImage } from "@/components/shared/cms-image";
import { ArrowRight } from "lucide-react";

export const revalidate = 3600;

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [service, settings] = await Promise.all([getServiceBySlug(slug), getSettings()]);
  if (!service) return {};
  return buildMetadata(service.seo, settings);
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();

  const [allServices, allPortfolio, testimonials] = await Promise.all([
    getServices(),
    getPortfolio(),
    getTestimonials(),
  ]);

  const relatedServices = allServices.filter((s) =>
    service.relatedServiceSlugs?.includes(s.slug)
  ).slice(0, 3);

  const relatedPortfolio = allPortfolio.slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Services", url: `${SITE_URL}/services` },
            { name: service.title, url: `${SITE_URL}/services/${service.slug}` },
          ])
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          serviceSchema({
            title: service.title,
            description: service.shortDescription,
            url: `${SITE_URL}/services/${service.slug}`,
          })
        )}
      />
      {service.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(faqSchema(service.faqs))}
        />
      )}

      <PageHero
        title={service.title}
        description={service.shortDescription}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      {service.heroImage && (
        <section className="relative aspect-[21/9] max-h-[500px] overflow-hidden bg-charcoal">
          <CmsImage image={service.heroImage} fill priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
        </section>
      )}

      <section className="section-padding bg-white">
        <div className="container-wide">
          <FadeIn>
            <div className="max-w-3xl">
              <p className="text-lg text-slate-600 leading-relaxed">{service.description}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {service.gallery && service.gallery.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-wide">
            <FadeIn>
              <SectionHeader eyebrow="Gallery" title="A Closer Look" align="center" />
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {service.gallery.map((img, i) => (
                <StaggerItem key={i} className={i === 0 ? "md:col-span-2 md:row-span-2" : ""}>
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
                    <CmsImage image={img} fill sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <FadeIn>
            <SectionHeader eyebrow="Benefits" title="Why Choose This Service" align="center" />
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.benefits.map((benefit) => (
              <StaggerItem key={benefit.id}>
                <div className="p-8 rounded-xl bg-white border border-slate-100 h-full">
                  <h3 className="font-display font-bold text-lg text-slate-900">{benefit.title}</h3>
                  <p className="mt-3 text-slate-500 leading-relaxed">{benefit.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <FadeIn>
            <SectionHeader eyebrow="Process" title="Our Approach" align="center" />
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {service.process.map((step, index) => (
              <StaggerItem key={step.id} className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-800 text-white font-display font-bold mx-auto mb-4">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{step.description}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {relatedPortfolio.length > 0 && (
        <PortfolioGrid
          projects={relatedPortfolio}
          title="Related Work"
          description="Case studies showcasing our expertise in action."
          eyebrow="Portfolio"
          showAll={false}
        />
      )}

      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <FadeIn>
            <SectionHeader eyebrow="Testimonials" title="Client Feedback" align="center" />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.slice(0, 2).map((t) => (
              <FadeIn key={t.id}>
                <div className="p-6 rounded-xl bg-white border border-slate-100">
                  <p className="text-slate-600 italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <p className="mt-4 font-display font-semibold text-slate-900">{t.author}</p>
                  <p className="text-sm text-slate-500">{t.role}, {t.company}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {service.faqs.length > 0 && <FAQSection faqs={service.faqs} />}

      {relatedServices.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-wide">
            <FadeIn>
              <SectionHeader eyebrow="Related" title="Related Services" />
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedServices.map((s) => (
                <Link
                  key={s.id}
                  href={`/services/${s.slug}`}
                  className="group flex items-center justify-between p-6 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all"
                >
                  <span className="font-display font-semibold text-slate-900 group-hover:text-blue-800 transition-colors">
                    {s.title}
                  </span>
                  <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-blue-800" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title={`Start Your ${service.title} Project`}
        description="Book a consultation with our experts to discuss your requirements."
        primaryLabel="Book Consultation"
        primaryHref="/contact?type=consultation"
        secondaryLabel="Request Proposal"
        secondaryHref="/contact?type=proposal"
      />
    </>
  );
}
