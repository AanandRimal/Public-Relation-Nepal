"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { PortfolioProject } from "@/domain/types";
import { portfolioCategories } from "@/data/portfolio";
import { CmsImage } from "@/components/shared/cms-image";
import { Suspense } from "react";

function buildFilterHref(current: URLSearchParams, key: string, value: string | null) {
  const next = new URLSearchParams(current);
  if (value) next.set(key, value);
  else next.delete(key);
  const qs = next.toString();
  return qs ? `/portfolio?${qs}` : "/portfolio";
}

function FilterRow({
  label,
  options,
  activeValue,
  paramKey,
  searchParams,
}: {
  label: string;
  options: readonly { slug: string; label: string }[];
  activeValue: string | null;
  paramKey: string;
  searchParams: URLSearchParams;
}) {
  if (options.length === 0) return null;

  return (
    <div className="mb-4">
      <span className="mr-2 text-xs font-semibold uppercase tracking-wider text-slate-400">{label}</span>
      <div className="mt-2 flex flex-wrap gap-2">
        <Link
          href={buildFilterHref(searchParams, paramKey, null)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            !activeValue
              ? "bg-blue-800 text-white"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          )}
        >
          All
        </Link>
        {options.map((opt) => (
          <Link
            key={opt.slug}
            href={buildFilterHref(searchParams, paramKey, opt.slug)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors",
              activeValue === opt.slug
                ? "bg-blue-800 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            )}
          >
            {opt.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function PortfolioFilter({ projects }: { projects: PortfolioProject[] }) {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");
  const activeIndustry = searchParams.get("industry");

  const industryOptions = [...new Set(projects.map((p) => p.industry))]
    .sort()
    .map((industry) => ({ slug: industry, label: industry }));

  const filtered = projects.filter(
    (p) =>
      (!activeCategory || p.category === activeCategory) &&
      (!activeIndustry || p.industry === activeIndustry)
  );

  return (
    <>
      <div className="mb-10">
        <FilterRow
          label="Type"
          options={portfolioCategories}
          activeValue={activeCategory}
          paramKey="category"
          searchParams={searchParams}
        />
        <FilterRow
          label="Industry"
          options={industryOptions}
          activeValue={activeIndustry}
          paramKey="industry"
          searchParams={searchParams}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <Link
            key={project.id}
            href={`/portfolio/${project.slug}`}
            className="group block overflow-hidden rounded-xl border border-slate-100 hover:shadow-lg transition-all duration-500"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <CmsImage
                image={project.heroImage}
                fill
                className="transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-green-600">
                {project.category.replace(/-/g, " ")}
              </span>
              <h3 className="mt-2 font-display font-bold text-slate-900 group-hover:text-blue-800 transition-colors">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-slate-500 line-clamp-2">{project.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-slate-500 py-12">No projects match these filters.</p>
      )}
    </>
  );
}

export function PortfolioFilterGrid({ projects }: { projects: PortfolioProject[] }) {
  return (
    <Suspense fallback={<div className="h-96 animate-pulse bg-slate-100 rounded-xl" />}>
      <PortfolioFilter projects={projects} />
    </Suspense>
  );
}
