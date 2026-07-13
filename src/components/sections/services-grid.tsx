import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import type { Service } from "@/domain/types";

interface ServicesGridProps {
  services: Service[];
  title?: string;
  description?: string;
  showAll?: boolean;
}

export function ServicesGrid({
  services,
  title = "Our Services",
  description = "Integrated communications solutions for every strategic challenge.",
  showAll = true,
}: ServicesGridProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <FadeIn>
          <SectionHeader title={title} description={description} eyebrow="What We Do" />
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <StaggerItem key={service.id}>
              <Link
                href={`/services/${service.slug}`}
                className="group block p-8 rounded-xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50/50 transition-all duration-500 h-full"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-800 font-display font-bold text-sm group-hover:bg-blue-800 group-hover:text-white transition-colors duration-500">
                    {service.title.split(" ").slice(0, 2).map(w => w[0]).join("")}
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-slate-300 group-hover:text-blue-800 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-blue-800 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-slate-500 leading-relaxed line-clamp-3">
                  {service.shortDescription}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {showAll && (
          <FadeIn className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-blue-800 font-semibold hover:gap-3 transition-all"
            >
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
