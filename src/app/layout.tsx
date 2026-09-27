import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Unnati Global Trade | Products, Technology & Expertise from India",
  description: "Connecting India's products, technology and expertise with global markets."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>
    <header className="nav">
      <div className="container" style={{height:120,display:"flex",alignItems:"center",justifyContent:"space-between",gap:20}}>
        <Link href="/" aria-label="Unnati Global Trade home" style={{display:"flex",alignItems:"center",flexShrink:0}}><Image src="/logo.png" alt="Unnati Global Trade" width={1536} height={1024} priority style={{width:"clamp(148px, 14vw, 180px)",height:"auto",maxHeight:"100%",objectFit:"contain"}} /></Link>
        <nav style={{display:"flex",gap:22,alignItems:"center",fontSize:14}}>
          <Link href="/about">About Us</Link><Link href="/products">Product Exports</Link>
          <Link href="/services">IT & Software Services</Link><Link href="/markets">Markets</Link>
          <Link href="/contact" className="btn btn-primary">Request a Quote</Link>
        </nav>
      </div>
    </header>
    {children}
    <footer style={{background:"#211a15",color:"#fff",padding:"54px 0"}}>
      <div className="container" style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr",gap:40}}>
        <div><div style={{fontSize:21,fontWeight:800}}>Unnati Global Trade</div><p style={{color:"#cfc5bb",maxWidth:430}}>Connecting India’s Products, Technology & Expertise with Global Markets</p></div>
        <div><b>Explore</b><p><Link href="/about">About Us</Link></p><p><Link href="/products">Product Exports</Link></p><p><Link href="/services">IT Services</Link></p></div>
        <div><b>Contact</b><p style={{color:"#cfc5bb"}}>Pune, Maharashtra, India</p><p style={{color:"#cfc5bb"}}><a href="mailto:info@unnatiglobaltrade.com">info@unnatiglobaltrade.com</a><br/><a href="tel:+917249238560">+91 7249238560</a></p></div>
      </div>
    </footer>
  </body></html>;
}