import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getPortfolioBySlug,
  getPortfolio,
  getSettings,
} from "@/lib/cms/queries";
import {
  buildMetadata,
  breadcrumbSchema,
  creativeWorkSchema,
  jsonLd,
  SITE_URL,
} from "@/lib/seo/metadata";
import { PageHero } from "@/components/shared/page-hero";
import { CmsImage } from "@/components/shared/cms-image";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { CTABanner } from "@/components/shared/cms-image";
import { ArrowRight } from "lucide-react";

export const revalidate = 3600;

export async function generateStaticParams() {
  const projects = await getPortfolio();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [project, settings] = await Promise.all([
    getPortfolioBySlug(slug),
    getSettings(),
  ]);
  if (!project) return {};
  return buildMetadata(project.seo, settings);
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getPortfolioBySlug(slug);
  if (!project) notFound();

  const allProjects = await getPortfolio();
  const relatedProjects = allProjects.filter((p) =>
    project.relatedProjectSlugs?.includes(p.slug)
  ).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Portfolio", url: `${SITE_URL}/portfolio` },
            { name: project.title, url: `${SITE_URL}/portfolio/${project.slug}` },
          ])
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          creativeWorkSchema({
            title: project.title,
            description: project.excerpt,
            url: `${SITE_URL}/portfolio/${project.slug}`,
            client: project.client,
            dateCreated: project.completedAt,
            image: project.heroImage.url,
          })
        )}
      />

      <section className="relative pt-32 pb-0 bg-charcoal">
        <div className="container-wide pb-12">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li>/</li>
              <li className="text-white">{project.title}</li>
            </ol>
          </nav>
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-400 bg-green-400/10 rounded-full mb-4">
            {project.category.replace(/-/g, " ")}
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white max-w-4xl">
            {project.title}
          </h1>
          <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-400">
            <span>Client: <strong className="text-white">{project.client}</strong></span>
            <span>Industry: <strong className="text-white">{project.industry}</strong></span>
          </div>
        </div>
        <div className="relative aspect-[21/9] max-h-[600px] overflow-hidden">
          <CmsImage image={project.heroImage} fill priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
        </div>
      </section>

      {project.gallery.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-wide">
            <FadeIn>
              <SectionHeader eyebrow="Gallery" title="Project Gallery" />
            </FadeIn>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.gallery.map((img, i) => (
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

      {project.videos && project.videos.length > 0 && (
        <section className="section-padding bg-slate-50">
          <div className="container-wide max-w-4xl">
            <FadeIn>
              <SectionHeader eyebrow="Video" title="Project Video" align="center" />
            </FadeIn>
            {project.videos.map((video, i) => (
              <FadeIn key={i}>
                <div className="relative aspect-video rounded-xl overflow-hidden bg-charcoal">
                  <iframe
                    src={video.url}
                    title={video.title ?? project.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      )}

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeIn>
              <h2 className="font-display text-2xl font-bold text-slate-900">The Challenge</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">{project.challenge}</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-display text-2xl font-bold text-slate-900">Our Solution</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">{project.solution}</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <FadeIn>
            <SectionHeader eyebrow="Process" title="Creative Process" align="center" />
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {project.creativeProcess.map((step, index) => (
              <StaggerItem key={step.id}>
                <div className="p-6 rounded-xl bg-white border border-slate-100 h-full">
                  <span className="font-display font-bold text-green-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn>
              <SectionHeader eyebrow="Deliverables" title="What We Delivered" />
              <ul className="space-y-3">
                {project.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700 text-xs font-bold">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.1}>
              <SectionHeader eyebrow="Results" title="Impact & Results" />
              <div className="grid grid-cols-2 gap-4">
                {project.results.map((result, i) => (
                  <div key={i} className="p-6 rounded-xl bg-blue-50 border border-blue-100 text-center">
                    <div className="font-display text-2xl font-bold text-blue-900">{result.value}</div>
                    <p className="mt-1 text-sm text-slate-600">{result.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {project.testimonial && (
        <section className="section-padding bg-charcoal">
          <div className="container-wide max-w-3xl text-center">
            <FadeIn>
              <blockquote className="text-xl md:text-2xl text-slate-300 italic leading-relaxed">
                &ldquo;{project.testimonial.quote}&rdquo;
              </blockquote>
              <p className="mt-6 font-display font-semibold text-white">{project.testimonial.author}</p>
              <p className="text-sm text-slate-400">{project.testimonial.role}, {project.testimonial.company}</p>
            </FadeIn>
          </div>
        </section>
      )}

      {relatedProjects.length > 0 && (
        <section className="section-padding bg-slate-50">
          <div className="container-wide">
            <FadeIn>
              <SectionHeader eyebrow="More Work" title="Related Projects" />
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((p) => (
                <Link
                  key={p.id}
                  href={`/portfolio/${p.slug}`}
                  className="group block p-6 rounded-xl bg-white border border-slate-100 hover:shadow-lg transition-all"
                >
                  <h3 className="font-display font-bold text-slate-900 group-hover:text-blue-800 transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 line-clamp-2">{p.excerpt}</p>
                  <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-blue-800 mt-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title="Inspired? Let's Create Together"
        description="Bring your next project to South Asia's premier creative agency."
        primaryLabel="Book Consultation"
        primaryHref="/contact?type=consultation"
      />
    </>
  );
}
