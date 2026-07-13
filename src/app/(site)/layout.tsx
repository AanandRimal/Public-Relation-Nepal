import { getSettings } from "@/lib/cms/queries";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSettings();

  return (
    <>
      <Header settings={settings} />
      <main>{children}</main>
      <Footer settings={settings} />
    </>
  );
}
