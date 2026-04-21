import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { artworks, type Size, type Style } from "@/data/artworks";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Gallery — Shop Paintings & Wall Art | Royal Art" },
      { name: "description", content: "Browse premium paintings and wall art. Filter by size, style and price. Wall art Canada, home décor, framed art." },
      { property: "og:title", content: "Gallery — Royal Art" },
      { property: "og:description", content: "Hand-picked paintings and framed wall art." },
    ],
  }),
  component: ShopPage,
});

const sizes: Size[] = ["Small", "Medium", "Large"];
const styles: Style[] = ["Abstract", "Botanical", "Geometric", "Landscape", "Floral", "Photography"];
const priceRanges = [
  { label: "All", min: 0, max: Infinity },
  { label: "Under $150", min: 0, max: 149 },
  { label: "$150–$200", min: 150, max: 200 },
  { label: "$200+", min: 201, max: Infinity },
];

function ShopPage() {
  const [size, setSize] = useState<Size | "All">("All");
  const [style, setStyle] = useState<Style | "All">("All");
  const [priceIdx, setPriceIdx] = useState(0);

  const filtered = useMemo(() => {
    const range = priceRanges[priceIdx];
    return artworks.filter((a) =>
      (size === "All" || a.size === size) &&
      (style === "All" || a.style === style) &&
      a.price >= range.min && a.price <= range.max
    );
  }, [size, style, priceIdx]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
      <header className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-accent">The Gallery</span>
        <h1 className="mt-3 font-display text-5xl font-semibold md:text-6xl">Original art for every wall.</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Hand-picked paintings, framed prints and statement pieces. Limited quantities — when it's gone, it's gone.
        </p>
      </header>

      {/* Filters */}
      <div className="mt-12 flex flex-wrap gap-6 border-y border-border py-5 text-sm">
        <FilterGroup label="Size">
          <Chip active={size === "All"} onClick={() => setSize("All")}>All</Chip>
          {sizes.map((s) => <Chip key={s} active={size === s} onClick={() => setSize(s)}>{s}</Chip>)}
        </FilterGroup>
        <FilterGroup label="Style">
          <Chip active={style === "All"} onClick={() => setStyle("All")}>All</Chip>
          {styles.map((s) => <Chip key={s} active={style === s} onClick={() => setStyle(s)}>{s}</Chip>)}
        </FilterGroup>
        <FilterGroup label="Price">
          {priceRanges.map((p, i) => (
            <Chip key={p.label} active={priceIdx === i} onClick={() => setPriceIdx(i)}>{p.label}</Chip>
          ))}
        </FilterGroup>
      </div>

      {/* Grid */}
      <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((art, i) => (
          <motion.article
            key={art.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
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
            <div className="mt-5 flex items-start justify-between gap-3">
              <div>
                <h2 className="font-display text-xl">{art.title}</h2>
                <p className="mt-0.5 text-xs uppercase tracking-wider text-muted-foreground">{art.style} · {art.size}</p>
                <p className="mt-2 text-sm text-muted-foreground">{art.description}</p>
              </div>
              <span className="font-display text-xl">${art.price}</span>
            </div>
            <a
              href="https://www.facebook.com/marketplace/profile/61573118591231/"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              Inquire →
            </a>
          </motion.article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-20 text-center text-muted-foreground">No pieces match those filters yet.</div>
      )}
    </div>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</span>
      {children}
    </div>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
        active
          ? "border-foreground bg-foreground text-background"
          : "border-border bg-background text-foreground hover:border-foreground/40"
      }`}
    >
      {children}
    </button>
  );
}
