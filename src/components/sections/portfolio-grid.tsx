import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { CmsImage } from "@/components/shared/cms-image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import type { PortfolioProject } from "@/domain/types";

interface PortfolioGridProps {
  projects: PortfolioProject[];
  title?: string;
  description?: string;
  eyebrow?: string;
  dark?: boolean;
  showAll?: boolean;
}

export function PortfolioGrid({
  projects,
  title = "Featured Work",
  description = "Premium creative work that delivers measurable impact.",
  eyebrow = "Portfolio",
  dark = false,
  showAll = true,
}: PortfolioGridProps) {
  return (
    <section className={dark ? "section-padding bg-charcoal" : "section-padding bg-slate-50"}>
      <div className="container-wide">
        <FadeIn>
          <SectionHeader
            title={title}
            description={description}
            eyebrow={eyebrow}
            dark={dark}
          />
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <StaggerItem key={project.id} className={index === 0 ? "md:col-span-2" : ""}>
              <Link
                href={`/portfolio/${project.slug}`}
                className="group block relative overflow-hidden rounded-xl aspect-[16/10] md:aspect-auto md:h-[400px]"
              >
                <CmsImage
                  image={project.heroImage}
                  fill
                  className="transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-400 bg-green-400/10 rounded-full mb-3">
                    {project.category.replace(/-/g, " ")}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-slate-300 line-clamp-2 max-w-lg">{project.excerpt}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {showAll && (
          <FadeIn className="mt-12 text-center">
            <Link
              href="/portfolio"
              className={`inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all ${
                dark ? "text-green-400" : "text-blue-800"
              }`}
            >
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
