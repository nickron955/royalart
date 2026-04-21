import art1 from "@/assets/art-1.jpg";
import art2 from "@/assets/art-2.jpg";
import art3 from "@/assets/art-3.jpg";
import art4 from "@/assets/art-4.jpg";
import art5 from "@/assets/art-5.jpg";
import art6 from "@/assets/art-6.jpg";

export type Size = "Small" | "Medium" | "Large";
export type Style = "Abstract" | "Botanical" | "Geometric" | "Landscape" | "Floral" | "Photography";

export interface Artwork {
  id: string;
  title: string;
  price: number;
  image: string;
  size: Size;
  style: Style;
  description: string;
}

export const artworks: Artwork[] = [
  { id: "ember", title: "Ember Drift", price: 189, image: art1, size: "Large", style: "Abstract", description: "Sweeping orange brushwork on cream — a centerpiece for living rooms." },
  { id: "olive", title: "Olive Whisper", price: 129, image: art2, size: "Medium", style: "Botanical", description: "Quiet sage botanical study, framed in oak. Calming and timeless." },
  { id: "marigold", title: "Marigold Geometry", price: 219, image: art3, size: "Large", style: "Geometric", description: "Bold mid-century shapes in navy and mustard. Statement modern art." },
  { id: "tide", title: "Atlantic Tide", price: 249, image: art4, size: "Large", style: "Landscape", description: "Moody coastal seascape — deep teals meet warm sand." },
  { id: "peony", title: "Blush Peonies", price: 159, image: art5, size: "Medium", style: "Floral", description: "Soft watercolor peonies in a slim gold frame. Romantic and elegant." },
  { id: "arches", title: "Arches No. 7", price: 139, image: art6, size: "Medium", style: "Photography", description: "Architectural fine-art photography — minimal black and white." },
];
