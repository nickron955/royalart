import { MessageCircle } from "lucide-react";

export function FloatingCTA() {
  return (
    <a
      href="https://www.facebook.com/marketplace/profile/61573118591231/"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground shadow-lg shadow-accent/30 transition-all hover:-translate-y-0.5 hover:shadow-xl"
    >
      <MessageCircle className="h-4 w-4" />
      Message Us
    </a>
  );
}
