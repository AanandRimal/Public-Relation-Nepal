import Link from "next/link";
import { getBlogs, getSettings } from "@/lib/cms/queries";
import { buildMetadata, breadcrumbSchema, jsonLd, SITE_URL } from "@/lib/seo/metadata";
import { PageHero } from "@/components/shared/page-hero";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { formatDate } from "@/lib/utils";

export async function generateMetadata() {
  const settings = await getSettings();
  return buildMetadata(
    {
      title: "Insights & Blog | Public Relation Nepal",
      description: "Expert insights on PR, branding, film production, digital marketing, and AI advertising.",
    },
    settings
  );
}

export const revalidate = 3600;

export default async function BlogPage() {
  const posts = await getBlogs();
  const categories = [...new Set(posts.map((p) => p.category))];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Blog", url: `${SITE_URL}/blog` },
          ])
        )}
      />

      <PageHero
        title="Insights & Perspectives"
        description="Strategic thinking on communications, creativity, and digital innovation from our team."
        breadcrumbs={[{ label: "Blog" }]}
      />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 rounded-full text-sm font-medium bg-slate-100 text-slate-600"
              >
                {cat}
              </span>
            ))}
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <StaggerItem key={post.id}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block p-6 rounded-xl border border-slate-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300 h-full"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-green-600">
                    {post.category}
                  </span>
                  <h2 className="mt-3 font-display text-xl font-bold text-slate-900 group-hover:text-blue-800 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-slate-500 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-slate-400">
                    <span>{formatDate(post.publishedAt)}</span>
                    <span>{post.readingTime} min read</span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
