import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard"; import { products } from "@/data/products";

export const metadata: Metadata = {
	title: "Indian Product Exports",
	description: "Explore selected Indian products for international buyers, including cocopeat, frozen sweet corn and millet khakhra.",
	alternates: { canonical: "/products" }
};

export default function Products(){return <main className="section"><div className="container"><div className="eyebrow">Product Exports</div><h1 style={{fontSize:54}}>Indian Products for Global Markets</h1><p style={{color:"var(--muted)",fontSize:18}}>Selected products sourced from India. Specifications are confirmed based on supplier and buyer requirements.</p><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,520px),1fr))",gap:22,marginTop:35}}>{products.map(p=><ProductCard key={p.slug}{...p}/>)}</div></div></main>}