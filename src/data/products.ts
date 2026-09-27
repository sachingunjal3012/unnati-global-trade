export type ProductImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit?: string;
  source?: string;
  license?: string;
  licenseUrl?: string;
};

export type Product = {
  slug: string;
  name: string;
  description: string;
  image?: ProductImage;
};

export const products: Product[] = [
  {
    slug: "cocopeat",
    name: "Cocopeat",
    description: "Horticulture and growing media products.",
    image: {
      src: "/products/cocopeat-block.webp",
      alt: "Compressed cocopeat brick for horticulture growing media.",
      width: 200,
      height: 250
    }
  },
  {
    slug: "frozen-sweet-corn",
    name: "Frozen Sweet Corn",
    description: "Processed frozen food product for international markets.",
    image: {
      src: "/products/frozen-sweet-corn.webp",
      alt: "Frozen sweet corn product.",
      width: 500,
      height: 500
    }
  },
  {
    slug: "millet-khakhra",
    name: "Millet Khakhra",
    description: "Indian food product suitable for international food markets.",
    image: {
      src: "/products/millet-khakhra.webp",
      alt: "Plain square khakhra snack arranged neatly.",
      width: 1024,
      height: 1024
    }
  },
  {
    slug: "other-products",
    name: "Other Products",
    description: "Additional products based on buyer requirements and sourcing capabilities."
  }
];