import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ImageAsset } from "@/domain/types";

interface CmsImageProps {
  image: ImageAsset;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
}

export function CmsImage({
  image,
  className,
  fill,
  priority,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: CmsImageProps) {
  if (fill) {
    return (
      <Image
        src={image.url}
        alt={image.alt}
        fill
        className={cn("object-cover", className)}
        priority={priority}
        sizes={sizes}
      />
    );
  }

  return (
    <Image
      src={image.url}
      alt={image.alt}
      width={image.width ?? 800}
      height={image.height ?? 600}
      className={className}
      priority={priority}
      sizes={sizes}
    />
  );
}

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
        <li>
          <Link href="/" className="hover:text-blue-800 transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-blue-800 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-900 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

interface CTABannerProps {
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTABanner({
  title,
  description,
  primaryLabel = "Book Consultation",
  primaryHref = "/contact?type=consultation",
  secondaryLabel = "View Our Work",
  secondaryHref = "/portfolio",
}: CTABannerProps) {
  return (
    <section className="bg-gradient-brand relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="container-wide section-padding relative z-10 text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">{description}</p>
        )}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className="inline-flex h-13 items-center justify-center rounded-md bg-white px-8 text-base font-semibold text-blue-900 hover:bg-blue-50 transition-all shadow-lg"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex h-13 items-center justify-center rounded-md border border-white/30 px-8 text-base font-semibold text-white hover:bg-white/10 transition-all"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
