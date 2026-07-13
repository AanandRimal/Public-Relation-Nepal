"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ContactForm } from "@/components/forms/contact-form";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import type { SiteSettings } from "@/domain/types";

const formTypes = [
  { id: "consultation", label: "Book Consultation", description: "Schedule a strategy session with our experts." },
  { id: "proposal", label: "Request Proposal", description: "Get a detailed proposal for your project." },
  { id: "quotation", label: "Request Quotation", description: "Receive a cost estimate for your requirements." },
  { id: "career", label: "Career Application", description: "Apply to join our team." },
  { id: "general", label: "General Inquiry", description: "Any other questions or requests." },
];

function ContactContent({ settings }: { settings: SiteSettings }) {
  const searchParams = useSearchParams();
  const activeType = searchParams.get("type") ?? "consultation";
  const activeForm = formTypes.find((f) => f.id === activeType) ?? formTypes[0];

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8">
        {formTypes.map((type) => (
          <Link
            key={type.id}
            href={`/contact?type=${type.id}`}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors",
              activeType === type.id
                ? "bg-blue-800 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            )}
          >
            {type.label}
          </Link>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="font-display text-2xl font-bold text-slate-900">{activeForm.label}</h2>
        <p className="mt-2 text-slate-500">{activeForm.description}</p>
      </div>

      <ContactForm type={activeType} />
    </>
  );
}

interface ContactPageClientProps {
  settings: SiteSettings;
}

export function ContactPageClient({ settings }: ContactPageClientProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <Suspense fallback={<div className="h-96 animate-pulse bg-slate-100 rounded-xl" />}>
              <ContactContent settings={settings} />
            </Suspense>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
              <h3 className="font-display font-semibold text-slate-900 mb-4">Contact Information</h3>
              <ul className="space-y-4">
                <li>
                  <a href={`mailto:${settings.contact.email}`} className="flex items-start gap-3 text-slate-600 hover:text-blue-800 transition-colors">
                    <Mail className="h-5 w-5 shrink-0 mt-0.5" />
                    {settings.contact.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${settings.contact.phone}`} className="flex items-start gap-3 text-slate-600 hover:text-blue-800 transition-colors">
                    <Phone className="h-5 w-5 shrink-0 mt-0.5" />
                    {settings.contact.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${settings.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-slate-600 hover:text-green-600 transition-colors"
                  >
                    <MessageCircle className="h-5 w-5 shrink-0 mt-0.5" />
                    WhatsApp
                  </a>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                  {settings.contact.address}
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-blue-50 border border-blue-100">
              <h3 className="font-display font-semibold text-blue-900 mb-2">Response Time</h3>
              <p className="text-sm text-slate-600">
                We respond to all inquiries within 24 business hours. For urgent matters, call us directly.
              </p>
            </div>
          </div>
        </div>

        {settings.contact.mapEmbedUrl && (
          <div className="mt-16 rounded-xl overflow-hidden border border-slate-100 h-[400px]">
            <iframe
              src={settings.contact.mapEmbedUrl}
              title="Office Location"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}
      </div>
    </section>
  );
}
