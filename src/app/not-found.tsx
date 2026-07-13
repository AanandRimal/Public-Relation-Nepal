import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-slate-50">
      <div className="text-center px-4">
        <p className="text-green-600 font-display font-bold text-sm uppercase tracking-widest">404</p>
        <h1 className="mt-4 font-display text-4xl md:text-5xl font-bold text-slate-900">
          Page Not Found
        </h1>
        <p className="mt-4 text-slate-500 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
