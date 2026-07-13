"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  type?: string;
  className?: string;
}

export function ContactForm({ type = "general", className }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log("Form submitted:", { ...data, type });
    await new Promise((r) => setTimeout(r, 1500));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("space-y-5", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
            Full Name *
          </label>
          <input
            {...register("name")}
            id="name"
            className="w-full h-11 px-4 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
            placeholder="Your name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
            Email Address *
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            className="w-full h-11 px-4 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
            placeholder="you@company.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
            Phone Number
          </label>
          <input
            {...register("phone")}
            id="phone"
            className="w-full h-11 px-4 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
            placeholder="+977 ..."
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
            Company / Organization
          </label>
          <input
            {...register("company")}
            id="company"
            className="w-full h-11 px-4 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
            placeholder="Your organization"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
          Message *
        </label>
        <textarea
          {...register("message")}
          id="message"
          rows={5}
          className="w-full px-4 py-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent resize-none"
          placeholder="Tell us about your project..."
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
      </div>

      <Button type="submit" disabled={isSubmitting} size="lg" className="w-full md:w-auto">
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      {isSubmitSuccessful && (
        <p className="text-sm text-green-600 font-medium">
          Thank you! Our team will respond within 24 hours.
        </p>
      )}
    </form>
  );
}
