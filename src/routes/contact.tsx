import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Facebook, MessageCircle, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Maison.Art — Free Décor Advice & Inquiries" },
      { name: "description", content: "Message us for paintings, frame rentals, and free décor advice. Email bestproduct2299@gmail.com." },
      { property: "og:title", content: "Contact — Maison.Art" },
      { property: "og:description", content: "Free décor advice. Reach out anytime." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  topic: z.enum(["Buy artwork", "Frame rental (realtor)", "Business décor", "Free advice"]),
  message: z.string().trim().min(10, "Tell us a bit more").max(1000),
});

type FormData = z.infer<typeof schema>;

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register, handleSubmit, formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema), defaultValues: { topic: "Buy artwork" } });

  const onSubmit = async (data: FormData) => {
    // Compose mailto fallback so the message gets sent without a backend
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nTopic: ${data.topic}\n\n${data.message}`
    );
    window.location.href = `mailto:bestproduct2299@gmail.com?subject=${encodeURIComponent("Inquiry from Maison.Art — " + data.topic)}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Contact</span>
          <h1 className="mt-3 font-display text-5xl font-semibold leading-tight md:text-6xl">
            Let's talk about your space.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            Tell us what you're looking for — a single statement piece, frames for staging, or a full décor refresh. We respond within 24 hours.
          </p>

          <div className="mt-10 space-y-4">
            <a href="mailto:bestproduct2299@gmail.com" className="flex items-center gap-3 text-sm hover:text-accent">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary"><Mail className="h-4 w-4" /></span>
              bestproduct2299@gmail.com
            </a>
            <a
              href="https://www.facebook.com/marketplace/profile/61573118591231/"
              target="_blank" rel="noreferrer"
              className="flex items-center gap-3 text-sm hover:text-accent"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary"><Facebook className="h-4 w-4" /></span>
              Message us on Facebook
            </a>
            <a
              href="https://wa.me/"
              target="_blank" rel="noreferrer"
              className="flex items-center gap-3 text-sm hover:text-accent"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary"><MessageCircle className="h-4 w-4" /></span>
              WhatsApp
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          {submitted ? (
            <div className="rounded-2xl border border-border bg-card p-10 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
                <Check className="h-5 w-5" />
              </div>
              <h2 className="mt-4 font-display text-2xl">Your email is ready to send</h2>
              <p className="mt-2 text-sm text-muted-foreground">We just opened your mail app with your message pre-filled. Hit send and we'll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 rounded-2xl border border-border bg-card p-8 md:p-10">
              <Field label="Your name" error={errors.name?.message}>
                <input {...register("name")} className="input" placeholder="Jane Doe" />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <input type="email" {...register("email")} className="input" placeholder="you@email.com" />
              </Field>
              <Field label="What's this about?" error={errors.topic?.message}>
                <select {...register("topic")} className="input">
                  <option>Buy artwork</option>
                  <option>Frame rental (realtor)</option>
                  <option>Business décor</option>
                  <option>Free advice</option>
                </select>
              </Field>
              <Field label="Message" error={errors.message?.message}>
                <textarea {...register("message")} rows={5} className="input resize-none" placeholder="Tell us about your space, dimensions, style preferences..." />
              </Field>
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 disabled:opacity-60"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid var(--color-input);
          background: var(--color-background);
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          color: var(--color-foreground);
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .input:focus {
          border-color: var(--color-ring);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-ring) 15%, transparent);
        }
      `}</style>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
