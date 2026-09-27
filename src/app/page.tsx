import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import ServiceCard from "@/components/ServiceCard";
import { products } from "@/data/products";
import { services } from "@/data/services";

export default function Home() {
 return <>
  <main>
   <section className="hero-grid section"><div className="container" style={{display:"grid",gridTemplateColumns:"1.15fr .85fr",gap:60,alignItems:"center"}}>
    <div><div className="eyebrow">India → Global Markets</div><h1 style={{fontSize:"clamp(42px,6vw,72px)",lineHeight:1.03,margin:"18px 0"}}>Connecting India’s Products, Technology & Expertise with Global Markets</h1>
    <p style={{fontSize:19,lineHeight:1.65,color:"var(--muted)",maxWidth:680}}>Unnati Global Trade connects international businesses with selected Indian products and technology expertise across product exports and IT services.</p>
    <div style={{display:"flex",gap:12,marginTop:28}}><Link className="btn btn-primary" href="#business">Explore Our Business</Link><Link className="btn btn-light" href="/contact">Contact Us</Link></div></div>
    <div className="card" style={{minHeight:390,display:"grid",placeItems:"center",background:"linear-gradient(145deg,#fff,#e8eee7)"}}><div style={{textAlign:"center"}}><div style={{fontSize:82}}>INDIA</div><div style={{fontSize:20,color:"var(--muted)",marginTop:10}}>↔ Global Markets</div></div></div>
   </div></section>

   <section id="business" className="section"><div className="container"><div className="eyebrow">What We Do</div><h2 style={{fontSize:42,margin:"12px 0 35px"}}>Two business verticals. One global focus.</h2>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24}}>
     <div className="card" style={{borderTop:"5px solid var(--green)"}}><h2>Product Exports</h2><p style={{color:"var(--muted)",lineHeight:1.6}}>We source selected Indian agricultural, food and other products for international buyers, distributors and businesses.</p><p>Cocopeat · Frozen Sweet Corn · Millet Khakhra · Other selected products</p><Link className="btn btn-primary" href="/products">Explore Products</Link></div>
     <div className="card" style={{borderTop:"5px solid var(--tech)"}}><h2>IT & Software Services</h2><p style={{color:"var(--muted)",lineHeight:1.6}}>We provide software development and technology engineering services for businesses looking to build, modernize or enhance digital applications.</p><p>Java · Spring Boot · Microservices · APIs · Cloud · AI & GenAI</p><Link className="btn btn-primary" href="/services">Explore IT Services</Link></div>
    </div>
   </div></section>

   <section className="section" style={{background:"#f0f4ef"}}><div className="container"><div className="eyebrow">Product Exports</div><h2 style={{fontSize:42}}>Indian Products for Global Markets</h2><p style={{color:"var(--muted)",maxWidth:700}}>Connecting international buyers with selected products sourced from India.</p><div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:18,marginTop:30}}>{products.map(p=><ProductCard key={p.slug} {...p}/>)}</div></div></section>

   <section className="section"><div className="container"><div className="eyebrow">IT & Software Services</div><h2 style={{fontSize:42}}>Technology Expertise from India</h2><p style={{color:"var(--muted)"}}>Software engineering and technology capabilities for global businesses.</p><div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:18,marginTop:30}}>{services.map(([title,description])=><ServiceCard key={title} title={title} description={description}/>)}</div></div></section>

   <section className="section" style={{background:"#211a15",color:"#fff"}}><div className="container" style={{textAlign:"center"}}><div className="eyebrow" style={{color:"#a9c6b0"}}>Start a Conversation</div><h2 style={{fontSize:46,margin:"14px auto",maxWidth:800}}>Have a product requirement or technology project?</h2><p style={{color:"#cfc5bb",fontSize:18}}>Tell us what you need and we can discuss the next steps.</p><Link className="btn btn-light" href="/contact">Contact Us</Link></div></section>
  </main>
 </>;
}