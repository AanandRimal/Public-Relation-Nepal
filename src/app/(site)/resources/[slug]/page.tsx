import { notFound } from "next/navigation";
import Link from "next/link";
import { getResourceBySlug, getResources, getSettings } from "@/lib/cms/queries";
import { buildMetadata, breadcrumbSchema, jsonLd, SITE_URL } from "@/lib/seo/metadata";
import { PageHero } from "@/components/shared/page-hero";
import { FadeIn } from "@/components/motion/fade-in";
import { CTABanner } from "@/components/shared/cms-image";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const revalidate = 3600;

export async function generateStaticParams() {
  const resources = await getResources();
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [resource, settings] = await Promise.all([
    getResourceBySlug(slug),
    getSettings(),
  ]);
  if (!resource) return {};
  return buildMetadata(
    { title: `${resource.title} | Public Relation Nepal`, description: resource.excerpt },
    settings
  );
}

export default async function ResourceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = await getResourceBySlug(slug);
  if (!resource) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Resources", url: `${SITE_URL}/resources` },
            { name: resource.title, url: `${SITE_URL}/resources/${resource.slug}` },
          ])
        )}
      />

      <PageHero
        title={resource.title}
        description={resource.excerpt}
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: resource.title },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide max-w-3xl">
          <FadeIn>
            <p className="text-sm text-slate-400 mb-6">Published {formatDate(resource.publishedAt)}</p>
            <p className="text-lg text-slate-600 leading-relaxed">{resource.excerpt}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              {resource.fileUrl ? (
                <Button asChild size="lg">
                  <a href={resource.fileUrl} download>Download</a>
                </Button>
              ) : (
                <Button asChild size="lg">
                  <Link href="/contact?type=general">Request Access</Link>
                </Button>
              )}
              <Button asChild variant="outline" size="lg">
                <Link href="/contact?type=consultation">Contact Us</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTABanner
        title="Need More Information?"
        description="Our team is ready to provide additional resources and answer your questions."
        primaryLabel="Talk to Our Team"
        primaryHref="/contact?type=consultation"
      />
    </>
  );
}
