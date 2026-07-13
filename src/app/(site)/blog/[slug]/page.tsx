import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getBlogBySlug,
  getBlogs,
  getSettings,
} from "@/lib/cms/queries";
import {
  buildMetadata,
  breadcrumbSchema,
  articleSchema,
  jsonLd,
  SITE_URL,
} from "@/lib/seo/metadata";
import { FadeIn } from "@/components/motion/fade-in";
import { formatDate, extractHeadings } from "@/lib/utils";

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await getBlogs();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [post, settings] = await Promise.all([
    getBlogBySlug(slug),
    getSettings(),
  ]);
  if (!post) return {};
  return buildMetadata(post.seo, settings);
}

function renderMarkdownContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];
  let key = 0;

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={key++} className="list-disc pl-6 mb-6 space-y-2 text-slate-600">
          {listItems.map((item, i) => (
            <li key={i}>{item.replace(/^-\s*/, "")}</li>
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  for (const line of lines) {
    if (line.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={key++} id={line.slice(3).toLowerCase().replace(/\s+/g, "-")} className="font-display text-2xl font-bold text-slate-900 mt-10 mb-4">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={key++} className="font-display text-xl font-semibold text-slate-800 mt-8 mb-3">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("- ")) {
      listItems.push(line);
    } else if (line.trim()) {
      flushList();
      elements.push(
        <p key={key++} className="text-slate-600 leading-relaxed mb-6">
          {line}
        </p>
      );
    }
  }
  flushList();
  return elements;
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post) notFound();

  const allPosts = await getBlogs();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug && (p.category === post.category || p.tags.some((t) => post.tags.includes(t))))
    .slice(0, 3);

  const headings = extractHeadings(post.content);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Blog", url: `${SITE_URL}/blog` },
            { name: post.title, url: `${SITE_URL}/blog/${post.slug}` },
          ])
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          articleSchema({
            title: post.title,
            description: post.excerpt,
            url: `${SITE_URL}/blog/${post.slug}`,
            publishedAt: post.publishedAt,
            author: post.author.name,
            image: post.coverImage?.url,
          })
        )}
      />

      <article>
        <section className="pt-32 pb-12 bg-charcoal">
          <div className="container-wide max-w-4xl">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li>/</li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li>/</li>
                <li className="text-white line-clamp-1">{post.title}</li>
              </ol>
            </nav>
            <span className="text-xs font-semibold uppercase tracking-wider text-green-400">
              {post.category}
            </span>
            <h1 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span>By {post.author.name}</span>
              <span>{formatDate(post.publishedAt)}</span>
              <span>{post.readingTime} min read</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs rounded-full bg-white/10 text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {headings.length > 0 && (
                <aside className="lg:col-span-1 order-2 lg:order-1">
                  <FadeIn>
                    <div className="sticky top-28 p-6 rounded-xl bg-slate-50 border border-slate-100">
                      <h2 className="font-display font-semibold text-sm uppercase tracking-wider text-slate-500 mb-4">
                        Table of Contents
                      </h2>
                      <ul className="space-y-2">
                        {headings.map((h) => (
                          <li key={h.id}>
                            <a
                              href={`#${h.id}`}
                              className="text-sm text-slate-600 hover:text-blue-800 transition-colors"
                            >
                              {h.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeIn>
                </aside>
              )}

              <div className={headings.length > 0 ? "lg:col-span-3 order-1 lg:order-2" : "lg:col-span-4 max-w-3xl mx-auto"}>
                <FadeIn>
                  <p className="text-xl text-slate-600 leading-relaxed mb-8 font-medium">{post.excerpt}</p>
                  <div className="prose-custom">{renderMarkdownContent(post.content)}</div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {relatedPosts.length > 0 && (
          <section className="section-padding bg-slate-50">
            <div className="container-wide">
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.id}
                    href={`/blog/${related.slug}`}
                    className="group block p-6 rounded-xl bg-white border border-slate-100 hover:shadow-md transition-all"
                  >
                    <span className="text-xs font-semibold text-green-600">{related.category}</span>
                    <h3 className="mt-2 font-display font-bold text-slate-900 group-hover:text-blue-800 transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500 line-clamp-2">{related.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
