import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CmsImage } from "@/components/shared/cms-image";
import { FadeIn } from "@/components/motion/fade-in";
import type { Service } from "@/domain/types";

interface StudioSpotlightProps {
  service: Service;
  eyebrow?: string;
  title: string;
  description?: string;
  ctaLabel?: string;
}

export function StudioSpotlight({ service, eyebrow, title, description, ctaLabel }: StudioSpotlightProps) {
  const image = service.gallery?.[0] ?? service.heroImage;

  return (
    <section className="relative overflow-hidden bg-charcoal">
      <div className="container-wide grid grid-cols-1 lg:grid-cols-2 items-center gap-12 py-20 lg:py-28">
        <FadeIn>
          {eyebrow && (
            <span className="text-xs font-semibold uppercase tracking-wider text-green-400">
              {eyebrow}
            </span>
          )}
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-slate-300 leading-relaxed max-w-lg">
            {description || service.shortDescription}
          </p>
          <Link
            href={`/services/${service.slug}`}
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-md bg-white px-8 text-sm font-semibold text-blue-900 hover:bg-blue-50 transition-colors"
          >
            {ctaLabel || "Learn More"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            {image && <CmsImage image={image} fill sizes="(max-width: 1024px) 100vw, 50vw" />}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
