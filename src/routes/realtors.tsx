import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import realtorImg from "@/assets/realtor-staging.jpg";

export const Route = createFileRoute("/realtors")({
  head: () => ({
    meta: [
      { title: "Art & Frame Rentals for Realtors | Royal Art" },
      { name: "description", content: "Realtor staging art rental — premium paintings and frames to make listings sell faster and for more." },
      { property: "og:title", content: "Frame Rentals for Realtors — Royal Art" },
      { property: "og:description", content: "Stage homes with premium art. Sell faster, sell for more." },
      { property: "og:image", content: realtorImg },
    ],
  }),
  component: RealtorsPage,
});

const benefits = [
  "Affordable monthly frame rental — no purchase required",
  "Curated pieces matched to each property's style",
  "Delivery, install and pickup handled for you",
  "Refresh artwork between listings as often as you like",
];

function RealtorsPage() {
  return (
    <div>
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-12 lg:px-10 lg:py-24">
        <div className="lg:col-span-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">For Realtors</span>
          <h1 className="mt-3 font-display text-5xl font-semibold leading-tight md:text-6xl">
            Art & frame rentals that help <em className="italic text-accent">sell homes faster</em>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            We provide beautiful paintings and frame rentals to help stage homes and apartments. The right décor makes spaces feel premium, attracts more buyers, and helps properties sell faster — and for more.
          </p>

          <ul className="mt-8 space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-sm">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              Enhance Your Listings Today <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6">
          <img
            src={realtorImg}
            alt="Beautifully staged home with premium artwork"
            width={1600}
            height={1100}
            loading="lazy"
            className="h-full w-full rounded-2xl object-cover shadow-xl shadow-foreground/10"
          />
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-7xl px-6 lg:px-10">
        <div className="grid gap-px overflow-hidden rounded-3xl bg-border md:grid-cols-3">
          {[
            { stat: "32%", label: "Higher perceived value on staged listings" },
            { stat: "73%", label: "Faster average days-on-market with art" },
            { stat: "200+", label: "Listings styled across Canada" },
          ].map((s) => (
            <div key={s.label} className="bg-background p-10 text-center">
              <div className="font-display text-5xl font-semibold text-accent">{s.stat}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-3xl px-6 text-center lg:px-10">
        <h2 className="font-display text-4xl font-semibold md:text-5xl">Rent vs. Buy — what's right for you?</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 md:text-left">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="font-display text-2xl">Rent</h3>
            <p className="mt-2 text-sm text-muted-foreground">Perfect for staging. Swap pieces between listings, no commitment.</p>
            <p className="mt-6 font-display text-3xl">From $49<span className="text-base text-muted-foreground">/mo</span></p>
          </div>
          <div className="rounded-2xl bg-foreground p-8 text-background">
            <h3 className="font-display text-2xl">Buy</h3>
            <p className="mt-2 text-sm text-background/70">Own it forever. Free shipping on orders over $200.</p>
            <p className="mt-6 font-display text-3xl">From $129</p>
          </div>
        </div>
      </section>
    </div>
  );
}
