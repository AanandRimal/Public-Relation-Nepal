import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import { getSettings } from "@/lib/cms/queries";
import { organizationSchema, localBusinessSchema, jsonLd } from "@/lib/seo/metadata";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings();
  return {
    title: {
      default: settings.seo.title,
      template: `%s | ${settings.siteName}`,
    },
    description: settings.seo.description,
    keywords: settings.seo.keywords,
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://publicrelationnepal.com"),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSettings();

  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(organizationSchema(settings))}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd(localBusinessSchema(settings))}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
