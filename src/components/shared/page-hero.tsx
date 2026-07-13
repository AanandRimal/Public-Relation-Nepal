import { Breadcrumbs } from "@/components/shared/cms-image";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumbs: { label: string; href?: string }[];
  className?: string;
}

export function PageHero({ title, description, breadcrumbs, className }: PageHeroProps) {
  return (
    <section className={cn("pt-32 pb-16 bg-charcoal", className)}>
      <div className="container-wide">
        <Breadcrumbs items={breadcrumbs} />
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-[1.05]">
          {title}
        </h1>
        {description && (
          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  );
}
