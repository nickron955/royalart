import { createFileRoute, Link } from "@tanstack/react-router";
import aboutImg from "@/assets/about-studio.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Royal Art — Passion for Art, Made Accessible" },
      { name: "description", content: "We help homeowners, realtors and businesses transform their spaces with affordable, stylish art." },
      { property: "og:title", content: "About — Royal Art" },
      { property: "og:description", content: "Passion for art. Stylish, accessible décor." },
      { property: "og:image", content: aboutImg },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Our Story</span>
          <h1 className="mt-3 font-display text-5xl font-semibold leading-tight md:text-6xl">
            Art that <em className="italic text-accent">moves</em> people — and properties.
          </h1>
        </div>
        <div className="space-y-6 text-lg text-muted-foreground text-pretty lg:col-span-7 lg:pt-6">
          <p>
            Royal Art started with a simple belief: a beautiful space can change how you feel every single day. What began as a small collection of paintings shared on Facebook Marketplace grew into a curated gallery serving homeowners, realtors and businesses across Canada.
          </p>
          <p>
            We work with independent artists to bring you original paintings, framed prints and décor pieces that don't feel mass-produced. Then we make them accessible — through fair pricing, frame rentals, and free décor advice anytime you need it.
          </p>
          <p>
            Whether you're styling your forever home, staging a listing, or refreshing a business space — we'd love to help you make it feel like yours.
          </p>
        </div>
      </div>

      <div className="mt-20 overflow-hidden rounded-3xl">
        <img
          src={aboutImg}
          alt="Inside our art studio"
          width={1400}
          height={1100}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mt-20 grid gap-10 md:grid-cols-3">
        {[
          { title: "Passion for art", body: "Every piece is chosen by hand. We never sell something we wouldn't hang on our own wall." },
          { title: "Real transformation", body: "From staging a listing to refreshing a clinic, we've seen what the right art can do." },
          { title: "Affordable & stylish", body: "Premium feel without the gallery markup. Rentals from $49/mo, originals from $129." },
        ].map((v) => (
          <div key={v.title}>
            <h3 className="font-display text-2xl">{v.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{v.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 flex flex-col items-start gap-6 rounded-3xl bg-foreground px-8 py-12 text-background md:flex-row md:items-center md:justify-between md:px-12">
        <p className="font-display text-2xl md:text-3xl">Let's transform your space — together.</p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-transform hover:-translate-y-0.5"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
