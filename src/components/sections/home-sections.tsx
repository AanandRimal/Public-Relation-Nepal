import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn, StaggerContainer, StaggerItem, CountUp } from "@/components/motion/fade-in";
import type { Statistic, ProcessStep, Testimonial, Client, Award, Industry } from "@/domain/types";
import Link from "next/link";
import { ArrowRight, Quote, Star } from "lucide-react";

export function StatsSection({ statistics }: { statistics: Statistic[] }) {
  return (
    <section className="section-padding bg-gradient-brand relative overflow-hidden">
      <div className="container-wide relative z-10">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {statistics.map((stat) => (
            <StaggerItem key={stat.id} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-white">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-blue-100 text-sm md:text-base">{stat.label}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export function ProcessSection({ steps }: { steps: ProcessStep[] }) {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <FadeIn>
          <SectionHeader
            eyebrow="How We Work"
            title="Our Creative Process"
            description="A proven methodology that delivers exceptional results, every time."
            align="center"
          />
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <StaggerItem key={step.id} className="text-center relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-800 text-white font-display font-bold text-lg mx-auto mb-4">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">{step.description}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export function WhyChooseUsSection({
  items,
}: {
  items: { id: string; title: string; description: string }[];
}) {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-wide">
        <FadeIn>
          <SectionHeader
            eyebrow="Why Us"
            title="Why Choose Public Relation Nepal"
            description="The strategic partner trusted by government, enterprise, and international organizations."
            align="center"
          />
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <StaggerItem key={item.id}>
              <div className="p-8 rounded-xl bg-white border border-slate-100 h-full">
                <h3 className="font-display text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="section-padding bg-charcoal">
      <div className="container-wide">
        <FadeIn>
          <SectionHeader
            eyebrow="Testimonials"
            title="What Our Clients Say"
            dark
            align="center"
          />
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.id}>
              <div className="p-8 rounded-xl bg-white/5 border border-white/10 h-full">
                <Quote className="h-8 w-8 text-green-400 mb-4" />
                <p className="text-slate-300 leading-relaxed text-lg italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="font-display font-semibold text-white">{t.author}</p>
                    <p className="text-sm text-slate-400">{t.role}, {t.company}</p>
                  </div>
                  {t.rating && (
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-green-400 text-green-400" />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export function ClientsSection({ clients }: { clients: Client[] }) {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <FadeIn>
          <SectionHeader
            eyebrow="Trusted By"
            title="Our Clients"
            description="Partnering with leading organizations across government, corporate, and international sectors."
            align="center"
          />
        </FadeIn>
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((client) => (
              <div
                key={client.id}
                className="flex items-center justify-center h-24 px-6 rounded-xl border border-slate-100 bg-slate-50 hover:border-blue-100 hover:bg-blue-50/30 transition-colors"
              >
                <span className="font-display font-semibold text-slate-600 text-sm text-center">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function AwardsSection({ awards }: { awards: Award[] }) {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-wide">
        <FadeIn>
          <SectionHeader eyebrow="Recognition" title="Awards & Recognition" align="center" />
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award) => (
            <StaggerItem key={award.id}>
              <div className="p-6 rounded-xl bg-white border border-slate-100 text-center h-full">
                <div className="text-green-600 font-display font-bold text-2xl mb-2">{award.year}</div>
                <h3 className="font-display font-semibold text-slate-900">{award.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{award.organization}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

export function IndustriesSection({ industries }: { industries: Industry[] }) {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <FadeIn>
          <SectionHeader
            eyebrow="Industries"
            title="Industries We Serve"
            description="Deep expertise across sectors that shape South Asia's future."
          />
        </FadeIn>
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry) => (
            <StaggerItem key={industry.id}>
              <Link
                href={`/industries/${industry.slug}`}
                className="group block p-6 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
              >
                <h3 className="font-display font-semibold text-slate-900 group-hover:text-blue-800 transition-colors">
                  {industry.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 line-clamp-2">{industry.shortDescription}</p>
                <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-blue-800 mt-3 transition-colors" />
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <FadeIn className="mt-8">
          <Link href="/industries" className="inline-flex items-center gap-2 text-blue-800 font-semibold hover:gap-3 transition-all">
            View All Industries <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

export function BlogPreviewSection({
  posts,
}: {
  posts: { slug: string; title: string; excerpt: string; category: string; publishedAt: string; readingTime: number }[];
}) {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-wide">
        <FadeIn>
          <SectionHeader eyebrow="Insights" title="Latest from Our Blog" />
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block p-6 rounded-xl bg-white border border-slate-100 hover:shadow-lg transition-all duration-300 h-full"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-green-600">{post.category}</span>
                <h3 className="mt-3 font-display text-lg font-bold text-slate-900 group-hover:text-blue-800 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 line-clamp-3">{post.excerpt}</p>
                <div className="mt-4 flex items-center gap-3 text-xs text-slate-400">
                  <span>{post.readingTime} min read</span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <FadeIn className="mt-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-blue-800 font-semibold hover:gap-3 transition-all">
            Read All Articles <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
