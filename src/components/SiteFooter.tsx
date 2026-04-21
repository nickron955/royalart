import { Link } from "@tanstack/react-router";
import { Mail, Facebook } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 lg:px-10">
        <div className="md:col-span-2">
          <div className="font-display text-2xl font-semibold">
            Royal<span className="text-accent"> </span>Art
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Premium paintings, wall art and frame rentals — for homes, businesses and realtors who want spaces that feel unforgettable.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/shop" className="hover:text-foreground">Gallery</Link></li>
            <li><Link to="/realtors" className="hover:text-foreground">For Realtors</Link></li>
            <li><Link to="/business" className="hover:text-foreground">For Business</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:bestproduct2299@gmail.com" className="hover:text-foreground">bestproduct2299@gmail.com</a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/marketplace/profile/61573118591231/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <Facebook className="h-4 w-4" /> Facebook Marketplace
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Royal Art — Crafted with care.
      </div>
    </footer>
  );
}
