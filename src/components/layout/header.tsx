"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { NavigationItem, SiteSettings } from "@/domain/types";

interface HeaderProps {
  settings: SiteSettings;
}

export function Header({ settings }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      )}
    >
      <div className="container-wide">
        <div className="flex h-18 md:h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-brand text-white font-display font-bold text-sm">
              PR
            </div>
            <div className="hidden sm:block">
              <span className={cn(
                "font-display font-bold text-lg tracking-tight transition-colors",
                isScrolled ? "text-slate-900" : "text-white"
              )}>
                Public Relation
              </span>
              <span className={cn(
                "font-display font-bold text-lg tracking-tight ml-1 transition-colors",
                isScrolled ? "text-green-600" : "text-green-400"
              )}>
                Nepal
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {settings.navigation.map((item) => (
              <NavItem
                key={item.href}
                item={item}
                isScrolled={isScrolled}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${settings.contact.phone}`}
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors",
                isScrolled ? "text-slate-600 hover:text-blue-800" : "text-white/80 hover:text-white"
              )}
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">{settings.contact.phone}</span>
            </a>
            <Button asChild variant={isScrolled ? "default" : "premium"} size="default">
              <Link href={settings.cta.primaryHref}>{settings.cta.primaryLabel}</Link>
            </Button>
          </div>

          <button
            className={cn(
              "lg:hidden p-2 rounded-md transition-colors",
              isScrolled ? "text-slate-900" : "text-white"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-18 bg-white z-40 overflow-y-auto">
          <nav className="container-wide py-8 space-y-1" aria-label="Mobile navigation">
            {settings.navigation.map((item) => (
              <MobileNavItem key={item.href} item={item} onClose={() => setIsOpen(false)} />
            ))}
            <div className="pt-6 border-t border-slate-100 mt-6">
              <Button asChild className="w-full" size="lg">
                <Link href={settings.cta.primaryHref} onClick={() => setIsOpen(false)}>
                  {settings.cta.primaryLabel}
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavItem({
  item,
  isScrolled,
  activeDropdown,
  setActiveDropdown,
}: {
  item: NavigationItem;
  isScrolled: boolean;
  activeDropdown: string | null;
  setActiveDropdown: (v: string | null) => void;
}) {
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        className={cn(
          "px-4 py-2 text-sm font-medium rounded-md transition-colors",
          isScrolled
            ? "text-slate-700 hover:text-blue-800 hover:bg-slate-50"
            : "text-white/90 hover:text-white hover:bg-white/10"
        )}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setActiveDropdown(item.label)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <button
        className={cn(
          "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors",
          isScrolled
            ? "text-slate-700 hover:text-blue-800 hover:bg-slate-50"
            : "text-white/90 hover:text-white hover:bg-white/10"
        )}
      >
        {item.label}
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", activeDropdown === item.label && "rotate-180")} />
      </button>
      {activeDropdown === item.label && (
        <div className="absolute top-full left-0 pt-2 min-w-[220px]">
          <div className="bg-white rounded-lg shadow-xl border border-slate-100 py-2 overflow-hidden">
            {item.children!.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-800 transition-colors"
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileNavItem({ item, onClose }: { item: NavigationItem; onClose: () => void }) {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className="block py-3 px-4 text-lg font-medium text-slate-900 hover:bg-slate-50 rounded-md"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between py-3 px-4 text-lg font-medium text-slate-900 hover:bg-slate-50 rounded-md"
      >
        {item.label}
        <ChevronDown className={cn("h-5 w-5 transition-transform", expanded && "rotate-180")} />
      </button>
      {expanded && (
        <div className="pl-4 space-y-1">
          {item.children!.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onClose}
              className="block py-2 px-4 text-base text-slate-600 hover:text-blue-800"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
