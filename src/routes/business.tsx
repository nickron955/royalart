import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import businessImg from "@/assets/business-space.jpg";

export const Route = createFileRoute("/business")({
  head: () => ({
    meta: [
      { title: "Upgrade Your Business Space | Maison.Art" },
      { name: "description", content: "Modern paintings and décor for offices, salons, restaurants and retail. Premium feel, better customer experience." },
      { property: "og:title", content: "Art for Businesses — Maison.Art" },
      { property: "og:description", content: "Upgrade your space and elevate your brand." },
      { property: "og:image", content: businessImg },
    ],
  }),
  component: BusinessPage,
});

const sectors = ["Offices", "Salons & Spas", "Restaurants", "Retail Stores", "Hotels", "Clinics"];

function BusinessPage() {
  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <img
          src={businessImg}
          alt="Modern business interior with vibrant artwork"
          width={1600}
          height={1100}
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">For Business</span>
            <h1 className="mt-3 font-display text-5xl font-semibold leading-tight md:text-6xl">
              Upgrade your business <em className="italic text-accent">space</em>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">
              Our modern paintings and décor pieces upgrade your space, create a better customer experience, and add a premium feel to your brand. Perfect for offices, salons, restaurants and retail stores.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              Get Free Décor Advice <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <h2 className="font-display text-4xl font-semibold md:text-5xl">Spaces we elevate.</h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s) => (
            <div key={s} className="group bg-background p-10 transition-colors hover:bg-secondary">
              <span className="font-display text-2xl">{s}</span>
              <ArrowRight className="mt-4 h-5 w-5 text-accent transition-transform group-hover:translate-x-1" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 rounded-3xl bg-secondary p-10 md:grid-cols-3 md:p-16">
          {[
            { title: "Premium feel", body: "Curated, gallery-grade artwork that signals quality the moment customers walk in." },
            { title: "Brand alignment", body: "We help you choose pieces that reinforce your brand's personality and palette." },
            { title: "Effortless install", body: "We handle delivery and installation. You enjoy the transformation." },
          ].map((b) => (
            <div key={b.title}>
              <h3 className="font-display text-2xl">{b.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
