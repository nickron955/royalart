import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Home, TrendingUp, Heart, Star } from "lucide-react";
import heroImg from "@/assets/hero-living-room.jpg";
import { artworks } from "@/data/artworks";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison.Art — Transform Your Space with Stunning Art & Décor" },
      { name: "description", content: "Premium paintings, home décor and frame rentals for homes, businesses and realtors. Wall art Canada, home décor, realtor staging." },
      { property: "og:title", content: "Maison.Art — Stunning Art & Décor" },
      { property: "og:description", content: "Paintings, wall art & frame rentals to transform any space." },
    ],
  }),
  component: HomePage,
});

const featured = artworks.slice(0, 4);

const benefits = [
  { icon: TrendingUp, title: "Increases property value", body: "Beautifully styled spaces consistently appraise and sell for more." },
  { icon: Heart, title: "Creates emotional connection", body: "Art makes buyers picture themselves living there — and act faster." },
  { icon: Home, title: "Helps homes sell quicker", body: "Staged listings move off market in a fraction of the time." },
];

const testimonials = [
  { name: "Sarah L.", role: "Homeowner", quote: "The piece I bought completely transformed our living room. People keep asking where it's from." },
  { name: "Marcus T.", role: "Realtor", quote: "Renting frames for my listings has been a game-changer. Houses feel finished — and they sell faster." },
  { name: "Priya R.", role: "Salon Owner", quote: "My clients comment on the artwork every single day. It made the whole space feel premium." },
];

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-12 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:pb-32 lg:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 lg:pt-12"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3 w-3 text-accent" /> Curated paintings & frame rentals
            </span>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] text-balance md:text-6xl lg:text-7xl">
              Transform your space with stunning <em className="italic text-accent">art & décor</em>.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground text-pretty">
              Premium paintings, wall art and frame rentals — for homes, businesses and realtors who want a space that feels unforgettable.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                Shop the Gallery <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Get in Touch
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-ochre text-ochre" />)}
                <span className="ml-2 font-medium text-foreground">4.9</span>
              </div>
              <span>Loved by 200+ homeowners & realtors</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-accent/20 via-ochre/10 to-transparent blur-2xl" />
              <img
                src={heroImg}
                alt="Modern living room featuring a large abstract painting"
                width={1600}
                height={1200}
                className="h-full w-full rounded-2xl object-cover shadow-2xl shadow-foreground/10"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED ARTWORK */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Featured</span>
            <h2 className="mt-2 font-display text-4xl font-semibold md:text-5xl">New in the gallery</h2>
          </div>
          <Link to="/shop" className="hidden text-sm font-medium text-foreground underline-offset-4 hover:underline md:inline-flex">
            See all →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((art, i) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group"
            >
              <div className="overflow-hidden rounded-xl bg-secondary">
                <img
                  src={art.image}
                  alt={art.title}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <h3 className="font-display text-lg font-medium">{art.title}</h3>
                  <p className="text-xs text-muted-foreground">{art.style} · {art.size}</p>
                </div>
                <span className="font-display text-lg">${art.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto mt-32 max-w-7xl px-6 lg:px-10">
        <div className="rounded-3xl bg-foreground px-8 py-16 text-background md:px-16 md:py-24">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-ochre">Why it works</span>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
              Art does more than decorate. It <em className="italic">sells</em>.
            </h2>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title}>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-background/10">
                  <b.icon className="h-5 w-5 text-ochre" />
                </div>
                <h3 className="mt-5 font-display text-xl">{b.title}</h3>
                <p className="mt-2 text-sm text-background/70">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto mt-32 max-w-7xl px-6 lg:px-10">
        <h2 className="font-display text-4xl font-semibold md:text-5xl">Loved by clients across Canada.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-4 flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-ochre text-ochre" />)}
              </div>
              <blockquote className="font-display text-lg leading-snug text-pretty">"{t.quote}"</blockquote>
              <figcaption className="mt-6 text-sm">
                <div className="font-medium">{t.name}</div>
                <div className="text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-32 max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start gap-6 rounded-3xl bg-accent px-8 py-16 text-accent-foreground md:flex-row md:items-center md:justify-between md:px-16">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">Ready to transform your space?</h2>
            <p className="mt-3 text-accent-foreground/85">Message us today for free décor advice or to reserve a piece.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
          >
            Message Us Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
