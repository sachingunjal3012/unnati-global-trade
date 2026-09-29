import type { MetadataRoute } from "next";
import { products } from "@/data/products";

const base = "https://www.unnatiglobaltrade.com";

export default function sitemap(): MetadataRoute.Sitemap {
	const pages: MetadataRoute.Sitemap = [
		{ url: `${base}/`, changeFrequency: "weekly", priority: 1 },
		{ url: `${base}/about`, changeFrequency: "monthly", priority: 0.7 },
		{ url: `${base}/products`, changeFrequency: "weekly", priority: 0.9 },
		{ url: `${base}/services`, changeFrequency: "monthly", priority: 0.8 },
		{ url: `${base}/markets`, changeFrequency: "monthly", priority: 0.6 },
		{ url: `${base}/contact`, changeFrequency: "yearly", priority: 0.6 }
	];

	const productPages: MetadataRoute.Sitemap = products.map((product) => ({
		url: `${base}/products/${product.slug}`,
		changeFrequency: "monthly",
		priority: 0.7
	}));

	return [...pages, ...productPages];
}