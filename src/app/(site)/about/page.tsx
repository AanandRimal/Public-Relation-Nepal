import { getAbout, getTeam, getClients, getAwards, getSettings } from "@/lib/cms/queries";
import { buildMetadata, breadcrumbSchema, jsonLd, SITE_URL } from "@/lib/seo/metadata";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Breadcrumbs, CTABanner } from "@/components/shared/cms-image";
import { ClientsSection, AwardsSection } from "@/components/sections/home-sections";
import Link from "next/link";

export async function generateMetadata() {
  const [about, settings] = await Promise.all([getAbout(), getSettings()]);
  return buildMetadata(about.seo, settings);
}

export const revalidate = 3600;

export default async function AboutPage() {
  const [about, team, clients, awards, settings] = await Promise.all([
    getAbout(),
    getTeam(),
    getClients(),
    getAwards(),
    getSettings(),
  ]);

  const leadership = team.filter((m) => m.department === "leadership" || m.department === "executive");
  const creative = team.filter((m) => m.department === "creative");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "About", url: `${SITE_URL}/about` },
          ])
        )}
      />

      <section className="pt-32 pb-16 bg-charcoal">
        <div className="container-wide">
          <Breadcrumbs items={[{ label: "About" }]} />
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl">
            {about.overview.title}
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <FadeIn>
            <div className="max-w-3xl">
              {about.overview.content.split("\n\n").map((p, i) => (
                <p key={i} className="text-lg text-slate-600 leading-relaxed mb-6">{p}</p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="story" className="section-padding bg-slate-50">
        <div className="container-wide">
          <FadeIn>
            <SectionHeader eyebrow="Our Story" title={about.story.title} />
            <div className="max-w-3xl">
              {about.story.content.split("\n\n").map((p, i) => (
                <p key={i} className="text-lg text-slate-600 leading-relaxed mb-6">{p}</p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeIn>
              <div className="p-8 rounded-xl bg-blue-50 border border-blue-100">
                <h2 className="font-display text-2xl font-bold text-blue-900">Our Mission</h2>
                <p className="mt-4 text-slate-600 leading-relaxed">{about.mission}</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="p-8 rounded-xl bg-green-50 border border-green-100">
                <h2 className="font-display text-2xl font-bold text-green-900">Our Vision</h2>
                <p className="mt-4 text-slate-600 leading-relaxed">{about.vision}</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <FadeIn>
            <SectionHeader eyebrow="Values" title="Core Values" align="center" />
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.values.map((value) => (
              <StaggerItem key={value.id}>
                <div className="p-6 rounded-xl bg-white border border-slate-100 text-center h-full">
                  <h3 className="font-display font-bold text-lg text-slate-900">{value.title}</h3>
                  <p className="mt-3 text-sm text-slate-500 leading-relaxed">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section id="leadership" className="section-padding bg-white">
        <div className="container-wide">
          <FadeIn>
            <SectionHeader eyebrow="Leadership" title="Executive Team" />
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((member) => (
              <StaggerItem key={member.id}>
                <div className="p-6 rounded-xl border border-slate-100 text-center">
                  <div className="h-24 w-24 rounded-full bg-gradient-brand mx-auto mb-4 flex items-center justify-center text-white font-display font-bold text-xl">
                    {member.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                  </div>
                  <h3 className="font-display font-bold text-slate-900">{member.name}</h3>
                  <p className="text-sm text-green-600 font-medium mt-1">{member.role}</p>
                  {member.bio && <p className="mt-3 text-sm text-slate-500">{member.bio}</p>}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <FadeIn>
            <SectionHeader eyebrow="Creative" title="Creative Team" />
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creative.map((member) => (
              <StaggerItem key={member.id}>
                <div className="p-6 rounded-xl bg-white border border-slate-100">
                  <h3 className="font-display font-bold text-slate-900">{member.name}</h3>
                  <p className="text-sm text-blue-800 font-medium mt-1">{member.role}</p>
                  {member.bio && <p className="mt-3 text-sm text-slate-500">{member.bio}</p>}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide max-w-3xl mx-auto">
          <FadeIn>
            <SectionHeader eyebrow="Timeline" title="Our Journey" align="center" />
          </FadeIn>
          <div className="space-y-8">
            {about.timeline.map((event, i) => (
              <FadeIn key={event.id} delay={i * 0.05}>
                <div className="flex gap-6">
                  <div className="font-display font-bold text-green-600 text-lg w-16 shrink-0">{event.year}</div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900">{event.title}</h3>
                    <p className="mt-1 text-slate-500">{event.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <AwardsSection awards={awards} />
      <ClientsSection clients={clients.filter(c => c.featured)} />

      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeIn>
              <SectionHeader eyebrow="CSR" title={about.csr.title} />
              <p className="text-slate-600 leading-relaxed">{about.csr.content}</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <SectionHeader eyebrow="Culture" title={about.culture.title} />
              <p className="text-slate-600 leading-relaxed">{about.culture.content}</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="careers" className="section-padding bg-white">
        <div className="container-wide text-center max-w-2xl mx-auto">
          <FadeIn>
            <SectionHeader eyebrow="Careers" title={about.careers.title} align="center" />
            <p className="text-slate-600 leading-relaxed mb-8">{about.careers.content}</p>
            <Link
              href={about.careers.ctaHref}
              className="inline-flex h-12 items-center justify-center rounded-md bg-blue-800 px-8 text-white font-semibold hover:bg-blue-900 transition-colors"
            >
              {about.careers.ctaLabel}
            </Link>
          </FadeIn>
        </div>
      </section>

      <CTABanner
        title="Let's Create Something Extraordinary"
        description="Partner with a team that shares your ambition for excellence."
      />
    </>
  );
}
