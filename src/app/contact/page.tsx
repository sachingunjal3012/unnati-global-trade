import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
	title: "Contact",
	description: "Contact Unnati Global Trade in Pune, India, about product export requirements or software engineering services.",
	alternates: { canonical: "/contact" }
};

export default function Contact(){return <main className="section"><div className="container"><div className="eyebrow">Contact</div><h1 style={{fontSize:54}}>Let’s Work Together</h1><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24,marginTop:30}}><ContactForm title="Looking for Indian Products?" button="Request Product Quote"/><ContactForm title="Looking for Technology Services?" button="Discuss IT Project"/></div><div className="card" style={{marginTop:24}}><h3>Pune, Maharashtra, India</h3><p style={{color:"var(--muted)"}}><a href="mailto:info@unnatiglobaltrade.com">info@unnatiglobaltrade.com</a><br/><a href="tel:+917249238560">+91 7249238560</a></p></div></div></main>}