import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import type { SiteSettings } from "@/domain/types";

interface FooterProps {
  settings: SiteSettings;
}

export function Footer({ settings }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-brand text-white font-display font-bold text-sm">
                PR
              </div>
              <div>
                <span className="font-display font-bold text-lg">Public Relation </span>
                <span className="font-display font-bold text-lg text-green-400">Nepal</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {settings.tagline}
            </p>
            <div className="flex gap-3">
              {Object.entries(settings.social).map(([platform, url]) =>
                url ? (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors text-slate-400 hover:text-white text-xs uppercase font-semibold"
                    aria-label={platform}
                  >
                    {platform[0].toUpperCase()}
                  </a>
                ) : null
              )}
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-slate-300 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {settings.footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-slate-300 mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Public Relations", href: "/services/public-relations" },
                { label: "Corporate Branding", href: "/services/corporate-branding" },
                { label: "Film Production", href: "/services/film-production" },
                { label: "AI Advertising", href: "/services/ai-advertising" },
                { label: "Digital Marketing", href: "/services/digital-marketing" },
                { label: "Web Development", href: "/services/web-development" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-slate-300 mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a href={`mailto:${settings.contact.email}`} className="flex items-start gap-3 text-sm text-slate-400 hover:text-white transition-colors">
                  <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                  {settings.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${settings.contact.phone}`} className="flex items-start gap-3 text-sm text-slate-400 hover:text-white transition-colors">
                  <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                  {settings.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                {settings.contact.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} {settings.siteName}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
