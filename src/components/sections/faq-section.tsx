"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";
import type { FAQ } from "@/domain/types";

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
}

export function FAQSection({ faqs, title = "Frequently Asked Questions" }: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section className="section-padding bg-white">
      <div className="container-wide max-w-3xl">
        <FadeIn>
          <SectionHeader title={title} eyebrow="FAQ" align="center" />
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <FadeIn key={faq.id}>
              <div className="border border-slate-100 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="flex w-full items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                  aria-expanded={openId === faq.id}
                >
                  <span className="font-display font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300",
                      openId === faq.id && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openId === faq.id ? "max-h-96" : "max-h-0"
                  )}
                >
                  <p className="px-6 pb-6 text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
