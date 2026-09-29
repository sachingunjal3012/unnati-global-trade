import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Us",
	description: "Learn about Unnati Global Trade, an India-based business connecting global customers with selected Indian products and technology services.",
	alternates: { canonical: "/about" }
};

export default function About(){return <main className="section"><div className="container"><div className="eyebrow">About Us</div><h1 style={{fontSize:54}}>About Unnati Global Trade</h1><p style={{fontSize:20,lineHeight:1.7,color:"var(--muted)",maxWidth:850}}>Unnati Global Trade is an India-based business connecting global customers with Indian products and technology capabilities.</p><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:22,marginTop:35}}><div className="card"><h2>Product Exports</h2><p>Connecting international buyers with selected Indian products.</p></div><div className="card"><h2>IT & Software Services</h2><p>Connecting businesses with Indian technology expertise for software development, modernization and digital engineering.</p></div></div><div className="card" style={{marginTop:22}}><h2>Core Values</h2><p>Transparency · Quality · Reliability · Customer Focus · Long-Term Relationships</p></div></div></main>}