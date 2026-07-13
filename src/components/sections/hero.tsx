"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, CountUp } from "@/components/motion/fade-in";
import type { HeroSection } from "@/domain/types";

interface HeroProps {
  data: HeroSection;
}

export function Hero({ data }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-charcoal">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-charcoal/95 to-green-900/80" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59,130,246,0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(16,185,129,0.2) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="container-wide relative z-10 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl">
          <FadeIn delay={0.1}>
            <p className="text-green-400 text-sm font-semibold uppercase tracking-[0.25em] mb-6">
              {data.eyebrow}
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
              {data.headline}
            </h1>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="mt-6 md:mt-8 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
              {data.subheadline}
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <Button asChild variant="premium" size="xl">
                <Link href={data.ctaPrimary.href}>
                  {data.ctaPrimary.label}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline-light" size="xl">
                <Link href={data.ctaSecondary.href}>
                  <Play className="h-4 w-4" />
                  {data.ctaSecondary.label}
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>

        {data.stats && (
          <FadeIn delay={0.65} className="mt-20 md:mt-28">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-8 border-t border-white/10">
              {data.stats.map((stat) => (
                <div key={stat.id}>
                  <div className="font-display text-3xl md:text-4xl font-bold text-white">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        )}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
