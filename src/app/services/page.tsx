import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard"; import EngineeringGallery from "@/components/EngineeringGallery"; import { services } from "@/data/services"; import Link from "next/link";

export const metadata: Metadata = {
	title: "IT & Software Services",
	description: "Software development and technology engineering from India, including Java, Spring Boot, APIs, cloud, application modernization and AI solutions.",
	alternates: { canonical: "/services" }
};

export default function Services(){return <main><section className="section" style={{background:"#edf3f6"}}><div className="container"><div className="eyebrow" style={{color:"var(--tech)"}}>IT & Software Services</div><h1 style={{fontSize:56,maxWidth:850}}>Technology Expertise from India</h1><p style={{fontSize:20,color:"var(--muted)",maxWidth:760}}>Software engineering and technology capabilities for global businesses.</p><Link className="btn btn-primary" href="/contact">Discuss Your Project</Link></div></section><EngineeringGallery/><section className="section"><div className="container"><h2 style={{fontSize:42}}>Services</h2><div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:18}}>{services.map(([title,description])=><ServiceCard key={title} title={title} description={description}/>)}</div></div></section><section className="section"><div className="container"><h2 style={{fontSize:42}}>Technology Capabilities</h2><div style={{display:"flex",flexWrap:"wrap",gap:10,marginTop:20}}>{["Java","Spring Boot","Microservices","REST APIs","Oracle","SQL","IBM MQ","Kubernetes","Docker","Cloud","CI/CD","AI","Generative AI","RAG","LLM Integration"].map(x=><span key={x} className="btn btn-light">{x}</span>)}</div></div></section></main>}