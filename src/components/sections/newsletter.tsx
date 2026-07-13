"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type NewsletterForm = z.infer<typeof newsletterSchema>;

interface NewsletterProps {
  title: string;
  description: string;
}

export function Newsletter({ title, description }: NewsletterProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<NewsletterForm>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 1000));
    reset();
  };

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-wide max-w-2xl text-center">
        <FadeIn>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900">{title}</h2>
          <p className="mt-4 text-slate-500 text-lg">{description}</p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              {...register("email")}
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 px-4 rounded-md border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
            />
            <Button type="submit" disabled={isSubmitting} size="lg" className="shrink-0">
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          {errors.email && (
            <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
          )}
          {isSubmitSuccessful && (
            <p className="mt-4 text-sm text-green-600 font-medium">
              Thank you for subscribing!
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
