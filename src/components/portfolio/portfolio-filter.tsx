"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { PortfolioProject } from "@/domain/types";
import { portfolioCategories } from "@/data/portfolio";
import { CmsImage } from "@/components/shared/cms-image";
import { Suspense } from "react";

function PortfolioFilter({ projects }: { projects: PortfolioProject[] }) {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");

  const filtered = activeCategory
    ? projects.filter((p) => p.category === activeCategory)
    : projects;

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-10">
        <Link
          href="/portfolio"
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            !activeCategory
              ? "bg-blue-800 text-white"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          )}
        >
          All
        </Link>
        {portfolioCategories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/portfolio?category=${cat.slug}`}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors",
              activeCategory === cat.slug
                ? "bg-blue-800 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            )}
          >
            {cat.label}
          </Link>
        ))}
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
        <p className="text-center text-slate-500 py-12">No projects found in this category.</p>
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
